-- Applications table: stores all player application submissions
CREATE TABLE applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text NOT NULL,
  date_of_birth date NOT NULL,
  nationality text NOT NULL,
  phone text NOT NULL,
  
  -- Player info
  position text NOT NULL,
  height numeric,
  weight numeric,
  preferred_foot text,
  current_club text,
  previous_clubs text[],
  
  -- Career info
  career_highlights text,
  achievements text[],
  playing_style text,
  
  -- Media URLs (Supabase Storage paths)
  video_url text,
  documents_url text[],
  photo_url text,
  
  -- Status management
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'approved', 'rejected', 'published')),
  admin_notes text,
  reviewed_by uuid REFERENCES auth.users(id),
  reviewed_at timestamp with time zone,
  
  -- Metadata
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Admin users table: tracks which users have admin access
CREATE TABLE admin_users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL UNIQUE,
  full_name text,
  role text NOT NULL DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  created_at timestamp with time zone DEFAULT now(),
  last_login timestamp with time zone
);

-- Player profiles table: published player profiles visible on public site
CREATE TABLE player_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid REFERENCES applications(id) ON DELETE CASCADE,
  
  -- Public profile data
  full_name text NOT NULL,
  position text NOT NULL,
  nationality text NOT NULL,
  age integer,
  height numeric,
  weight numeric,
  preferred_foot text,
  current_club text,
  
  -- Showcase data
  career_highlights text,
  achievements text[],
  playing_style text,
  video_url text,
  photo_url text,
  
  -- Visibility
  is_published boolean DEFAULT false,
  published_at timestamp with time zone,
  views_count integer DEFAULT 0,
  
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Indexes for performance
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_created_at ON applications(created_at DESC);
CREATE INDEX idx_applications_email ON applications(email);
CREATE INDEX idx_player_profiles_published ON player_profiles(is_published);
CREATE INDEX idx_player_profiles_position ON player_profiles(position);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers
CREATE TRIGGER update_applications_updated_at BEFORE UPDATE ON applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_player_profiles_updated_at BEFORE UPDATE ON player_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE player_profiles ENABLE ROW LEVEL SECURITY;