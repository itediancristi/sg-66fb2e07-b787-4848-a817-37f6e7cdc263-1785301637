import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { adminService } from "@/services/adminService";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, CheckCircle, XCircle, Eye, Upload, FileText, Video, Image as ImageIcon } from "lucide-react";
import type { Database } from "@/integrations/supabase/database.types";
import Image from "next/image";

type Application = Database["public"]["Tables"]["applications"]["Row"];

export default function ApplicationDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [application, setApplication] = useState<Application | null>(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [adminNotes, setAdminNotes] = useState("");
  const [showPublishDialog, setShowPublishDialog] = useState(false);
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    if (id) {
      loadApplication();
    }
  }, [id]);

  const loadApplication = async () => {
    try {
      const data = await adminService.getApplication(id as string);
      if (data) {
        setApplication(data);
        setSelectedStatus(data.status);
        setAdminNotes(data.admin_notes || "");
      }
      setLoading(false);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      router.push("/admin/dashboard");
    }
  };

  const handleStatusUpdate = async () => {
    if (!application) return;

    try {
      await adminService.updateApplicationStatus(
        application.id,
        selectedStatus,
        adminNotes
      );

      toast({
        title: "Success",
        description: "Application status updated",
      });

      loadApplication();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handlePublish = async () => {
    if (!application) return;

    setPublishing(true);
    try {
      await adminService.publishApplication(application.id);

      toast({
        title: "Success",
        description: "Player profile published successfully",
      });

      setShowPublishDialog(false);
      loadApplication();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setPublishing(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
      pending: "secondary",
      reviewed: "outline",
      approved: "default",
      rejected: "destructive",
      published: "default",
    };
    return (
      <Badge variant={variants[status] || "outline"} className="text-sm">
        {status.toUpperCase()}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-green mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Application not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => router.push("/admin/dashboard")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-xl font-bold">{application.full_name}</h1>
                <p className="text-sm text-muted-foreground">{application.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {getStatusBadge(application.status)}
              {application.status === "approved" && (
                <Button onClick={() => setShowPublishDialog(true)} size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Publish Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Player Information */}
            <Card>
              <CardHeader>
                <CardTitle>Player Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">{application.full_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date of Birth</p>
                    <p className="font-medium">{new Date(application.date_of_birth).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Nationality</p>
                    <p className="font-medium">{application.nationality}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Position</p>
                    <p className="font-medium">{application.position}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Height</p>
                    <p className="font-medium">{application.height} cm</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Weight</p>
                    <p className="font-medium">{application.weight} kg</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Preferred Foot</p>
                    <p className="font-medium capitalize">{application.preferred_foot}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Current Club</p>
                    <p className="font-medium">{application.current_club || "N/A"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Career Details */}
            <Card>
              <CardHeader>
                <CardTitle>Career Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Career Highlights</p>
                  <p className="text-sm whitespace-pre-wrap">{application.career_highlights || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Achievements</p>
                  <p className="text-sm whitespace-pre-wrap">{application.achievements || "N/A"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Playing Style</p>
                  <p className="text-sm whitespace-pre-wrap">{application.playing_style || "N/A"}</p>
                </div>
              </CardContent>
            </Card>

            {/* Media */}
            <Card>
              <CardHeader>
                <CardTitle>Media</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {application.photo_url && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Player Photo</p>
                    <div className="relative w-full h-64 bg-muted rounded-lg overflow-hidden">
                      <Image
                        src={application.photo_url}
                        alt="Player photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                {application.video_url && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Highlight Video</p>
                    <a 
                      href={application.video_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neon-green hover:underline"
                    >
                      <Video className="w-4 h-4" />
                      View Video
                    </a>
                  </div>
                )}
                {application.documents_url && application.documents_url.length > 0 && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Documents</p>
                    <div className="space-y-2">
                      {application.documents_url.map((doc: string, idx: number) => (
                        <a
                          key={idx}
                          href={doc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-neon-green hover:underline"
                        >
                          <FileText className="w-4 h-4" />
                          Document {idx + 1}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Management */}
            <Card>
              <CardHeader>
                <CardTitle>Status Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Application Status</Label>
                  <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="reviewed">Reviewed</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Admin Notes</Label>
                  <Textarea
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    placeholder="Add internal notes about this application..."
                    rows={4}
                  />
                </div>

                <Button 
                  onClick={handleStatusUpdate} 
                  className="w-full"
                  disabled={selectedStatus === application.status && adminNotes === (application.admin_notes || "")}
                >
                  Update Status
                </Button>
              </CardContent>
            </Card>

            {/* Application Metadata */}
            <Card>
              <CardHeader>
                <CardTitle>Metadata</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Submitted</p>
                  <p className="font-medium">{new Date(application.created_at).toLocaleString()}</p>
                </div>
                {application.reviewed_at && (
                  <div>
                    <p className="text-muted-foreground">Last Reviewed</p>
                    <p className="font-medium">{new Date(application.reviewed_at).toLocaleString()}</p>
                  </div>
                )}
                <div>
                  <p className="text-muted-foreground">Application ID</p>
                  <p className="font-mono text-xs">{application.id}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Publish Confirmation Dialog */}
      <Dialog open={showPublishDialog} onOpenChange={setShowPublishDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Publish Player Profile</DialogTitle>
            <DialogDescription>
              This will create a public player profile and make it visible on the website. Are you sure you want to continue?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowPublishDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handlePublish} disabled={publishing}>
              {publishing ? "Publishing..." : "Publish Profile"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}