import {useState, useEffect} from "react";

function TodoList(){
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => {
        return setToDo(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }

        setToDos((currentArray) => {
            return [toDo, ...currentArray];
        });
        setToDo("");
    }

    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write your to do ..."/>
                <button onClick={onSubmit}>Add To Do</button>
            </form>
        </div>
    );
}

export default TodoList;