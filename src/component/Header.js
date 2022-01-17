import React from 'react'
import Button from './Button'

function Header({title, onAddToggle, showAddTask}) {
    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button color={showAddTask ? 'red' : "green"} text={(showAddTask) ? "X" : "Add"} onClick={onAddToggle}/>
        </div>
    )
}

export default Header
