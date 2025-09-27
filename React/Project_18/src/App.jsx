import { useEffect, useState } from "react";

function App() {
  const [singleTodo, setSingleTodo] = useState({ title: "", description: "" });
  const [allTodos, setAllTodos] = useState([]);

  function handleAddTodo() {
    //  setAllTodos(preValue => [...preValue, singleTodo])
    if (!singleTodo.title || !singleTodo.description) {
      return;
    }
    setAllTodos([...allTodos, singleTodo]);
    saveTodoLocalStore([...allTodos, singleTodo]);
  }

  function deleteTodo(index) {
    const newTodo = [...allTodos];
    newTodo.splice(index, 1);
    setAllTodos(newTodo);

    saveTodoLocalStore(newTodo);
  }

  function saveTodoLocalStore(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getTodoLocalStore() {
    let data = JSON.parse(localStorage.getItem("todos")) || [];
    setAllTodos(data);
  }

  useEffect(() => {
    getTodoLocalStore();
  }, []);

  return (
    <div className=" bg-blue-400 w-screen min-h-screen text-center pb-3">
      <h1 className="text-4xl pt-12">Todo App</h1>
      <div className="mt-10">
        <input
          className="bg-white text-2xl px-4 py-2 focus:outline-none capitalize rounded-md"
          type="text"
          placeholder="title.."
          onChange={(e) =>
            setSingleTodo((preValue) => ({
              ...preValue,
              title: e.target.value,
            }))
          }
        />
        <br />
        <br />
        <input
          className="bg-white text-2xl px-4 py-2 focus:outline-none capitalize rounded-md"
          type="text"
          placeholder="description.."
          onChange={(e) =>
            setSingleTodo((preValue) => ({
              ...preValue,
              description: e.target.value,
            }))
          }
        />
        <br />
        <br />
        <button
          className="text-2xl bg-amber-400 text-black py-2 px-[6.3rem] rounded-md hover:bg-green-500 hover:text-white"
          onClick={handleAddTodo}
        >
          Add Todo
        </button>
      </div>
      <div className="w-[90%] sm:w-[80%] md:w-[60%] mx-auto p-4">
        {allTodos.map((data, index) => (
          <div className="bg-blue-300/40 m-6 flex justify-around items-center h-auto rounded-lg" key={index}>
            <div className="flex gap-3 w-[70%]">
              <p className="text-3xl font-light">{index + 1}.</p>
              <div className="flex flex-col items-start gap-2 w-full">
                <h1 className="capitalize text-3xl font-medium line-clamp-1">{data.title}</h1>
                <p className="text-xs break-words whitespace-normal">{data.description}</p>
              </div>
            </div>
            <button className="capitalize text-xs bg-red-600 text-white px-6 py-3 my-2 mr-2 rounded-md hover:bg-blue-500" onClick={() => deleteTodo(index)}>delete <i className="fi fi-rr-trash "></i></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
