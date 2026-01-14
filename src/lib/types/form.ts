export interface InquiryFormValues {
  name: string;
  email: string;
  inquiry: string;
}

export type InquiryFormField = keyof InquiryFormValues;
