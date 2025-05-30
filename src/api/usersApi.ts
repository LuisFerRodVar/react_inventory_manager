
export const BASE_URL = "http://localhost:5285/api/users"; // Update if needed

export interface User {
  id: number;
  email: string;
  pass: string;
}

export async function getUser(id: number): Promise<User> {
  const response = await fetch(`${BASE_URL}?id=${id}`);
  if (!response.ok) throw new Error(`Failed to fetch user with ID ${id}.`);
  return response.json();
}

export async function login(email: string, pass: string): Promise<User> {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, pass }),
  });
  if (!response.ok) throw new Error("Login failed. Please check your credentials.");
  return response.json();
}

export async function register(email: string, pass: string): Promise<User> {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, pass }),
  });
  if (!response.ok) throw new Error("Registration failed. Please try again.");
  return response.json();
}

export async function recover(email: string, pass: string): Promise<User> {
  const response = await fetch(`${BASE_URL}/recover`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, pass }),
  });
  if (!response.ok) throw new Error("Account recovery failed. Please try again.");
  return response.json();
}

