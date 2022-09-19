import React from 'react'
import AddButton from '../AddButton/add-button'
import FilterButton from '../FilterButton/FilterButton'
import '../Nav/nav.scss'
import SearchBar from '../SearchBar/SearchBar'
import ThemeButton from '../ThemeButton/ThemeButton'

const Navbar = ({ task, setSearchTask, searchTask, setFilteredResults }) => {

  
    
    return (
        <nav className="nav">
            <AddButton />
            <div className='nav-row'>
                <SearchBar task={task} setFilteredResults={setFilteredResults} searchTask={searchTask} setSearchTask={setSearchTask}/>
                <FilterButton />
                <ThemeButton />
            </div>
            
        </nav>
    )
}

export default Navbar