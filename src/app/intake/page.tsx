'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Music, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Volume2, 
  Heart, 
  Ban, 
  Settings,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import type { ClientIntakeForm } from '@/types';

const musicGenreOptions = [
  'Pop', 'Rock', 'Hip-Hop/Rap', 'R&B/Soul', 'Country', 'Electronic/Dance', 
  'Jazz', 'Blues', 'Classical', 'Folk', 'Reggae', 'Latin', 'Alternative', 
  'Indie', 'Funk', 'Disco', '80s', '90s', '2000s', '2010s', 'Current Hits'
];

const musicEraOptions = [
  '1950s-1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s', 'Current Hits', 'Mix of All Eras'
];

const volumeOptions = [
  'Low/Background Music', 'Moderate/Conversational', 'High/Dance Party', 'Variable Throughout Event'
];

const eventTypeOptions = [
  'Wedding', 'Corporate Event', 'Birthday Party', 'Anniversary', 'Graduation', 'Holiday Party', 'Dance/Prom', 'Other'
];

const eventDurationOptions = [
  '1-2 hours', '3-4 hours', '5-6 hours', '7-8 hours', 'Full Day (8+ hours)'
];

export default function ClientIntakeForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phoneNumber: '',
    eventDate: '',
    eventType: '',
    venueLocation: '',
    guestCount: '',
    eventDuration: '',
    eventStartTime: '',
    eventEndTime: '',
    
    musicGenres: [] as string[],
    musicEra: '',
    volumePreference: '',
    
    mustPlaySongs: '',
    mustPlaySpotifyUrl: '',
    mustPlayAppleMusicUrl: '',
    mustPlayOtherUrl: '',
    
    doNotPlaySongs: '',
    doNotPlaySpotifyUrl: '',
    doNotPlayAppleMusicUrl: '',
    doNotPlayOtherUrl: '',
    
    specialAnnouncements: '',
    firstDanceSong: '',
    lastDanceSong: '',
    ceremonySongs: '',
    
    equipmentRequests: '',
    setupRequirements: '',
    
    specialRequests: '',
    dietaryRestrictions: '',
    accessibilityNeeds: ''
  });

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleGenreToggle = (genre: string) => {
    const newGenres = selectedGenres.includes(genre)
      ? selectedGenres.filter(g => g !== genre)
      : [...selectedGenres, genre];
    
    setSelectedGenres(newGenres);
    setFormData(prev => ({
      ...prev,
      musicGenres: newGenres
    }));
  };

  const validateForm = () => {
    const required = [
      'clientName', 'email', 'phoneNumber', 'eventDate', 'eventType',
      'venueLocation', 'guestCount', 'eventDuration', 'eventStartTime',
      'eventEndTime', 'musicEra', 'volumePreference'
    ];

    for (const field of required) {
      if (!formData[field as keyof typeof formData]) {
        toast.error(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return false;
      }
    }

    if (selectedGenres.length === 0) {
      toast.error('Please select at least one music genre');
      return false;
    }

    if (!formData.email.includes('@')) {
      toast.error('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      const intakeData: Partial<ClientIntakeForm> = {
        ...formData,
        eventDate: new Date(formData.eventDate),
        guestCount: parseInt(formData.guestCount),
        musicGenres: selectedGenres,
        mustPlaySongs: formData.mustPlaySongs || '[]',
        doNotPlaySongs: formData.doNotPlaySongs || '[]',
        ceremonySongs: formData.ceremonySongs || '[]'
      };

      const response = await fetch('/api/intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(intakeData),
      });

      if (response.ok) {
        toast.success('Intake form submitted successfully!');
        router.push('/intake/success');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting intake form:', error);
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Client Intake Form
          </h1>
          <p className="text-lg text-gray-600">
            Help us make your event perfect by sharing your preferences and requirements
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Event Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Event Information
              </CardTitle>
              <CardDescription>
                Tell us about your event basics
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="clientName">Client Name *</Label>
                  <Input
                    id="clientName"
                    value={formData.clientName}
                    onChange={(e) => handleInputChange('clientName', e.target.value)}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phoneNumber">Phone Number *</Label>
                  <Input
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <Label htmlFor="eventDate">Event Date *</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange('eventDate', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="eventType">Event Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('eventType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypeOptions.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="guestCount">Guest Count *</Label>
                  <Input
                    id="guestCount"
                    type="number"
                    value={formData.guestCount}
                    onChange={(e) => handleInputChange('guestCount', e.target.value)}
                    placeholder="50"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="venueLocation">Venue Location *</Label>
                <Input
                  id="venueLocation"
                  value={formData.venueLocation}
                  onChange={(e) => handleInputChange('venueLocation', e.target.value)}
                  placeholder="Full venue address"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="eventDuration">Event Duration *</Label>
                  <Select onValueChange={(value) => handleInputChange('eventDuration', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventDurationOptions.map(duration => (
                        <SelectItem key={duration} value={duration}>{duration}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="eventStartTime">Start Time *</Label>
                  <Input
                    id="eventStartTime"
                    type="time"
                    value={formData.eventStartTime}
                    onChange={(e) => handleInputChange('eventStartTime', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="eventEndTime">End Time *</Label>
                  <Input
                    id="eventEndTime"
                    type="time"
                    value={formData.eventEndTime}
                    onChange={(e) => handleInputChange('eventEndTime', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Music Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="h-5 w-5" />
                Music Preferences
              </CardTitle>
              <CardDescription>
                Help us curate the perfect playlist for your event
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>Music Genres * (Select all that apply)</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {musicGenreOptions.map(genre => (
                    <Badge
                      key={genre}
                      variant={selectedGenres.includes(genre) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleGenreToggle(genre)}
                    >
                      {genre}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="musicEra">Preferred Music Era *</Label>
                  <Select onValueChange={(value) => handleInputChange('musicEra', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select music era" />
                    </SelectTrigger>
                    <SelectContent>
                      {musicEraOptions.map(era => (
                        <SelectItem key={era} value={era}>{era}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="volumePreference">Volume Preference *</Label>
                  <Select onValueChange={(value) => handleInputChange('volumePreference', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select volume level" />
                    </SelectTrigger>
                    <SelectContent>
                      {volumeOptions.map(volume => (
                        <SelectItem key={volume} value={volume}>{volume}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Must Play List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Must Play List
              </CardTitle>
              <CardDescription>
                Songs that absolutely must be played at your event
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="mustPlaySongs">Must Play Songs</Label>
                <Textarea
                  id="mustPlaySongs"
                  value={formData.mustPlaySongs}
                  onChange={(e) => handleInputChange('mustPlaySongs', e.target.value)}
                  placeholder="List your must-play songs (Artist - Song Title, one per line)"
                  rows={6}
                />
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Playlist Links (Optional)</Label>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <Label htmlFor="mustPlaySpotifyUrl" className="text-sm">Spotify Playlist URL</Label>
                    <Input
                      id="mustPlaySpotifyUrl"
                      value={formData.mustPlaySpotifyUrl}
                      onChange={(e) => handleInputChange('mustPlaySpotifyUrl', e.target.value)}
                      placeholder="https://open.spotify.com/playlist/..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="mustPlayAppleMusicUrl" className="text-sm">Apple Music Playlist URL</Label>
                    <Input
                      id="mustPlayAppleMusicUrl"
                      value={formData.mustPlayAppleMusicUrl}
                      onChange={(e) => handleInputChange('mustPlayAppleMusicUrl', e.target.value)}
                      placeholder="https://music.apple.com/playlist/..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="mustPlayOtherUrl" className="text-sm">Other Playlist URL</Label>
                    <Input
                      id="mustPlayOtherUrl"
                      value={formData.mustPlayOtherUrl}
                      onChange={(e) => handleInputChange('mustPlayOtherUrl', e.target.value)}
                      placeholder="YouTube, SoundCloud, etc."
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Do Not Play List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ban className="h-5 w-5" />
                Do Not Play List
              </CardTitle>
              <CardDescription>
                Songs or artists that should absolutely not be played
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="doNotPlaySongs">Do Not Play Songs</Label>
                <Textarea
                  id="doNotPlaySongs"
                  value={formData.doNotPlaySongs}
                  onChange={(e) => handleInputChange('doNotPlaySongs', e.target.value)}
                  placeholder="List songs or artists to avoid (Artist - Song Title, one per line)"
                  rows={4}
                />
              </div>

              <Separator />

              <div className="space-y-3">
                <Label>Excluded Playlist Links (Optional)</Label>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <Label htmlFor="doNotPlaySpotifyUrl" className="text-sm">Spotify Playlist URL</Label>
                    <Input
                      id="doNotPlaySpotifyUrl"
                      value={formData.doNotPlaySpotifyUrl}
                      onChange={(e) => handleInputChange('doNotPlaySpotifyUrl', e.target.value)}
                      placeholder="https://open.spotify.com/playlist/..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="doNotPlayAppleMusicUrl" className="text-sm">Apple Music Playlist URL</Label>
                    <Input
                      id="doNotPlayAppleMusicUrl"
                      value={formData.doNotPlayAppleMusicUrl}
                      onChange={(e) => handleInputChange('doNotPlayAppleMusicUrl', e.target.value)}
                      placeholder="https://music.apple.com/playlist/..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="doNotPlayOtherUrl" className="text-sm">Other Playlist URL</Label>
                    <Input
                      id="doNotPlayOtherUrl"
                      value={formData.doNotPlayOtherUrl}
                      onChange={(e) => handleInputChange('doNotPlayOtherUrl', e.target.value)}
                      placeholder="YouTube, SoundCloud, etc."
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Requests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Special Requests & Setup
              </CardTitle>
              <CardDescription>
                Additional information to make your event special
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {formData.eventType === 'Wedding' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstDanceSong">First Dance Song</Label>
                      <Input
                        id="firstDanceSong"
                        value={formData.firstDanceSong}
                        onChange={(e) => handleInputChange('firstDanceSong', e.target.value)}
                        placeholder="Artist - Song Title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastDanceSong">Last Dance Song</Label>
                      <Input
                        id="lastDanceSong"
                        value={formData.lastDanceSong}
                        onChange={(e) => handleInputChange('lastDanceSong', e.target.value)}
                        placeholder="Artist - Song Title"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="ceremonySongs">Ceremony Songs</Label>
                    <Textarea
                      id="ceremonySongs"
                      value={formData.ceremonySongs}
                      onChange={(e) => handleInputChange('ceremonySongs', e.target.value)}
                      placeholder="Processional, recessional, unity candle, etc."
                      rows={3}
                    />
                  </div>
                </>
              )}

              <div>
                <Label htmlFor="specialAnnouncements">Special Announcements</Label>
                <Textarea
                  id="specialAnnouncements"
                  value={formData.specialAnnouncements}
                  onChange={(e) => handleInputChange('specialAnnouncements', e.target.value)}
                  placeholder="Birthday wishes, anniversaries, special recognitions, etc."
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="equipmentRequests">Equipment Requests</Label>
                  <Textarea
                    id="equipmentRequests"
                    value={formData.equipmentRequests}
                    onChange={(e) => handleInputChange('equipmentRequests', e.target.value)}
                    placeholder="Microphones, lighting, special equipment needs"
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="setupRequirements">Setup Requirements</Label>
                  <Textarea
                    id="setupRequirements"
                    value={formData.setupRequirements}
                    onChange={(e) => handleInputChange('setupRequirements', e.target.value)}
                    placeholder="Power outlets, space constraints, load-in details"
                    rows={3}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="specialRequests">Additional Special Requests</Label>
                <Textarea
                  id="specialRequests"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  placeholder="Any other special requests or important details"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              disabled={loading}
              className="px-8 py-3 text-lg"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Submit Intake Form
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
