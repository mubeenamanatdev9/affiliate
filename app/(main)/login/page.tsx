"use client";

import { signIn } from "next-auth/react";
import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-deal-bg flex items-center justify-center p-4">
        <div className="bg-white border border-border rounded-2xl shadow-sm w-full max-w-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-navy-900 mb-2">Welcome Back</h1>
            <p className="text-text-secondary">Sign in to DealFinder to access your saved coupons and alerts.</p>
          </div>
          <div className="space-y-4 animate-pulse">
            <div className="h-10 bg-gray-100 rounded-xl"></div>
            <div className="h-10 bg-gray-100 rounded-xl"></div>
            <div className="h-12 bg-gray-100 rounded-xl"></div>
          </div>
        </div>
      </main>
    }>
      <LoginForm />
    </Suspense>
  );
}
