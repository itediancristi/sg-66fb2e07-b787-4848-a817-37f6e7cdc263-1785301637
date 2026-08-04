-- Create storage buckets for player media
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('player-videos', 'player-videos', true),
  ('player-photos', 'player-photos', true),
  ('player-documents', 'player-documents', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for player-videos bucket
CREATE POLICY "public_read_videos" ON storage.objects
  FOR SELECT USING (bucket_id = 'player-videos');

CREATE POLICY "public_upload_videos" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'player-videos');

CREATE POLICY "admin_manage_videos" ON storage.objects
  FOR ALL USING (
    bucket_id = 'player-videos' AND
    EXISTS (SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid())
  );

-- Storage policies for player-photos bucket
CREATE POLICY "public_read_photos" ON storage.objects
  FOR SELECT USING (bucket_id = 'player-photos');

CREATE POLICY "public_upload_photos" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'player-photos');

CREATE POLICY "admin_manage_photos" ON storage.objects
  FOR ALL USING (
    bucket_id = 'player-photos' AND
    EXISTS (SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid())
  );

-- Storage policies for player-documents bucket (private)
CREATE POLICY "admin_manage_documents" ON storage.objects
  FOR ALL USING (
    bucket_id = 'player-documents' AND
    EXISTS (SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid())
  );