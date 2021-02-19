export default function Todo(props) {
  return (
    <li className={"list-group-item d-flex justify-content-between align-items-center" + (props.active ? " bg-primary" : "")}>
      <div className="form-check">
        <input className="form-check-input" type="checkbox"
          id={props.id} checked={props.data.active}
          onChange={props.handler} />
        <label className="form-check-label" htmlFor={props.id}>
          {props.data.text}
        </label>
      </div>
      <button className={'btn ' + (props.active ? ' btn-secondary' : ' btn-primary') + (props.data.active ? ' d-none' : '')} data-id={props.id} onClick={props.startCount}><i data-id={props.id} class="far fa-play-circle"></i></button>
    </li>
  );
}