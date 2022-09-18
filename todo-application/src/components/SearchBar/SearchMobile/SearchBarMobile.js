import React from 'react'
import { useSelector } from 'react-redux'
import './searchbarMobile.scss'

const SearchBarMobile = () => {

    const theme = useSelector((state) => state.theme.theme);
    
    return (
        <input type="text" className={theme === "light" || theme === null ? "search-input-mobile" : "search-input-mobile-dark"} placeholder="Search" />
        
    )
}

export default SearchBarMobile