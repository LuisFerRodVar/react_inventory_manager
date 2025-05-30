import { useEffect, useState } from "react";
import type { Item } from "../api/itemsApi.ts";
import {
  getItems,
  createItem,
  updateItem,
  deleteItem,
}  from "../api/itemsApi.ts";
import './Items.css'

export default function Items() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  useEffect(() => {
    async function fetchItems() {
      try {
        const data = await getItems();
        setItems(data);
      } catch (err: any) {
        setError(err.message || "Error loading items");
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!newName || !newPrice) {
      setError("Please enter name and price");
      return;
    }
    const priceNumber = parseFloat(newPrice);
    if (isNaN(priceNumber) || priceNumber < 0) {
      setError("Price must be a non-negative number");
      return;
    }
    try {
      const created = await createItem({ name: newName, price: priceNumber });
      setItems((prev) => [...prev, created]);
      setNewName("");
      setNewPrice("");
    } catch (err: any) {
      setError(err.message || "Error creating item");
    }
  }

  function startEdit(item: Item) {
    setEditId(item.id);
    setEditName(item.name);
    setEditPrice(item.price.toString());
  }

  function cancelEdit() {
    setEditId(null);
    setEditName("");
    setEditPrice("");
    setError(null);
  }

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    if (editId === null) return;
    setError(null);
    if (!editName || !editPrice) {
      setError("Please enter name and price");
      return;
    }
    const priceNumber = parseFloat(editPrice);
    if (isNaN(priceNumber) || priceNumber < 0) {
      setError("Price must be a non-negative number");
      return;
    }
    try {
      const updated = await updateItem(editId, {
        id: editId,
        name: editName,
        price: priceNumber,
      });
      setItems((prev) =>
        prev.map((it) => (it.id === editId ? updated : it))
      );
      cancelEdit();
    } catch (err: any) {
      setError(err.message || "Error updating item");
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Are you sure you want to delete this item?")) return;
    setError(null);
    try {
      await deleteItem(id);
      setItems((prev) => prev.filter((it) => it.id !== id));
      if (editId === id) cancelEdit();
    } catch (err: any) {
      setError(err.message || "Error deleting item");
    }
  }

  if (loading) return <p>Loading items...</p>;

return (
  <div className="items">
    <h1 className="items__title">Items</h1>

    {error && <p className="items__error">{error}</p>}

    <form onSubmit={handleCreate} className="items__form">
      <input
        type="text"
        placeholder="Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        min="0"
        placeholder="Price"
        value={newPrice}
        onChange={(e) => setNewPrice(e.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>

    <table className="items__table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) =>
          editId === item.id ? (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={editPrice}
                  onChange={(e) => setEditPrice(e.target.value)}
                />
              </td>
              <td className="items__actions">
                <button onClick={handleUpdate} type="submit">Save</button>
                <button onClick={cancelEdit} type="button">Cancel</button>
              </td>
            </tr>
          ) : (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td className="items__actions">
                <button onClick={() => startEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  </div>
);
}
