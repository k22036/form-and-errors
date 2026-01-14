import BaseForm from "@/components/form/BaseForm";
import { sendToServer } from "@/lib/server/server";
import type { InquiryFormValues } from "@/lib/types/form";

export default function Page() {
  const submitHandler = async (data: InquiryFormValues) => {
    "use server";
    await sendToServer(data);
  };
  return <BaseForm submitHandler={submitHandler} />;
}
