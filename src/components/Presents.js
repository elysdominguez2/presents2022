export default function Presents(props) {
  const p = props.present;

  const removePresent = () => {
    console.log("This is p", p);
  };
  return (
    <div>
      <ul>
        <li>
          {[props.present]}{" "}
          <button className="delete-gift" onClick={removePresent}>
            X
          </button>
        </li>
      </ul>
    </div>
  );
}
