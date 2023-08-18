const Content = (props) => {
    const deleteKey = (id) => {
        const updatedList = props.list.filter(list => list.id !== id);
        props.setList(updatedList);
      };
    return(
        <div className="List">
            {props.list.map((list) => {
                return(
                    <li className="elementList" key={list.id}>
                        {list.title}
                        <button 
                        className="delete"
                        onClick={() => deleteKey(list.id)}>
                            Delete
                        </button>
                    </li>
                )
            })}
        </div>
    )
}

export default Content