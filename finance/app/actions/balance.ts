"use server";
import { addBalance } from "../lib/db/balance";
import { checkAuth } from "./auth";

export async function addBalanceAction(
  prevState: { message: string } | null,
  formData: FormData
) {
  const user = await checkAuth();
  const amount = formData.get("amount") as string;

  if (!amount || isNaN(Number(amount))) {
    return { message: "Please enter a valid amount." };
  }

  return await addBalance(user.id, Number(amount));
}