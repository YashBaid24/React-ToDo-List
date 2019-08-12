import React from 'react'

const Todo = ({todos , deleteTodo}) => {
    const TodoList = todos.length ? 
    (
        todos.map(el => {
            return(
                <div className="collection-item" key={el.id}>
                    <span className="centered" onClick={() => {deleteTodo(el.id)}}>{el.content}</span>
                </div>
            )
        })
    ) 
    : 
    (
        <p className="center">There ain't anything todo today xD</p>
    )
    return(
        <div className="todos collection">
            {TodoList}
        </div>
    )
}

export default Todo;