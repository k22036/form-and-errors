"use server";

import { redirectNG } from "@/app/form/fail/redirect";

export const failValidatorWithoutRedirect = async () => {
  throw new Error("意図的なバリデートエラー");
};

export const failValidatorWithRedirect = async () => {
  // バリデート後にリダイレクトさせたことを想定
  await redirectNG();
};
