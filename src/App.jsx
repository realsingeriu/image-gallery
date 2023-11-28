import Gallery from "./Gallery";
import PopupBox from "./PopupBox";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import React, { useState } from "react";

function App() {
  const [item, setItem] = useState(null);
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
      <Gallery setItem={setItem} />
      {item && <PopupBox item={item} setItem={setItem} />}
    </main>
  );
}

export default App;
