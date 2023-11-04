import React, { useState, useEffect } from "react";
import NoteContext from "./NoteContext";

export default function NoteState({ children }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
    localStorage.setItem("username", newUsername);
  };

  return (
    <NoteContext.Provider value={{ username, updateUsername }}>
      {children}
    </NoteContext.Provider>
  );
}
