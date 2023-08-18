import { v4 } from "uuid"

const Form = ({value,setValue,List,setList}) => {

    const onInput = (event) => {
        setValue(event.target.value)
    }

    const onSubmit = () => {
        setList([...List,{title:value,id:v4()}])
    }
    
    return(
        <form onSubmit={onSubmit}
        className="formArea"
        required
        value={value}
        setValue={setValue}
        List={List}
        setList={setList}
        >
            <input
            className="formInput"
            type="text"
            value={value}
            placeholder="Enter a Task"
            onChange={onInput}
            />

            <button
            type="submit"
            className="addButton">
            Add</button>
        </form>
    )
}

export default Form