import React from 'react'
import AddButton from '../AddButton/add-button'
import FilterButton from '../FilterButton/FilterButton'
import '../Nav/nav.scss'
import SearchBar from '../SearchBar/SearchBar'
import ThemeButton from '../ThemeButton/ThemeButton'

const Navbar = () => {

  
    
    return (
        <nav className="nav">
            <AddButton />
            <div className='nav-row'>
                <SearchBar/>
                <FilterButton />
                <ThemeButton />
            </div>
            
        </nav>
    )
}

export default Navbar