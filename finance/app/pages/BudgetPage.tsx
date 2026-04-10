"use client";
import { useActionState } from "react";
import { addBalanceAction } from "../actions/balance";

export default function BudgetForm() {
  const [state, formAction] = useActionState(addBalanceAction, null);

  return (
    <form action={formAction} className="mt-6">
      <input
        type="number"
        name="amount"
        className="border border-gray-300 rounded-lg p-2 mt-4"
        placeholder="Enter amount"
      />
      <button type="submit" className="ml-2 bg-black text-white rounded-lg p-2">
        Submit
      </button>
      {state?.message && (
        <p className="text-red-500 mt-2">{state.message}</p>
      )}
    </form>
  );
}