import React from 'react'
import AddButton from '../AddButton/add-button'
import FilterButton from '../FilterButton/FilterButton'
import '../Nav/nav.scss'

const Navbar = () => {
    return (
        <nav className="nav">
            <AddButton />
            <div className='nav-row'>
                <input type="text" className="search-input" placeholder="Search"/>
                <FilterButton />
            </div>
        </nav>
    )
}

export default Navbar