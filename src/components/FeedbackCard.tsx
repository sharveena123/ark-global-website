import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const FeedbackCard = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    
    console.log("Submitting feedback:", { rating, comment }); // Debug log
    
    if (rating === 0) {
      setError("Please provide a rating");
      return;
    }
    
    if (!comment.trim()) {
      setError("Please provide a comment");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Firebase db object:", db); // Debug log
      
      const docRef = await addDoc(collection(db, "feedback"), {
        rating,
        comment: comment.trim(),
        published: false,
        createdAt: serverTimestamp(),
      });

      console.log("Document written with ID: ", docRef.id); // Debug log
      
      setSubmitted(true);
      setRating(0);
      setComment("");

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Detailed error:", err); // Debug log
      setError("Failed to submit feedback. Please try again.");
    }

    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 text-green-700">
            <CheckCircle className="w-6 h-6" />
            <p className="font-medium">Thank you for your feedback!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border shadow-soft mt-8">
      <CardHeader>
        <CardTitle className="font-poppins text-xl">Share Your Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="text-red-600 text-sm font-medium">{error}</div>
          )}
          
          {/* Star Rating */}
          <div>
            <label className="block font-medium mb-2">Rating</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`text-2xl transition-colors ${
                    star <= rating ? "text-yellow-400" : "text-gray-300"
                  } hover:text-yellow-400`}
                  onClick={() => setRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}
          <div>
            <label className="block font-medium mb-2">Comment</label>
            <Textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us about your experience..."
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;