import "./pagesStyle.css";
import { useState } from "react";
import Presents from "../components/Presents";

export default function ListOfPresents() {
  const [gift, setGift] = useState("");
  const [presents, setPresents] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    const updateGift = gift;
    setPresents([...presents, updateGift]);
    setGift("");
  };

  const removePresent = (presentToRemove) => {
    const newPresents = presents.filter((g) => {
      if (g === presentToRemove) {
        return false;
      } else {
        return "There is no presents";
      }
    });
    setPresents(newPresents);
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

      {presents.map((p, index) => {
        return (
          <div key={index}>
            <Presents
              present={p}
              presents={presents}
              removePresent={removePresent}
            />
          </div>
        );
      })}
    </div>
  );
}
