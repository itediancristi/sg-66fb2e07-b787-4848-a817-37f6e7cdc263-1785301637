import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/database.types";

type Application = Database["public"]["Tables"]["applications"]["Row"];
type ApplicationInsert = Database["public"]["Tables"]["applications"]["Insert"];
type ApplicationUpdate = Database["public"]["Tables"]["applications"]["Update"];
type PlayerProfile = Database["public"]["Tables"]["player_profiles"]["Row"];

export const adminService = {
  // Check if current user is admin
  async isAdmin(): Promise<boolean> {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { data } = await supabase
      .from("admin_users")
      .select("id")
      .eq("id", user.id)
      .single();

    return !!data;
  },

  // Get all applications with filters
  async getApplications(filters?: {
    status?: string;
    search?: string;
    sortBy?: string;
  }): Promise<Application[]> {
    let query = supabase
      .from("applications")
      .select("*")
      .order(filters?.sortBy || "created_at", { ascending: false });

    if (filters?.status && filters.status !== "all") {
      query = query.eq("status", filters.status);
    }

    if (filters?.search) {
      query = query.or(`full_name.ilike.%${filters.search}%,email.ilike.%${filters.search}%,position.ilike.%${filters.search}%`);
    }

    const { data, error } = await query;
    if (error) throw error;
    return data ?? [];
  },

  // Get single application
  async getApplication(id: string): Promise<Application | null> {
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  // Update application status
  async updateApplicationStatus(
    id: string,
    status: string,
    adminNotes?: string
  ): Promise<void> {
    const { data: { user } } = await supabase.auth.getUser();
    
    const { error } = await supabase
      .from("applications")
      .update({
        status,
        admin_notes: adminNotes,
        reviewed_by: user?.id,
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) throw error;
  },

  // Publish approved application to player profiles
  async publishApplication(applicationId: string): Promise<void> {
    const application = await this.getApplication(applicationId);
    if (!application) throw new Error("Application not found");
    if (application.status !== "approved") {
      throw new Error("Only approved applications can be published");
    }

    // Calculate age from date_of_birth
    const birthDate = new Date(application.date_of_birth);
    const age = new Date().getFullYear() - birthDate.getFullYear();

    // Create or update player profile
    const { error } = await supabase
      .from("player_profiles")
      .upsert({
        application_id: applicationId,
        full_name: application.full_name,
        position: application.position,
        nationality: application.nationality,
        age,
        height: application.height,
        weight: application.weight,
        preferred_foot: application.preferred_foot,
        current_club: application.current_club,
        career_highlights: application.career_highlights,
        achievements: application.achievements,
        playing_style: application.playing_style,
        video_url: application.video_url,
        photo_url: application.photo_url,
        is_published: true,
        published_at: new Date().toISOString(),
      });

    if (error) throw error;

    // Update application status to published
    await this.updateApplicationStatus(applicationId, "published");
  },

  // Get dashboard stats
  async getDashboardStats() {
    const { data: applications } = await supabase
      .from("applications")
      .select("status");

    const stats = {
      total: applications?.length ?? 0,
      pending: applications?.filter(a => a.status === "pending").length ?? 0,
      reviewed: applications?.filter(a => a.status === "reviewed").length ?? 0,
      approved: applications?.filter(a => a.status === "approved").length ?? 0,
      rejected: applications?.filter(a => a.status === "rejected").length ?? 0,
      published: applications?.filter(a => a.status === "published").length ?? 0,
    };

    return stats;
  },

  // Upload file to Supabase Storage
  async uploadFile(
    bucket: string,
    path: string,
    file: File
  ): Promise<string> {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file);

    if (error) throw error;

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(path);

    return publicUrl;
  },
};