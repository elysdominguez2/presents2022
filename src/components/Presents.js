export default function Presents(props) {
  const onClickDelete = () => {
    props.removePresent(props.present);
  };

  return (
    <div>
      <ul>
        <li>
          <p className="present"> {[props.present]}</p>
          <button className="delete-gift" onClick={onClickDelete}>
            X
          </button>
        </li>
      </ul>
    </div>
  );
}
