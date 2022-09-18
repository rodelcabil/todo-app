import React from 'react'
import { useSelector } from 'react-redux'
import './searchbar.scss'

const SearchBar = () => {

    const theme = useSelector((state) => state.theme.theme);
    const myTheme = theme === 'light' || theme === null;

    return (
        <input type="text" className={myTheme ? "search-input" : "search-input-dark"} placeholder="Search" />
        
    )
}

export default SearchBar