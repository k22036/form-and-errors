"use server";
import { sendToServer } from "@/lib/server/server";
import type { InquiryFormValues } from "@/lib/types/form";

type Validator = (data: InquiryFormValues) => void | Promise<void>;
type AfterHandler = (data: InquiryFormValues) => void | Promise<void>;

export const submitHandler = async (
  data: InquiryFormValues,
  validator?: Validator,
  afterHandler?: AfterHandler,
) => {
  if (validator) {
    await validator(data);
  }
  await sendToServer(data);
  if (afterHandler) {
    await afterHandler(data);
  }
};
