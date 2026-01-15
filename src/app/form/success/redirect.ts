"use server";
import { redirect } from "next/navigation";

export const redirectOk = async () => {
  redirect("/form/success/done");
};
