'use client'

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Teste() {
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    const newId = Math.max(...items, 0) + 1;
    setItems([...items, newId]);
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item !== id));
  };

  return (
    <div className="p-40">
      <h2 className="text-white">📦 Lista Animada</h2>
      <button className="flex flex-row cursor-pointer bg-white p-2 rounded-4xl mt-2" onClick={addItem}>Adicionar</button>

      <div style={{ marginTop: 20 }}>
        <AnimatePresence>
          {items.map(id => (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.3 }}
              style={{
                padding: "12px 20px",
                marginBottom: 10,
                background: "#eee",
                borderRadius: 8,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span>Item {id}</span>
              <button onClick={() => removeItem(id)}>Remover</button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};