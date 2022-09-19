import React from 'react'
import './theme-button.scss'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setLightTheme } from '../store/themeSlice';

const ThemeButton = () => {

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);
    const myThemeTernary = theme === 'light' || theme === null;

   

    // const [myTheme, setTheme] = useState(theme);

    // useEffect(() => {
    //     console.log(myTheme)
    // }, [myTheme])

    const enableDarkMode = () => {
       
        // localStorage.setItem("theme", "dark")
        // setTheme(localStorage.getItem("theme"))
        dispatch(setDarkTheme());
       

    }
    const disableDarkMode = () => {
       
        // localStorage.setItem("theme", "light")
        // setTheme(localStorage.getItem("theme"))

        dispatch(setLightTheme());
       
    }

    return (
        <div className={myThemeTernary ? "themeButton" : "themeButtonDark" }>
            {
                myThemeTernary ? <BsFillSunFill size="22" onClick={enableDarkMode} /> 
                : <BsFillMoonFill size="22" onClick={disableDarkMode} />
            }
        </div>
    )
}

export default ThemeButton