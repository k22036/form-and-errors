"use server";
import { redirect } from "next/navigation";

export const redirectNG = async () => {
  redirect("/form/fail/done");
};
