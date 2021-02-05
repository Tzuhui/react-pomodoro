export default function Todo(props) {
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input className="form-check-input" type="checkbox"
          id={props.id} checked={props.data.active}
          onChange={props.handler} />
        <label className="form-check-label" htmlFor={props.id}>
          {props.data.text}
        </label>
      </div>
    </li>
  );
}