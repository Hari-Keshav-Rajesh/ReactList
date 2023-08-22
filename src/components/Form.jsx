import { v4 } from "uuid";
import "./form.css";

const Form = (props) => {
  const onInput = (event) => {
    props.setValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (props.value.trim() !== "") {
      props.setList([
        ...props.list,
        {
          title: props.value,
          id: v4(),
          finish: false,
          buttonText: "Task Finished",
        },
      ]);
      props.setValue("");
    }
  };

  const onDeleteAll = () => {
    props.setList([]);
  };

  return (
    <div className="formWrapper">
      <form onSubmit={onSubmit} className="formArea">
        <input
          className="formInput"
          type="text"
          value={props.value}
          placeholder="Enter Your Task"
          onChange={onInput}
        />

        <button type="submit" className="addButton" onSubmit={onSubmit}>
          Confirm
        </button>

        <button className="deleteAll" onClick={onDeleteAll}>
          Delete All
        </button>
      </form>
      <h2 className="subHeader">List of Tasks</h2>
    </div>
  );
};

export default Form;
