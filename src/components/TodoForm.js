import React, {useState,useEffect, useRef} from 'react'

function TodoForm(props) {
    const[input, setInpunt] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInpunt(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random()* 10000),
            text: input
        });

        setInpunt('')
    };

  return (
    <form className="todo-form" onSubmit= {handleSubmit}>
        {props.edit ? (
        <>
        <input
        type="text"
        placeholder='Update'
        value={input}
        name='text'
        className='todo-input edit'
        onChange={handleChange}
        ref={inputRef}
        />
        <button className='todo-button edit'>Обновить</button>
        </>
        ) : 
        (
        <>
        <input
            type="text"
            placeholder='Add a todo'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className='todo-button'>Записать</button>
            </>
            )
        }
    </form>
  )
}

export default TodoForm