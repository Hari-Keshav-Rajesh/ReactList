import { v4 } from "uuid"

function Form (props) {

    const onInput = (event) => {
        props.setValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        props.setList([...props.list,{title:props.value,id:v4()}])
    }
    
    return(
        <form onSubmit={onSubmit}
        className="formArea"
        value={props.value}
        onInput={onInput}
        list={props.list}
        >
            <input
            className="formInput"
            type="text"
            value={props.value}
            placeholder="Enter a Task"
            onChange={onInput}
            />

            <button
            type="submit"
            className="addButton"
            onSubmit={onSubmit}
            >
            Add</button>
        </form>
    )
}

export default Form