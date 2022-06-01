import "./App.css";
import Users from "./components/Users/Users";
import Search from "./components/Search/Search";
import { createContext, useState } from "react";

export const SearchContext = createContext();

function App() {
  const [serchValue, setSerchValue] = useState("");

  return (
    <SearchContext.Provider value={{ serchValue, setSerchValue }}>
      <div className="App">
        <div className="container">
          <h1>Users Search Page</h1>
          <Search />
          <Users />
        </div>
      </div>
    </SearchContext.Provider>
  );
}
//

export default App;
