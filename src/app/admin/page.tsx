'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { 
  Settings, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  User,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  Trash2,
  Eye,
  Music,
  Archive,
  LogOut
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useAuth } from '@/components/auth/auth0-provider';

interface ContactSubmission {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  eventTypeId: number;
  dateOfEvent: string;
  venueLocation: string;
  eventDescription: string;
  submittedAt: string;
}

interface AppSettings {
  id: number;
  acceptingSongRequests: boolean;
}

interface EventType {
  id: number;
  name: string;
}

interface SongRequest {
  id: number;
  title: string;
  artistNames: string;
  url: string;
  imageUrl: string;
  requestDate: string;
  isArchived: boolean;
}

interface ClientIntakeForm {
  id: number;
  clientName: string;
  email: string;
  phoneNumber: string;
  eventDate: string;
  eventType: string;
  venueLocation: string;
  guestCount: number;
  eventDuration: string;
  eventStartTime: string;
  eventEndTime: string;
  musicGenres: string[];
  musicEra: string;
  volumePreference: string;
  mustPlaySongs: string;
  mustPlaySpotifyUrl?: string;
  mustPlayAppleMusicUrl?: string;
  mustPlayOtherUrl?: string;
  doNotPlaySongs: string;
  doNotPlaySpotifyUrl?: string;
  doNotPlayAppleMusicUrl?: string;
  doNotPlayOtherUrl?: string;
  specialAnnouncements?: string;
  firstDanceSong?: string;
  lastDanceSong?: string;
  ceremonySongs?: string;
  equipmentRequests?: string;
  setupRequirements?: string;
  specialRequests?: string;
  dietaryRestrictions?: string;
  accessibilityNeeds?: string;
  submittedAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const { user, isLoading, loginWithRedirect, logout } = useAuth();
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [intakeForms, setIntakeForms] = useState<ClientIntakeForm[]>([]);
  const [settings, setSettings] = useState<AppSettings>({ id: 1, acceptingSongRequests: false });
  const [eventTypes, setEventTypes] = useState<EventType[]>([]);
  const [songRequests, setSongRequests] = useState<SongRequest[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [selectedIntakeForm, setSelectedIntakeForm] = useState<ClientIntakeForm | null>(null);
  const [activeTab, setActiveTab] = useState<'contacts' | 'intake' | 'songs' | 'settings'>('contacts');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      // Load contact submissions
      const submissionsResponse = await fetch('/api/admin/contact-submissions');
      if (submissionsResponse.ok) {
        const submissionsData = await submissionsResponse.json();
        setSubmissions(submissionsData);
      }

      // Load intake forms
      const intakeResponse = await fetch('/api/intake');
      if (intakeResponse.ok) {
        const intakeData = await intakeResponse.json();
        setIntakeForms(intakeData);
      }

      // Load app settings
      const settingsResponse = await fetch('/api/admin/settings');
      if (settingsResponse.ok) {
        const settingsData = await settingsResponse.json();
        setSettings(settingsData);
      }

      // Load event types
      const eventTypesResponse = await fetch('/api/event-types');
      if (eventTypesResponse.ok) {
        const eventTypesData = await eventTypesResponse.json();
        setEventTypes(eventTypesData);
      }

      // Load song requests
      const songRequestsResponse = await fetch('/api/song-requests');
      if (songRequestsResponse.ok) {
        const songRequestsData = await songRequestsResponse.json();
        setSongRequests(songRequestsData);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const updateSettings = async (newSettings: Partial<AppSettings>) => {
    try {
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSettings),
      });

      if (response.ok) {
        const updatedSettings = await response.json();
        setSettings(updatedSettings);
        toast.success('Settings updated successfully');
      } else {
        throw new Error('Failed to update settings');
      }
    } catch (error) {
      toast.error('Failed to update settings');
    }
  };

  const deleteSubmission = async (id: number) => {
    try {
      const response = await fetch(`/api/admin/contact-submissions/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSubmissions(prev => prev.filter(s => s.id !== id));
        toast.success('Submission deleted successfully');
      } else {
        throw new Error('Failed to delete submission');
      }
    } catch (error) {
      toast.error('Failed to delete submission');
    }
  };

  const deleteIntakeForm = async (id: number) => {
    try {
      const response = await fetch(`/api/intake/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setIntakeForms(prev => prev.filter(f => f.id !== id));
        toast.success('Intake form deleted successfully');
      } else {
        throw new Error('Failed to delete intake form');
      }
    } catch (error) {
      toast.error('Failed to delete intake form');
    }
  };

  const archiveSongRequest = async (id: number) => {
    try {
      const response = await fetch(`/api/song-requests/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isArchived: true }),
      });

      if (response.ok) {
        setSongRequests(prev => prev.map(sr => 
          sr.id === id ? { ...sr, isArchived: true } : sr
        ));
        toast.success('Song request archived');
      } else {
        throw new Error('Failed to archive song request');
      }
    } catch (error) {
      toast.error('Failed to archive song request');
    }
  };

  const deleteSongRequest = async (id: number) => {
    try {
      const response = await fetch(`/api/song-requests/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSongRequests(prev => prev.filter(sr => sr.id !== id));
        toast.success('Song request deleted');
      } else {
        throw new Error('Failed to delete song request');
      }
    } catch (error) {
      toast.error('Failed to delete song request');
    }
  };

  const getEventTypeName = (eventTypeId: number) => {
    const eventType = eventTypes.find(et => et.id === eventTypeId);
    return eventType?.name || 'Unknown';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Admin Login Required</CardTitle>
            <CardDescription className="text-center">
              Please sign in to access the admin dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button onClick={loginWithRedirect} className="w-full">
                Sign In
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              {user && (
                <p className="text-sm text-gray-600">Welcome, {user.name || user.email}</p>
              )}
            </div>
            <Button onClick={logout} variant="outline">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('contacts')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'contacts'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Contact Submissions ({submissions.length})
            </button>
            <button
              onClick={() => setActiveTab('intake')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'intake'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Client Intake Forms ({intakeForms.length})
            </button>
            <button
              onClick={() => setActiveTab('songs')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'songs'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Song Requests ({songRequests.filter(sr => !sr.isArchived).length})
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Settings
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'contacts' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Stats */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Submissions:</span>
                      <span className="font-medium">{submissions.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>This Month:</span>
                      <span className="font-medium">
                        {submissions.filter(s => 
                          new Date(s.submittedAt).getMonth() === new Date().getMonth()
                        ).length}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>This Week:</span>
                      <span className="font-medium">
                        {submissions.filter(s => {
                          const submittedDate = new Date(s.submittedAt);
                          const weekAgo = new Date();
                          weekAgo.setDate(weekAgo.getDate() - 7);
                          return submittedDate >= weekAgo;
                        }).length}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Submissions */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Recent Contact Submissions
                  </CardTitle>
                  <CardDescription>
                    Latest inquiries and booking requests
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submissions.length === 0 ? (
                    <div className="text-center py-8">
                      <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">No contact submissions yet</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {submissions.slice(0, 10).map((submission) => (
                        <motion.div
                          key={submission.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-lg">
                                  {submission.firstName} {submission.lastName}
                                </h3>
                                <Badge variant="secondary">
                                  {getEventTypeName(submission.eventTypeId)}
                                </Badge>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                                <div className="flex items-center gap-2">
                                  <Mail className="h-4 w-4" />
                                  {submission.email}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="h-4 w-4" />
                                  {submission.phoneNumber}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  {formatDate(submission.dateOfEvent)}
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  {submission.venueLocation}
                                </div>
                              </div>
                              
                              <p className="text-sm text-gray-700 mb-2">
                                <strong>Description:</strong> {submission.eventDescription.length > 100 
                                  ? `${submission.eventDescription.substring(0, 100)}...` 
                                  : submission.eventDescription}
                              </p>
                              
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Clock className="h-3 w-3" />
                                Submitted {formatDateTime(submission.submittedAt)}
                              </div>
                            </div>
                            
                            <div className="flex gap-2 ml-4">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setSelectedSubmission(submission)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => deleteSubmission(submission.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'intake' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Intake Stats */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Intake Form Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Forms:</span>
                      <span className="font-medium">{intakeForms.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>This Month:</span>
                      <span className="font-medium">
                        {intakeForms.filter(f => 
                          new Date(f.submittedAt).getMonth() === new Date().getMonth()
                        ).length}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>This Week:</span>
                      <span className="font-medium">
                        {intakeForms.filter(f => {
                          const submittedDate = new Date(f.submittedAt);
                          const weekAgo = new Date();
                          weekAgo.setDate(weekAgo.getDate() - 7);
                          return submittedDate >= weekAgo;
                        }).length}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Intake Forms */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Client Intake Forms
                  </CardTitle>
                  <CardDescription>
                    Detailed client preferences and requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {intakeForms.length === 0 ? (
                    <div className="text-center py-8">
                      <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">No intake forms submitted yet</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {intakeForms.slice(0, 10).map((form) => (
                        <motion.div
                          key={form.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="font-semibold text-lg">
                                  {form.clientName}
                                </h3>
                                <Badge variant="secondary">
                                  {form.eventType}
                                </Badge>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                                <div className="flex items-center gap-2">
                                  <Mail className="h-4 w-4" />
                                  {form.email}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Phone className="h-4 w-4" />
                                  {form.phoneNumber}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  {formatDate(form.eventDate)}
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4" />
                                  {form.venueLocation}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="h-4 w-4" />
                                  {form.guestCount} guests
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4" />
                                  {form.eventStartTime} - {form.eventEndTime}
                                </div>
                              </div>
                              
                              <div className="mb-2">
                                <p className="text-sm text-gray-700">
                                  <strong>Music Genres:</strong> {form.musicGenres.join(', ')}
                                </p>
                                <p className="text-sm text-gray-700">
                                  <strong>Era:</strong> {form.musicEra} | <strong>Volume:</strong> {form.volumePreference}
                                </p>
                              </div>
                              
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <Clock className="h-3 w-3" />
                                Submitted {formatDateTime(form.submittedAt)}
                              </div>
                            </div>
                            
                            <div className="flex gap-2 ml-4">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setSelectedIntakeForm(form)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => deleteIntakeForm(form.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'songs' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Song Request Stats */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music className="h-5 w-5" />
                    Song Request Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Requests:</span>
                      <span className="font-medium">{songRequests.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Active:</span>
                      <span className="font-medium">
                        {songRequests.filter(sr => !sr.isArchived).length}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Archived:</span>
                      <span className="font-medium">
                        {songRequests.filter(sr => sr.isArchived).length}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Song Requests */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music className="h-5 w-5" />
                    Recent Song Requests
                  </CardTitle>
                  <CardDescription>
                    Songs requested by visitors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {songRequests.filter(sr => !sr.isArchived).length === 0 ? (
                    <div className="text-center py-8">
                      <Music className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">No active song requests</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {songRequests.filter(sr => !sr.isArchived).slice(0, 10).map((request) => (
                        <motion.div
                          key={request.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 flex-1">
                              <img
                                src={request.imageUrl}
                                alt={`${request.title} by ${request.artistNames}`}
                                className="w-12 h-12 rounded object-cover"
                              />
                              <div className="flex-1">
                                <h3 className="font-semibold">{request.title}</h3>
                                <p className="text-sm text-gray-600">{request.artistNames}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                                  <Clock className="h-3 w-3" />
                                  Requested {formatDateTime(request.requestDate)}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex gap-2 ml-4">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => window.open(request.url, '_blank')}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => archiveSongRequest(request.id)}
                              >
                                <Archive className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => deleteSongRequest(request.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Site Settings
                </CardTitle>
                <CardDescription>
                  Manage your website configuration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Song Requests</Label>
                    <p className="text-sm text-muted-foreground">
                      Allow visitors to submit song requests
                    </p>
                  </div>
                  <Switch
                    checked={settings.acceptingSongRequests}
                    onCheckedChange={(checked) => 
                      updateSettings({ acceptingSongRequests: checked })
                    }
                  />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Statistics Overview</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold">{submissions.length}</div>
                      <div className="text-sm text-gray-600">Contact Submissions</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold">{intakeForms.length}</div>
                      <div className="text-sm text-gray-600">Intake Forms</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold">{songRequests.length}</div>
                      <div className="text-sm text-gray-600">Song Requests</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Submission Detail Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-auto">
            <CardHeader>
              <CardTitle>Contact Submission Details</CardTitle>
              <Button
                onClick={() => setSelectedSubmission(null)}
                className="absolute top-4 right-4"
                variant="ghost"
                size="sm"
              >
                ×
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>First Name</Label>
                  <p className="font-medium">{selectedSubmission.firstName}</p>
                </div>
                <div>
                  <Label>Last Name</Label>
                  <p className="font-medium">{selectedSubmission.lastName}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Email</Label>
                  <p className="font-medium">{selectedSubmission.email}</p>
                </div>
                <div>
                  <Label>Phone</Label>
                  <p className="font-medium">{selectedSubmission.phoneNumber}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Event Type</Label>
                  <p className="font-medium">{getEventTypeName(selectedSubmission.eventTypeId)}</p>
                </div>
                <div>
                  <Label>Event Date</Label>
                  <p className="font-medium">{formatDate(selectedSubmission.dateOfEvent)}</p>
                </div>
              </div>
              
              <div>
                <Label>Venue Location</Label>
                <p className="font-medium">{selectedSubmission.venueLocation}</p>
              </div>
              
              <div>
                <Label>Event Description</Label>
                <p className="font-medium">{selectedSubmission.eventDescription}</p>
              </div>
              
              <div>
                <Label>Submitted At</Label>
                <p className="font-medium">{formatDateTime(selectedSubmission.submittedAt)}</p>
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button
                  onClick={() => window.open(`mailto:${selectedSubmission.email}`)}
                  className="flex-1"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Client
                </Button>
                <Button
                  onClick={() => window.open(`tel:${selectedSubmission.phoneNumber}`)}
                  variant="outline"
                  className="flex-1"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Intake Form Detail Modal */}
      {selectedIntakeForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-4xl max-h-[80vh] overflow-auto">
            <CardHeader>
              <CardTitle>Client Intake Form Details</CardTitle>
              <Button
                onClick={() => setSelectedIntakeForm(null)}
                className="absolute top-4 right-4"
                variant="ghost"
                size="sm"
              >
                ×
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Event Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Client Name</Label>
                    <p className="font-medium">{selectedIntakeForm.clientName}</p>
                  </div>
                  <div>
                    <Label>Event Type</Label>
                    <p className="font-medium">{selectedIntakeForm.eventType}</p>
                  </div>
                  <div>
                    <Label>Email</Label>
                    <p className="font-medium">{selectedIntakeForm.email}</p>
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <p className="font-medium">{selectedIntakeForm.phoneNumber}</p>
                  </div>
                  <div>
                    <Label>Event Date</Label>
                    <p className="font-medium">{formatDate(selectedIntakeForm.eventDate)}</p>
                  </div>
                  <div>
                    <Label>Guest Count</Label>
                    <p className="font-medium">{selectedIntakeForm.guestCount}</p>
                  </div>
                  <div>
                    <Label>Duration</Label>
                    <p className="font-medium">{selectedIntakeForm.eventDuration}</p>
                  </div>
                  <div>
                    <Label>Time</Label>
                    <p className="font-medium">{selectedIntakeForm.eventStartTime} - {selectedIntakeForm.eventEndTime}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Label>Venue Location</Label>
                  <p className="font-medium">{selectedIntakeForm.venueLocation}</p>
                </div>
              </div>

              <Separator />

              {/* Music Preferences */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Music Preferences</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Music Era</Label>
                    <p className="font-medium">{selectedIntakeForm.musicEra}</p>
                  </div>
                  <div>
                    <Label>Volume Preference</Label>
                    <p className="font-medium">{selectedIntakeForm.volumePreference}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Label>Preferred Genres</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedIntakeForm.musicGenres.map(genre => (
                      <Badge key={genre} variant="outline">{genre}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Must Play List */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Must Play List</h3>
                {selectedIntakeForm.mustPlaySongs && (
                  <div className="mb-4">
                    <Label>Songs</Label>
                    <div className="bg-gray-50 p-3 rounded mt-1">
                      <pre className="whitespace-pre-wrap text-sm">{selectedIntakeForm.mustPlaySongs}</pre>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-3">
                  {selectedIntakeForm.mustPlaySpotifyUrl && (
                    <div>
                      <Label>Spotify Playlist</Label>
                      <p className="font-medium">
                        <a href={selectedIntakeForm.mustPlaySpotifyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {selectedIntakeForm.mustPlaySpotifyUrl}
                        </a>
                      </p>
                    </div>
                  )}
                  {selectedIntakeForm.mustPlayAppleMusicUrl && (
                    <div>
                      <Label>Apple Music Playlist</Label>
                      <p className="font-medium">
                        <a href={selectedIntakeForm.mustPlayAppleMusicUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {selectedIntakeForm.mustPlayAppleMusicUrl}
                        </a>
                      </p>
                    </div>
                  )}
                  {selectedIntakeForm.mustPlayOtherUrl && (
                    <div>
                      <Label>Other Playlist</Label>
                      <p className="font-medium">
                        <a href={selectedIntakeForm.mustPlayOtherUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {selectedIntakeForm.mustPlayOtherUrl}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <Separator />

              {/* Do Not Play List */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Do Not Play List</h3>
                {selectedIntakeForm.doNotPlaySongs && (
                  <div className="mb-4">
                    <Label>Songs/Artists to Avoid</Label>
                    <div className="bg-gray-50 p-3 rounded mt-1">
                      <pre className="whitespace-pre-wrap text-sm">{selectedIntakeForm.doNotPlaySongs}</pre>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 gap-3">
                  {selectedIntakeForm.doNotPlaySpotifyUrl && (
                    <div>
                      <Label>Excluded Spotify Playlist</Label>
                      <p className="font-medium">
                        <a href={selectedIntakeForm.doNotPlaySpotifyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {selectedIntakeForm.doNotPlaySpotifyUrl}
                        </a>
                      </p>
                    </div>
                  )}
                  {selectedIntakeForm.doNotPlayAppleMusicUrl && (
                    <div>
                      <Label>Excluded Apple Music Playlist</Label>
                      <p className="font-medium">
                        <a href={selectedIntakeForm.doNotPlayAppleMusicUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {selectedIntakeForm.doNotPlayAppleMusicUrl}
                        </a>
                      </p>
                    </div>
                  )}
                  {selectedIntakeForm.doNotPlayOtherUrl && (
                    <div>
                      <Label>Other Excluded Playlist</Label>
                      <p className="font-medium">
                        <a href={selectedIntakeForm.doNotPlayOtherUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {selectedIntakeForm.doNotPlayOtherUrl}
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <Separator />

              {/* Special Requests */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Special Requests</h3>
                <div className="grid grid-cols-1 gap-4">
                  {selectedIntakeForm.firstDanceSong && (
                    <div>
                      <Label>First Dance Song</Label>
                      <p className="font-medium">{selectedIntakeForm.firstDanceSong}</p>
                    </div>
                  )}
                  {selectedIntakeForm.lastDanceSong && (
                    <div>
                      <Label>Last Dance Song</Label>
                      <p className="font-medium">{selectedIntakeForm.lastDanceSong}</p>
                    </div>
                  )}
                  {selectedIntakeForm.ceremonySongs && (
                    <div>
                      <Label>Ceremony Songs</Label>
                      <div className="bg-gray-50 p-3 rounded mt-1">
                        <pre className="whitespace-pre-wrap text-sm">{selectedIntakeForm.ceremonySongs}</pre>
                      </div>
                    </div>
                  )}
                  {selectedIntakeForm.specialAnnouncements && (
                    <div>
                      <Label>Special Announcements</Label>
                      <div className="bg-gray-50 p-3 rounded mt-1">
                        <pre className="whitespace-pre-wrap text-sm">{selectedIntakeForm.specialAnnouncements}</pre>
                      </div>
                    </div>
                  )}
                  {selectedIntakeForm.equipmentRequests && (
                    <div>
                      <Label>Equipment Requests</Label>
                      <div className="bg-gray-50 p-3 rounded mt-1">
                        <pre className="whitespace-pre-wrap text-sm">{selectedIntakeForm.equipmentRequests}</pre>
                      </div>
                    </div>
                  )}
                  {selectedIntakeForm.setupRequirements && (
                    <div>
                      <Label>Setup Requirements</Label>
                      <div className="bg-gray-50 p-3 rounded mt-1">
                        <pre className="whitespace-pre-wrap text-sm">{selectedIntakeForm.setupRequirements}</pre>
                      </div>
                    </div>
                  )}
                  {selectedIntakeForm.specialRequests && (
                    <div>
                      <Label>Additional Special Requests</Label>
                      <div className="bg-gray-50 p-3 rounded mt-1">
                        <pre className="whitespace-pre-wrap text-sm">{selectedIntakeForm.specialRequests}</pre>
                      </div>
                    </div>
                  )}
                  {selectedIntakeForm.dietaryRestrictions && (
                    <div>
                      <Label>Dietary Restrictions</Label>
                      <p className="font-medium">{selectedIntakeForm.dietaryRestrictions}</p>
                    </div>
                  )}
                  {selectedIntakeForm.accessibilityNeeds && (
                    <div>
                      <Label>Accessibility Needs</Label>
                      <p className="font-medium">{selectedIntakeForm.accessibilityNeeds}</p>
                    </div>
                  )}
                </div>
              </div>

              <Separator />

              <div>
                <Label>Submitted At</Label>
                <p className="font-medium">{formatDateTime(selectedIntakeForm.submittedAt)}</p>
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button
                  onClick={() => window.open(`mailto:${selectedIntakeForm.email}`)}
                  className="flex-1"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Client
                </Button>
                <Button
                  onClick={() => window.open(`tel:${selectedIntakeForm.phoneNumber}`)}
                  variant="outline"
                  className="flex-1"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
