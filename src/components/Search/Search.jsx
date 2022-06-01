import { useContext } from "react";
import { SearchContext } from "../../App";

export default function Search() {
  const { serchValue, setSerchValue } = useContext(SearchContext);
  const onHandleClick = (e) => {
    setSerchValue(e.target.value);
  };
  return <input type="text" className="input__users" value={serchValue} onChange={onHandleClick} placeholder="Search for name, email..." />;
}
