import React, { useState } from 'react'
import './App.css';
import Empty from '../src/images/empty.png'
import Navbar from './components/Nav/Nav';
import TodoItem from './components/TodoItem/TodoItem';
import './styles/GlobalStyles.css'
import { useSelector } from "react-redux";
import SearchBarMobile from './components/SearchBar/SearchMobile/SearchBarMobile';

const App = () => {

  const theme = useSelector((state) => state.theme.theme);
  const task = useSelector((state) => state.task.task);
  const [searchTask, setSearchTask] = useState('');
  const [filteredResults, setFilteredResults] = useState([...task]);
  const taskList = [...task];
  const myTheme = theme === 'light' || theme === null;



  return (

    <div className={myTheme ? "main-container" : "main-dark-container"}>
      <div className={myTheme ? "todo-wrapper" : "todo-wrapper-dark"}>
        <Navbar task={taskList} setFilteredResults={setFilteredResults} searchTask={searchTask} setSearchTask={setSearchTask} />
        <br />
        <SearchBarMobile />
        {
          
          //CHECK IF SEARCH INPUT HAS VALUE MORE THAN 1
          searchTask.length > 0 ? (

          // IF THE USER IS SEARCHING THIS WILL BE THE OUTPUT
          //CHECK IF FILTERED RESULT HAS VALUE
          filteredResults.length === 0 ?
           
            <div className="empty-list-container">
              <img src={Empty} className="empty-img" alt="Empty List" />
              <h1 className={myTheme ? "empty-text" : "empty-text-dark"}>No task available</h1>
            </div>
              :
             <div className="todo-item-container">
              {
                filteredResults?.reverse().map((tasks, key) => {
                  return <TodoItem key={key} title={tasks.task} time={tasks.time} task={tasks} setSearchTask={setSearchTask} />
                })
              }
            </div>
              
        )
          : 

          // IF THE USER IS NOT SEARCHING THIS WILL BE THE OUTPUT
          (
            taskList.length !== 0 ?
              <div className="todo-item-container">
                {
                  taskList?.reverse().map((tasks, key) => {
                    return <TodoItem key={key} title={tasks.task} time={tasks.time} task={tasks} setSearchTask={setSearchTask} />
                  })
                }
              </div>
              :
              <div className="empty-list-container">
                <img src={Empty} className="empty-img" alt="Empty List" />
                <h1 className={myTheme ? "empty-text" : "empty-text-dark"}>No task available</h1>
              </div>
          )}
      </div>
    </div>

  );
}

export default App;
