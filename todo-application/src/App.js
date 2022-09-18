import React, { useEffect, useState } from 'react'
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
  const taskList =  [...task];
  const myTheme = theme === 'light' || theme === null;




  console.log("taskList", taskList)
  return (

    <div className={myTheme ? "main-container" : "main-dark-container"}>
      <div className={myTheme ? "todo-wrapper" : "todo-wrapper-dark"}>
        <Navbar />
        <br />
        <SearchBarMobile />
        {
          taskList.length !== 0 ?

            <div className="todo-item-container">
              {
                taskList.reverse().map((tasks) => {
                  return <TodoItem key={tasks.id} title={tasks.task} description={tasks.time} />
                })
              }

            </div>
            :
            <div className="empty-list-container">
              <img src={Empty} className="empty-img" alt="Empty List" />
              <h1 className={myTheme ? "empty-text" : "empty-text-dark"}>No task available</h1>
            </div>
        }
      </div>
    </div>

  );
}

export default App;
