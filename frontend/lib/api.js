export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export async function api(path, options = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("skillbridge_token") : null;
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers
    },
    cache: "no-store"
  });
  if (!response.ok) throw new Error((await response.json()).message || "Request failed");
  return response.json();
}
