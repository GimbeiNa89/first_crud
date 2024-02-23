export interface IUser {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}

interface Subject {
  id: number;
  name: string;
  score: string;
  isPass: boolean;
}

export interface Student {
  userId: number;
  subjects: Subject[];
}
