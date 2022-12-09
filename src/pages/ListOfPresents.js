import "./pagesStyle.css";
import { useState } from "react";
import Presents from "../components/Presents";

export default function ListOfPresents() {
  const [gift, setGift] = useState("");
  const [presents, setPresents] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    const updateGift = gift;
    console.log(updateGift);
    setPresents([...presents, updateGift]);
    setGift("");
  };

  return (
    <div className="list">
      <h1 className="title">List of presents 2022</h1>
      <p> You can add more presents</p>

      <form onSubmit={submit}>
        <input
          type="text"
          value={gift}
          onChange={(e) => setGift(e.target.value)}
        ></input>
        <button type="submit">Add</button>
      </form>

      <h2 className="subTitle">Presents:</h2>
      {presents.map((p) => {
        return (
          <div>
            <Presents present={p} />
          </div>
        );
      })}
    </div>
  );
}
