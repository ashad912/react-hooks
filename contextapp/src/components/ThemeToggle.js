import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

/*
class ThemeToggle extends Component {
    static contextType = ThemeContext
    render() { 
        const { toggleTheme } = this.context //acces to context method to toggle theme!
        return ( 
            //test of param passing below
            <button onClick={() => toggleTheme('pressed')  }>Toggle the theme</button>
         );
    }
}
*/
 
const ThemeToggle = () => {
    //const toggleTheme  = useContext(ThemeContext).toggleTheme //classical approach
    const { toggleTheme } = useContext(ThemeContext)
    return ( 
        <button onClick={() => toggleTheme('pressed') /*test of param passing */}>Toggle the theme</button>
     );
}
 
export default ThemeToggle;