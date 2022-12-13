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

      <form className="form" onSubmit={submit}>
        <input
          className="add-gift"
          type="text"
          placeholder="Add more presents"
          value={gift}
          onChange={(e) => setGift(e.target.value)}
        ></input>
        <button type="submit" className="button-add">
          Add
        </button>
      </form>

      <h2 className="subTitle">Presents:</h2>
      {presents.map((p, index) => {
        return (
          <div key={index}>
            <Presents present={p} />
          </div>
        );
      })}
    </div>
  );
}
