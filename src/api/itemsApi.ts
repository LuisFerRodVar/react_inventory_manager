
export const BASE_URL = "http://localhost:5285/api/items"; // Update if needed

export interface Item {
  id: number;
  name: string;
  price: number;
}

export async function getItems(): Promise<Item[]> {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error("Failed to fetch items.");
  return response.json();
}

export async function getItem(id: number): Promise<Item> {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch item with ID ${id}.`);
  return response.json();
}

export async function createItem(item: Omit<Item, "id">): Promise<Item> {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!response.ok) throw new Error("Failed to create item.");
  return response.json();
}

export async function updateItem(id: number, item: Item): Promise<Item> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  if (!response.ok) throw new Error(`Failed to update item with ID ${id}.`);
  return response.json();
}

export async function deleteItem(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error(`Failed to delete item with ID ${id}.`);
}

