import { v4 } from "uuid";
import "./form.css"

const Form = (props) => {

    const onInput = (event) => {
        props.setValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(props.value.trim()!==""){
        props.setList([...props.list,{title:props.value,id:v4()}])
        props.setValue("")
        }
    }
    
    return(
        <form onSubmit={onSubmit}
        className="formArea"

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