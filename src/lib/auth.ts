/**
 * Check if a user email is authorized as an admin
 */
export function isAdminUser(email: string): boolean {
  const adminEmails = process.env.ADMIN_EMAILS;
  
  if (!adminEmails) {
    console.warn('ADMIN_EMAILS environment variable not set');
    return false;
  }
  
  const allowedEmails = adminEmails
    .split(',')
    .map(email => email.trim().toLowerCase());
  
  return allowedEmails.includes(email.toLowerCase());
}

/**
 * Get admin email list for debugging
 */
export function getAdminEmails(): string[] {
  const adminEmails = process.env.ADMIN_EMAILS;
  
  if (!adminEmails) {
    return [];
  }
  
  return adminEmails
    .split(',')
    .map(email => email.trim());
}
