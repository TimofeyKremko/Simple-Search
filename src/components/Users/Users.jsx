import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../App";
import Card from "../Card/Card";

export default function Users() {
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(0);

  const { serchValue, setSerchValue } = useContext(SearchContext);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArray(data);
      });
  }, [count]);

  const deleteItem = (index) => {
    setArray([...array.slice(0, index), ...array.slice(index + 1)]);
  };

  const filteredHotels = array.filter(
    (item) =>
      item.name.toLowerCase().includes(serchValue.toLowerCase()) ||
      item.email.toLowerCase().includes(serchValue.toLowerCase()) ||
      item.username.toLowerCase().includes(serchValue.toLowerCase())
  );

  const resetItems = () => {
    setCount(count + 1);
    setSerchValue("");
  };

  return (
    <div className="main__content">
      <button className="btn btn--reset" onClick={resetItems}>
        Вернуть карточки
      </button>

      <ul className="users">
        {filteredHotels.map((item, index) => (
          <Card
            username={item.username}
            email={item.email}
            name={item.name}
            key={item.id}
            deleteItem={deleteItem}
            index={index}
            address={item.address}
            website={item.website}
          />
        ))}
      </ul>
    </div>
  );
}
