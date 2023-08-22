import "./Content.css";

const Content = (props) => {
  const updateFinish = (id) => {
    props.setList(
      props.list.map((list) => {
        if (list.id === id) {
          if (list.finish === true) {
            return { ...list, finish: false, buttonText: "Task Finished" };
          } else {
            return { ...list, finish: true, buttonText: "Relist Task" };
          }
        } else {
          return list;
        }
      }),
    );
  };

  const removeKey = (id) => {
    const updatedList = props.list.filter((list) => list.id !== id);
    props.setList(updatedList);
  };

  return (
    <div className="List">
      {props.list.map((list, index) => {
        return (
          <li className="elementList" key={list.id}>
            <div
              className="inside"
              style={{
                backgroundColor: list.finish ? "#86DC3D" : "#FFE800",
              }}
            >
              <div className="titleList">
                {index + 1}) {list.title}
              </div>
              <button className="finish" onClick={() => updateFinish(list.id)}>
                <span>{list.buttonText}</span>
              </button>
            </div>
            <button className="delete" onClick={() => removeKey(list.id)}>
              Delete Task
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Content;
