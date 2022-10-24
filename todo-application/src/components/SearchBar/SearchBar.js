import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './searchbar.scss'

const SearchBar = ({ task, setFilteredResults, searchTask, setSearchTask }) => {

    const theme = useSelector((state) => state.theme.theme);
    const myTheme = theme === 'light' || theme === null;
    // const [searchInput, setSearchInput] = useState('');
    

     const searchItems = (searchValue) => {
        setSearchTask(searchValue)
        if (searchTask.length !== '') {
            const filteredData = task.filter((item) => {
                return Object.values(item.task).join('').toLowerCase().includes(searchTask.toLowerCase())
            })
           
            setFilteredResults(filteredData);
           
        }
        else{
            setFilteredResults(task)
        }
    }

    return (
        <input type="search" value={searchTask} onChange={(e) => searchItems(e.target.value)} className={myTheme ? "search-input" : "search-input-dark"} placeholder="Search" />

    )
}

export default SearchBar