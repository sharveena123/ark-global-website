import { useState, FormEvent } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function FeedbackForm() {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (rating === 0) return alert("Please select a rating.");

    await addDoc(collection(db, "feedback"), {
      rating,
      comment,
      published: false,
      createdAt: serverTimestamp()
    });

    setSubmitted(true);
    setRating(0);
    setComment("");
  };

  return submitted ? (
    <p>Thank you! Your feedback will be reviewed before publishing.</p>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray", fontSize: 24 }}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment (optional)"
      />
      <button type="submit">Submit Feedback</button>
    </form>
  );
}
