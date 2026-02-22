"use client";
import { parseAsBoolean, parseAsString, useQueryState } from "nuqs";
import { redirectOK } from "@/app/form/success/redirect";
import BaseForm from "@/components/form/BaseForm";
import { submitHandler } from "@/components/form/handler";

export default function Page() {
  const [shouldRedirect] = useQueryState(
    "redirect",
    parseAsBoolean.withDefault(false),
  );
  const [headerText] = useQueryState("header", parseAsString.withDefault("お問い合わせフォーム"));

  const afterHandler = shouldRedirect ? redirectOK : undefined;

  return (
    <BaseForm
      headerText={headerText}
      submitHandler={(data) => submitHandler(data, undefined, afterHandler)}
    />
  );
}
