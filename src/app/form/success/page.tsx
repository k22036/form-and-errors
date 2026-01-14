"use client";
import BaseForm from "@/components/form/BaseForm";
import { submitHandler } from "@/components/form/handler";

export default function Page() {
  return <BaseForm submitHandler={(data) => submitHandler(data)} />;
}
