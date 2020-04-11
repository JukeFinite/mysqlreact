import React from 'react';
const ListItems = props => (
    <ul className="list-group">
        { props.items.map(item => (
            <li 
             className={item.completed ? "list-group-item text-success" : "list-group-item text-danger"}
             key={item.id}
             userid={item.userId}>{item.title}</li>
        ))}
    </ul>
);
export default ListItems;