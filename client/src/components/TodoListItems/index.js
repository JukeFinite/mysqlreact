import React from 'react';
import { Link } from 'react-router-dom';


const ListItems = props => {
    console.log(props);
    return (
        <ul className="list-group">
            { props.items.map(item => (
                <li 
                 className={item.completed ? "list-group-item text-success" : "list-group-item text-danger"}
                 key={item.id}
                 >
                {item.title} 
                 <Link to={`/todo/${item.id}`} >View Todo</Link>
                </li>
            ))}
        </ul>
    );
}
export default ListItems;