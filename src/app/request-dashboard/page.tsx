'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Music, Archive, Users, Clock, Search, CheckCircle, XCircle } from 'lucide-react';
import { toast } from 'sonner';

interface SongRequest {
  id: string;
  artistName: string;
  songTitle: string;
  requesterName: string;
  requestedAt: string;
  status: 'pending' | 'approved' | 'archived';
}

export default function RequestDashboardPage() {
  const [requests, setRequests] = useState<SongRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<SongRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [acceptingRequests, setAcceptingRequests] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading song requests
    const mockRequests: SongRequest[] = [
      { 
        id: '1', 
        artistName: 'Taylor Swift', 
        songTitle: 'Shake It Off', 
        requesterName: 'Sarah M.', 
        requestedAt: new Date().toISOString(), 
        status: 'pending' 
      },
      { 
        id: '2', 
        artistName: 'Ed Sheeran', 
        songTitle: 'Perfect', 
        requesterName: 'Mike J.', 
        requestedAt: new Date(Date.now() - 300000).toISOString(), 
        status: 'pending' 
      },
      { 
        id: '3', 
        artistName: 'Bruno Mars', 
        songTitle: 'Uptown Funk', 
        requesterName: 'Lisa K.', 
        requestedAt: new Date(Date.now() - 600000).toISOString(), 
        status: 'approved' 
      }
    ];

    setTimeout(() => {
      setRequests(mockRequests);
      setFilteredRequests(mockRequests);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const filtered = requests.filter(request =>
      request.artistName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.songTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.requesterName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRequests(filtered);
  }, [searchTerm, requests]);

  const handleApprove = (id: string) => {
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: 'approved' as const } : req
    ));
    toast.success('Song request approved!');
  };

  const handleArchive = (id: string) => {
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: 'archived' as const } : req
    ));
    toast.success('Song request archived!');
  };

  const toggleAcceptingRequests = () => {
    setAcceptingRequests(!acceptingRequests);
    toast.success(acceptingRequests ? 'No longer accepting requests' : 'Now accepting requests');
  };

  const pendingRequests = filteredRequests.filter(req => req.status === 'pending');
  const approvedRequests = filteredRequests.filter(req => req.status === 'approved');

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Song Request Dashboard
          </motion.h1>
          <motion.p 
            className="text-xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Manage song requests for your event
          </motion.p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Controls */}
          <motion.div 
            className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4">
              <Badge variant={acceptingRequests ? "default" : "secondary"} className="text-sm">
                {acceptingRequests ? 'Accepting Requests' : 'Not Accepting Requests'}
              </Badge>
              <Button onClick={toggleAcceptingRequests} variant="outline" size="sm">
                {acceptingRequests ? 'Stop Accepting' : 'Start Accepting'}
              </Button>
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search requests..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64"
              />
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div 
            className="grid md:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{pendingRequests.length}</div>
                    <div className="text-sm text-muted-foreground">Pending</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="text-2xl font-bold">{approvedRequests.length}</div>
                    <div className="text-sm text-muted-foreground">Approved</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Music className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{requests.length}</div>
                    <div className="text-sm text-muted-foreground">Total Requests</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-2xl font-bold">{new Set(requests.map(r => r.requesterName)).size}</div>
                    <div className="text-sm text-muted-foreground">Unique Requesters</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pending Requests */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Pending Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                {pendingRequests.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">No pending requests</p>
                ) : (
                  <div className="space-y-4">
                    {pendingRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-semibold">{request.songTitle}</h3>
                          <p className="text-sm text-muted-foreground">by {request.artistName}</p>
                          <p className="text-xs text-muted-foreground">
                            Requested by {request.requesterName} • {new Date(request.requestedAt).toLocaleTimeString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" onClick={() => handleApprove(request.id)}>
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleArchive(request.id)}>
                            <Archive className="w-4 h-4 mr-1" />
                            Archive
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Approved Requests */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Approved Requests
                </CardTitle>
              </CardHeader>
              <CardContent>
                {approvedRequests.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">No approved requests</p>
                ) : (
                  <div className="space-y-4">
                    {approvedRequests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg bg-green-50">
                        <div className="flex-1">
                          <h3 className="font-semibold">{request.songTitle}</h3>
                          <p className="text-sm text-muted-foreground">by {request.artistName}</p>
                          <p className="text-xs text-muted-foreground">
                            Requested by {request.requesterName} • {new Date(request.requestedAt).toLocaleTimeString()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="default" className="bg-green-500">
                            Approved
                          </Badge>
                          <Button size="sm" variant="outline" onClick={() => handleArchive(request.id)}>
                            <Archive className="w-4 h-4 mr-1" />
                            Archive
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
