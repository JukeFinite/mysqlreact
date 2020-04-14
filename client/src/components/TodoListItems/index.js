import React from 'react';

const ListItems = props => {
    console.log(props.items);
    return (
        <ul className="list-group">
            { props.items.map(item => (
                <li 
                 className={item.completed ? "list-group-item text-success" : "list-group-item text-danger"}
                 key={item.id}
                 >
                    {item.title}
                    <button 
                        className="btn btn-danger"
                        onClick={ () => props.handleDelete(item.id) }>Delete</button>
                </li>
            ))}
        </ul>
    );
}
export default ListItems;


