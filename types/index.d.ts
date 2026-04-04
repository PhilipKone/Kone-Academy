import { User, UserCredential } from 'firebase/auth';

export interface AcademyUser {
  uid: string;
  email: string | null;
  displayName?: string | null;
  photoURL?: string | null;
  role?: 'student' | 'admin' | 'guest' | 'user';
}

export interface AcademyProject {
  id: string;
  title: string;
  description: string;
  authorId: string;
  createdAt: any; // Firebase Timestamp or ISO string
  tags: string[];
  status: 'draft' | 'published';
}

export interface AuthContextType {
  currentUser: User | null;
  loading?: boolean;
  login: (email: string, password: string) => Promise<UserCredential>;
  signup: (email: string, password: string, name?: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  googleSignIn: () => Promise<UserCredential>;
}
