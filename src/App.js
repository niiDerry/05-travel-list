import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  // This state was lifted from the form component
  const [items, setItems] = useState([]);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [sortBy, setSortBy] = useState("input");

  function handleAddItems(item) {
    // adding items to the list
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    // this is how to update an array of items
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to clear this list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />

      {/* a new prop onAddItems was created */}
      <Form
        onAddItems={handleAddItems}
        description={description}
        quantity={quantity}
        setDescription={setDescription}
        setQuantity={setQuantity}
      />

      <PackingList
        items={items}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onDeleteItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />

      <Stats items={items} />
    </div>
  );
}
