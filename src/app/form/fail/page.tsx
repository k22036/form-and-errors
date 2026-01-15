"use client";
import { parseAsBoolean, useQueryState } from "nuqs";
import {
  failValidatorWithoutRedirect,
  failValidatorWithRedirect,
} from "@/app/form/fail/validator";
import BaseForm from "@/components/form/BaseForm";
import { submitHandler } from "@/components/form/handler";

export default function Page() {
  const [shouldRedirect] = useQueryState(
    "redirect",
    parseAsBoolean.withDefault(false),
  );

  const validator = shouldRedirect
    ? failValidatorWithRedirect
    : failValidatorWithoutRedirect;

  return <BaseForm submitHandler={(data) => submitHandler(data, validator)} />;
}
