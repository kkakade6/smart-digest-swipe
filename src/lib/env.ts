// src/lib/env.ts
// Centralized, typed access to env vars used in the client (Vite).
function requireVar(name: string): string {
  const value = import.meta.env[name as keyof ImportMetaEnv] as unknown as string | undefined;
  if (!value) throw new Error(`Missing required env var: ${name}`);
  return value;
}

export const ENV = {
  APP_NAME: (import.meta.env.VITE_APP_NAME as string) ?? 'Smart Digest Swipe',
  API_BASE_URL: requireVar('VITE_API_BASE_URL'),
  ENABLE_ANALYTICS: String(import.meta.env.VITE_ENABLE_ANALYTICS) === 'true',
};

// Notes:
// - Only VITE_* vars exist in the browser bundle.
// - Secrets without VITE_ must be used only in serverless/back-end code.
