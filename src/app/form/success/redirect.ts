"use server";
import { redirect } from "next/navigation";

export const redirectOK = async () => {
  redirect("/form/success/done");
};
