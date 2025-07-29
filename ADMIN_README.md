# Admin Dashboard

The admin dashboard provides a comprehensive interface for managing contact form submissions and site settings.

## Access

The admin dashboard can be accessed at `/admin`. A small, discrete link is available in the footer (represented by a "•" after the copyright text).

## Login

- **Default Password**: `admin123`
- Authentication is session-based and stores login state in `sessionStorage`
- **Security Note**: In production, implement proper authentication with environment-based passwords or OAuth

## Features

### 1. Contact Form Management
- View all contact form submissions with detailed information
- Search and filter submissions
- View submission details in a modal
- Delete submissions
- Quick stats showing total submissions and recent activity
- Direct email and phone links for easy contact

### 2. Song Request Management
- View all song requests (active and archived)
- Archive song requests to mark as handled
- Permanently delete song requests
- Direct links to view songs on external platforms
- Stats showing total, active, and archived requests

### 3. Site Settings
- **Song Requests Toggle**: Enable/disable song request submissions site-wide
- Statistics overview showing total submissions and requests
- Real-time updates when settings are changed

## API Endpoints

### Contact Submissions
- `GET /api/admin/contact-submissions` - Fetch all submissions
- `DELETE /api/admin/contact-submissions/[id]` - Delete a submission

### Song Requests
- `GET /api/song-requests` - Fetch all song requests
- `PUT /api/song-requests/[id]` - Update song request (archive/unarchive)
- `DELETE /api/song-requests/[id]` - Permanently delete song request

### Settings
- `GET /api/admin/settings` - Fetch app settings
- `PUT /api/admin/settings` - Update app settings

## Database Schema

### Contact Form Submissions
```sql
contact_form_submissions (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  phone_number VARCHAR NOT NULL,
  event_type_id INTEGER NOT NULL,
  date_of_event DATE NOT NULL,
  venue_location VARCHAR NOT NULL,
  event_description TEXT NOT NULL,
  submitted_at TIMESTAMP DEFAULT NOW()
)
```

### App Settings
```sql
app_settings (
  id SERIAL PRIMARY KEY,
  accepting_song_requests BOOLEAN DEFAULT FALSE
)
```

### Song Requests
```sql
song_requests (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  artist_names VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  image_url VARCHAR NOT NULL,
  request_date TIMESTAMP DEFAULT NOW(),
  is_archived BOOLEAN DEFAULT FALSE
)
```

## Security Considerations

1. **Password Protection**: Change the default password in production
2. **Environment Variables**: Store admin credentials securely
3. **Rate Limiting**: Consider implementing rate limiting for admin endpoints
4. **HTTPS**: Ensure admin access is only over HTTPS in production
5. **Session Management**: Consider implementing proper session management with expiration

## Usage Tips

1. **Regular Cleanup**: Regularly archive or delete old submissions to keep the dashboard manageable
2. **Contact Management**: Use the email/phone links to quickly respond to inquiries
3. **Song Request Monitoring**: Monitor song requests to understand music preferences
4. **Settings Management**: Toggle song requests based on current capacity or events

## Future Enhancements

- Multi-user authentication with role-based access
- Email integration for responding directly from the dashboard
- Export functionality for submissions
- Advanced filtering and search capabilities
- Analytics and reporting features
- Bulk operations for managing multiple items
