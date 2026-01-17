"use client";
import { parseAsBoolean, useQueryState } from "nuqs";
import { redirectOK } from "@/app/form/success/redirect";
import BaseForm from "@/components/form/BaseForm";
import { submitHandler } from "@/components/form/handler";

export default function Page() {
  const [shouldRedirect] = useQueryState(
    "redirect",
    parseAsBoolean.withDefault(false),
  );

  const afterHandler = shouldRedirect ? redirectOK : undefined;

  return (
    <BaseForm
      submitHandler={(data) => submitHandler(data, undefined, afterHandler)}
    />
  );
}
