import "./pagesStyle.css";
import { useState } from "react";
import Presents from "../components/Presents";

export default function ListOfPresents() {
  const [gift, setGift] = useState("");
  const [presents, setPresents] = useState([]);
  const [message, setMessage] = useState(false);

  const submit = (event) => {
    event.preventDefault();

    if (gift === "") {
      setMessage("You have to add a present");
      return;
    }

    function sameGift(g) {
      return g === gift;
    }

    if (presents.some(sameGift)) {
      setMessage("You can not repeat presents");
      return;
    }

    const updateGift = gift;
    setPresents([...presents, updateGift]);
    setGift("");
    setMessage("");
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

  const removeAllPresents = () => {
    setPresents([]);
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
          //   required
        ></input>
        <button type="submit" className="button-add">
          Add
        </button>
      </form>

      <h4>{message}</h4>

      {!presents.length ? (
        <div>
          <h3>Santa is waiting, add some presents</h3>
        </div>
      ) : (
        <div>
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

          <button className="delete" onClick={removeAllPresents}>
            Delete all presents
          </button>
        </div>
      )}
    </div>
  );
}
