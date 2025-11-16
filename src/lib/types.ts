// types.ts
export interface Feedback {
  id?: string;         // Firestore document ID
  name?: string;       // optional
  email?: string;      // optional
  rating: number;      // 1-5
  comment?: string;
  published: boolean;
  createdAt: any;      // Firestore timestamp
}
