export default function Ex1Item (props) {
    // props.tarefa
    // props.name = `tarefa-${index}`
  
    return (
      <li>
        <input type="checkbox" name={props.name} id={props.name} />
        <label htmlFor={props.name}>
          {props.tarefa}
        </label>
      </li>
    )
  }