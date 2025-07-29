"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import { Search, Music, Clock, X } from "lucide-react";
import Image from "next/image";
import { HitResult } from "@/types";

interface SearchResult {
  response: {
    hits: Array<{
      result: HitResult;
    }>;
  };
}

const RequestPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<HitResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptingRequests, setAcceptingRequests] = useState(false);
  const [recentRequests, setRecentRequests] = useState<any[]>([]);

  const { register, handleSubmit, setValue, watch } = useForm();

  useLayoutEffect(() => {
    fetch("/api/song-requests/setting")
      .then((res) => res.json())
      .then((data) => setAcceptingRequests(data.acceptingRequests))
      .catch(console.error);
  }, [])

  useEffect(() => {
    // Load recent requests
    fetch("/api/song-requests")
      .then((res) => res.json())
      .then(setRecentRequests)
      .catch(console.error);
  }, []);

  const searchSongs = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(searchQuery)}`
      );
      
      if (!response.ok) {
        throw new Error(`Search failed: ${response.status}`);
      }
      
      const data: SearchResult = await response.json();
      
      // Handle Genius API response structure
      if (data.response && data.response.hits) {
        setSearchResults(data.response.hits.map((hit) => hit.result));
      } else {
        setSearchResults([]);
        toast.error("No songs found for your search");
      }
    } catch (error) {
      console.error('Search error:', error);
      toast.error("Failed to search songs. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const submitRequest = async (song: HitResult) => {
    if (!acceptingRequests) {
      toast.error("Song requests are currently not being accepted");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/song-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(song),
      });

      if (response.ok) {
        toast.success("Song request submitted successfully!");
        setSearchQuery("");
        setSearchResults([]);
        // Refresh recent requests
        const updatedRequests = await fetch("/api/song-requests").then((res) =>
          res.json()
        );
        setRecentRequests(updatedRequests);
      } else {
        toast.error("Failed to submit song request");
      }
    } catch (error) {
      toast.error("Failed to submit song request");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!acceptingRequests) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center mt-10">
            <CardHeader>
              <CardTitle className="text-2xl">Song Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <Alert>
                <Music className="h-4 w-4" />
                <AlertDescription className="text-lg">
                  Song requests are currently not being accepted. Please check
                  back later or contact the DJ directly.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Request a Song
          </h1>
          <p className="text-xl text-gray-600">
            Search for your favorite songs and request them for tonight's
            playlist!
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search for a Song</CardTitle>
            <CardDescription>
              Search by song title, artist name, or lyrics to find the perfect
              track.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <div className="flex-1">
                <Input
                  placeholder="Search for songs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && searchSongs()}
                />
              </div>
              <Button
                onClick={searchSongs}
                disabled={isSearching || !searchQuery.trim()}
              >
                <Search className="w-4 h-4 mr-2" />
                {isSearching ? "Searching..." : "Search"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Search Results</CardTitle>
              <CardDescription>
                Click on a song to request it for tonight's playlist.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {searchResults.map((song, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => submitRequest(song)}
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={
                          song.song_art_image_thumbnail_url ||
                          "/placeholder-album.svg"
                        }
                        alt={`${song.title} by ${song.artist_names}`}
                        width={60}
                        height={60}
                        className="rounded"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder-album.svg";
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{song.title}</h3>
                      <p className="text-gray-600">{song.artist_names}</p>
                    </div>
                    <Button
                      size="sm"
                      disabled={isSubmitting}
                      onClick={(e) => {
                        e.stopPropagation();
                        submitRequest(song);
                      }}
                    >
                      Request
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recent Requests */}
        {recentRequests.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Recent Requests</CardTitle>
              <CardDescription>
                Songs that have been recently requested by other guests.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentRequests.slice(0, 10).map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center space-x-4 p-3 border rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        src={request.imageUrl || "/placeholder-album.svg"}
                        alt={request.title}
                        width={50}
                        height={50}
                        className="rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{request.title}</h4>
                      <p className="text-sm text-gray-600">
                        {request.artistNames}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>
                        {new Date(request.requestDate).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default RequestPage;
