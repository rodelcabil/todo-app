import React from 'react'
import { MdFilterAlt } from 'react-icons/md'
import { useSelector } from 'react-redux';
import '../FilterButton/filter-button.scss'

const FilterButton = () => {
  const theme = useSelector((state) => state.theme.theme);
  const myTheme = theme === 'light' || theme === null;
  
  return (
    <div className={myTheme ? "filterButton" : "filterButtonDark"}><MdFilterAlt size="22"/></div>
  )
}

export default FilterButton