import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { Feedback } from "@/lib/types";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchPublished = async () => {
      const q = query(
        collection(db, "feedback"),
        where("published", "==", true),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      setFeedbacks(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Feedback))
      );
    };
    fetchPublished();
  }, []);

  return (
    <div>
      <h2>Customer Feedback</h2>
      {feedbacks.map((fb) => (
        <div key={fb.id} style={{ borderBottom: "1px solid #ccc", padding: 5 }}>
          <p>⭐ {fb.rating}</p>
          <p>{fb.comment}</p>
        </div>
      ))}
    </div>
  );
}
