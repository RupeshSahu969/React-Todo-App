import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Todoitem from './components/Todoitem';
import "./components/todo.module.css";


function App() {
  return (
    <div className="App">
     <Counter></Counter>
     <Todo></Todo>
     
    </div>
  );
}

export default App;
