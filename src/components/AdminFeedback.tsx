import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, updateDoc, doc, query, orderBy } from "firebase/firestore";
import { Feedback } from "@/lib/types";

export default function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const fetchFeedback = async () => {
    try {
      const q = query(collection(db, "feedback"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const allFeedbacks = querySnapshot.docs.map((doc) => ({ 
        id: doc.id, 
        ...doc.data() 
      } as Feedback));
      
      setFeedbacks(allFeedbacks);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const togglePublish = async (id: string, current: boolean) => {
    try {
      await updateDoc(doc(db, "feedback", id), { published: !current });
      fetchFeedback(); // Refresh the list
    } catch (error) {
    }
  };

  // Generate anonymous client name based on document ID
  const getAnonymousName = (id: string, index: number) => {
    const names = [
      "Dr. Sarah M.", "Marcus T.", "Jennifer L.", "David K.", "Lisa R.", 
      "Michael P.", "Emma S.", "James W.", "Maria G.", "Alex Chen",
      "Dr. Rachel B.", "Thomas H.", "Nicole A.", "Robert F.", "Amanda C."
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
    
    return feedbackTime.toLocaleDateString();
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Admin - Manage Customer Feedback</h1>
        
        {feedbacks.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-gray-500">No feedback submissions found.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {feedbacks.map((feedback, index) => (
              <div key={feedback.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  {/* Client Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {getAnonymousName(feedback.id!, index).charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {getAnonymousName(feedback.id!, index)}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {getTimeAgo(feedback.createdAt)}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      feedback.published 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {feedback.published ? "Published" : "Pending"}
                    </span>
                    
                    <button
                      onClick={() => togglePublish(feedback.id!, feedback.published)}
                      className={`px-4 py-2 rounded-md font-medium transition-colors ${
                        feedback.published
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                    >
                      {feedback.published ? "Unpublish" : "Publish"}
                    </button>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`text-lg ${
                          star <= feedback.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="font-semibold text-gray-700">{feedback.rating}/5</span>
                </div>

                {/* Comment */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 italic">
                    "{feedback.comment}"
                  </p>
                </div>

                {/* Admin Info */}
                <div className="text-xs text-gray-400 border-t pt-3">
                  <p><strong>Document ID:</strong> {feedback.id}</p>
                  <p><strong>Created:</strong> {
                    feedback.createdAt?.toDate ? 
                    new Date(feedback.createdAt.toDate()).toLocaleString() : 
                    'Date unknown'
                  }</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Summary Stats */}
        {feedbacks.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{feedbacks.length}</p>
                <p className="text-gray-600">Total Reviews</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">
                  {feedbacks.filter(f => f.published).length}
                </p>
                <p className="text-gray-600">Published</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">
                  {feedbacks.filter(f => !f.published).length}
                </p>
                <p className="text-gray-600">Pending</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}