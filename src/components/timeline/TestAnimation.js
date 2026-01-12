// src/TestAnimation.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TestAnimation() {
  const [items, setItems] = useState(["Item 1", "Item 2"]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={addItem}>Add Item</button>
      <div>
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                padding: "15px",
                margin: "10px 0",
                background: "#f0f0f0",
                borderRadius: "8px",
              }}
            >
              {item}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default TestAnimation;
