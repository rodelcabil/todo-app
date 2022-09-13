import './App.css';
import Empty from '../src/images/empty.png'
import Navbar from './components/Nav/Nav';
import TodoItem from './components/TodoItem/TodoItem';
import './styles/GlobalStyles.css'
function App() {
  return (
    <div className="main-container">
      <div className="todo-wrapper">
        <Navbar />
        <div className="todo-item-container">
          <TodoItem title="Sample Title" description="Sample Description" />
        </div>
        <div className="empty-list-container">
          <img src={Empty} className="empty-img" alt="Empty List"/>
          <h1>No task available</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
