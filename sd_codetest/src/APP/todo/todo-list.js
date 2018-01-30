import React from 'react';
import PropType from 'prop-types';


// prop-types is a for Type checking（inner build type of react）
// in render html it is possiable to directly use argument istead fo having a
// function
// print ou the data in the props
export function TodoList(props) {
    const itemList = props.items.map((aItem, index) => (
        <li key={index}>
            {aItem.done ? (
                <div>
                    <b>{aItem.id}</b>
                    <del>{aItem.name}</del>
                    <button onClick={() => props.onRemoveTodo(aItem)}>Delete</button>
                </div>
            ) : (
                <div>
                    <b>{aItem.id}</b>
                    {aItem.name}
                    <button onClick={() => props.onDoneTodo(aItem)}>Do it</button>
                    <button onClick={() => props.onRemoveTodo(aItem)}>Delete</button>
                </div>
            )}
        </li>
    ));
    return (
        <ul>
            {itemList}
        </ul>
    );
};
// make sure the type of the itemList is correct
TodoList.propTypes = {
    items: PropType.array.isRequired,
    onRemoveTodo: PropType.func.isRequired,
    onDoneTodo: PropType.func.isRequired,
    startChating: PropType.func.isRequired
    
}
