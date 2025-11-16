import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Feedback } from "@/lib/types";
import { Star, Quote, ChevronRight, ChevronLeft } from "lucide-react";

interface FeedbackDisplayProps {
  showTitle?: boolean;
}

const FeedbackDisplay = ({ showTitle = true }: FeedbackDisplayProps) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchPublishedFeedback = async () => {
      try {
        // Fetch ALL published feedback without limit
        const q = query(
          collection(db, "feedback"),
          where("published", "==", true)
        );
        const querySnapshot = await getDocs(q);
        
        let publishedFeedbacks = querySnapshot.docs.map((doc) => ({ 
          id: doc.id, 
          ...doc.data() 
        } as Feedback));
        
        // Sort manually by createdAt (newest first)
        publishedFeedbacks = publishedFeedbacks.sort((a, b) => {
          if (!a.createdAt || !b.createdAt) return 0;
          return b.createdAt.toDate() - a.createdAt.toDate();
        });
        
        setFeedbacks(publishedFeedbacks);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchPublishedFeedback();
  }, []);

  // Generate anonymous client name based on document ID
  const getAnonymousName = (id: string, index: number) => {
    const names = [
      "Anonymous Client"
    ]; 
    return names[index % names.length];
  };

  const getTimeAgo = (timestamp: any) => {
    if (!timestamp?.toDate) return 'recently';
    
    const now = new Date();
    const feedbackTime = timestamp.toDate();
    const diffInMinutes = Math.floor((now.getTime() - feedbackTime.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "text-yellow-400 fill-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  // Calculate pagination
  const totalPages = Math.ceil(feedbacks.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFeedbacks = feedbacks.slice(startIndex, endIndex);
  const hasNextPage = currentPage < totalPages - 1;
  const hasPrevPage = currentPage > 0;

  const goToNextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (hasPrevPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return (
      <Card className="border-border shadow-soft">
        <CardContent className="py-12">
          <div className="text-center text-muted-foreground">
            Loading customer feedback...
          </div>
        </CardContent>
      </Card>
    );
  }

  if (feedbacks.length === 0) {
    return (
      <Card className="border-border shadow-soft">
        <CardHeader>
          {showTitle && (
            <CardTitle className="font-poppins text-2xl text-center text-foreground">
              Customer <span className="text-primary">Reviews</span>
            </CardTitle>
          )}
        </CardHeader>
        <CardContent className="py-12">
          <div className="text-center text-muted-foreground">
            <Quote className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No customer reviews available yet.</p>
            <p className="text-sm mt-2">Be the first to share your experience!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border shadow-soft">
      <CardHeader>
        {showTitle && (
          <div className="text-center">
            <CardTitle className="font-poppins text-2xl text-foreground mb-2">
              Customer <span className="text-primary">Reviews</span>
            </CardTitle>
            <p className="font-inter text-muted-foreground">
              See what our satisfied clients have to say about our cryogenic shipping services
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {currentFeedbacks.map((feedback, index) => {
            const globalIndex = startIndex + index; // Calculate global index for consistent naming
            return (
              <div key={feedback.id} className="border-l-4 border-primary pl-4 py-3">
                {/* Client Info Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {getAnonymousName(feedback.id!, globalIndex).charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {getAnonymousName(feedback.id!, globalIndex)}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {getTimeAgo(feedback.createdAt)}
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    {renderStars(feedback.rating)}
                  </div>
                </div>
                
                {/* Comment */}
                <p className="text-muted-foreground leading-relaxed pl-13">
                  {feedback.comment}
                </p>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {feedbacks.length > itemsPerPage && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-8 pt-6 border-t border-border gap-4">
            {/* Left side - Review count and dots (hidden on mobile) */}
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <p className="text-sm text-muted-foreground text-center sm:text-left">
                Showing {startIndex + 1}-{Math.min(endIndex, feedbacks.length)} of {feedbacks.length} reviews
              </p>
              
              {/* Page dots - hidden on mobile (sm:flex = show on small screens and up) */}
              <div className="hidden sm:flex items-center gap-1">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  // Show max 5 page dots, centered around current page
                  const startPage = Math.max(0, Math.min(currentPage - 2, totalPages - 5));
                  const pageIndex = startPage + i;
                  return (
                    <button
                      key={pageIndex}
                      onClick={() => setCurrentPage(pageIndex)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        pageIndex === currentPage ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                    />
                  );
                })}
                {totalPages > 5 && (
                  <span className="text-xs text-muted-foreground ml-1">
                    +{totalPages - 5} more
                  </span>
                )}
              </div>
            </div>
            
            {/* Right side - Navigation buttons */}
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevPage}
                disabled={!hasPrevPage}
                className="flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden xs:inline">Previous</span>
                <span className="xs:hidden">Prev</span>
              </Button>
              
              {/* Mobile page indicator */}
              <div className="sm:hidden flex items-center px-3 py-1 bg-muted/30 rounded-full">
                <span className="text-xs text-muted-foreground">
                  {currentPage + 1} / {totalPages}
                </span>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={goToNextPage}
                disabled={!hasNextPage}
                className="flex items-center gap-1"
              >
                <span className="hidden xs:inline">Next</span>
                <span className="xs:hidden">Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* Show total when no pagination needed */}
        {feedbacks.length <= itemsPerPage && (
          <div className="text-center mt-8">
            <p className="font-inter text-muted-foreground">
              {feedbacks.length === 1 ? 
                "Showing 1 review" : 
                `Showing all ${feedbacks.length} reviews`
              }
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FeedbackDisplay;