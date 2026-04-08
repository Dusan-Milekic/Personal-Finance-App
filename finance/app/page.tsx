"use client";
import { useRouter } from "next/navigation"; // ✅
import LoginPage from "./pages/LoginPage";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <LoginPage />
      <button onClick={() => router.push("/signup")}>
        Idi na registraciju
      </button>
    </main>
  );
}