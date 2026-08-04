-- RLS Policies for applications table
-- Public can insert (from apply form), admins can read/update
CREATE POLICY "public_insert_applications" ON applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "admin_read_applications" ON applications
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "admin_update_applications" ON applications
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid()
    )
  );

-- RLS Policies for admin_users table
-- Only admins can read admin_users
CREATE POLICY "admin_read_admin_users" ON admin_users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM admin_users au
      WHERE au.id = auth.uid()
    )
  );

-- RLS Policies for player_profiles table
-- Public can read published profiles, admins can do everything
CREATE POLICY "public_read_published_profiles" ON player_profiles
  FOR SELECT USING (is_published = true);

CREATE POLICY "admin_all_player_profiles" ON player_profiles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.id = auth.uid()
    )
  );