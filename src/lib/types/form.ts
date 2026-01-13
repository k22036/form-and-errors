export interface FormData {
  name: string;
  email: string;
  inquiry: string;
}

export type FormField = keyof FormData;
