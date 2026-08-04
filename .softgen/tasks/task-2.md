---
title: Admin Dashboard System
status: in_progress
priority: urgent
type: feature
tags: [admin, supabase, dashboard]
created_by: agent
created_at: 2026-08-04T19:58:36Z
position: 2
---

## Notes
Build a secure admin dashboard connected to Supabase for managing player applications. Every application from the Apply page should appear in the dashboard with full management capabilities.

Architecture: Applications write to Supabase → Admin dashboard reads/manages → Approved profiles publish to public site.

## Checklist
- [x] Create database schema (applications, admin_users, player_profiles tables)
- [x] Configure RLS policies for admin-only access
- [x] Create admin service layer
- [x] Set up Supabase Storage buckets for videos and documents
- [x] Create admin authentication system
- [x] Build admin dashboard layout with navigation
- [x] Create applications table view with filters and search
- [ ] Add application detail view with all player data
- [ ] Implement status management (Pending, Reviewed, Approved, Rejected, Published)
- [ ] Add one-click publish functionality
- [ ] Update Apply form to save to Supabase
- [ ] Test end-to-end flow

## Acceptance
- Admin can log in securely to access dashboard
- All form submissions appear in the dashboard automatically
- Admin can view full application details including uploaded media
- Admin can change application status and publish approved profiles
- Only authenticated admins can access the dashboard
