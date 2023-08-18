const Content = (props) => {
    return(
        <div className="List">
            {props.list.map((list) => {
                return(
                    <li className="elementList" key={list.id}>
                    {list.title}
                    </li>
                )
            })}
        </div>
    )
}

export default Content