import "./Content.css"

const Content = (props) => {
    const removeKey = (id) => {
        const updatedList = props.list.filter(list => list.id !== id);
        props.setList(updatedList);
      };

    return(
        <div className="List">
            {props.list.map((list) => {
                return(
                    <li className="elementList" key={list.id}>
                        <div className="titleList">{list.title}</div>
                        <div className="buttonsList">
                            <button 
                            className="delete"
                            onClick={() => removeKey(list.id)}>
                                Delete
                            </button>
                            <button 
                            className="finish"
                            onClick={() => removeKey(list.id)}>
                                Finish
                            </button>
                                
                        </div>
                    </li>
                )
            })}
        </div>
    )
}

export default Content