import './App.css';
import React, { useState } from "react";

function App() {
  const [isBanned, setIsBanned] = useState(false);

  const handleBan = () => {
    setIsBanned(true);
  };

  const handleUnban = () => {
    setIsBanned(false);
  };

  return (
    <div>
      <span>
        {isBanned ? "Забанен" : "User"}
      </span> <br />
      {isBanned ? (
        <button onClick={handleUnban}>Разбанить</button>
      ) : (
        <button onClick={handleBan}>Забанить</button>
      )}
    </div>
  );
}

export default App;