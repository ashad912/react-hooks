import React, {Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

/*class Navbar extends Component {
    //static contextType = ThemeContext 
    render() { 
        //console.log(this.context) //access to props shared in provided context
        return (
            <AuthContext.Consumer>{(authContext)=> ( //.Consumer can be used in functional component
                //second approach to context
                <ThemeContext.Consumer>{(themeContext) => {
                    const {isAuthenticated, toggleAuth} = authContext
                    const {isLightTheme, light, dark } = themeContext //assumed the same names of vars
                    const theme = isLightTheme ? light : dark
                    return (  
                        <nav style={{background: theme.ui, color: theme.syntax}}>
                            <h1>Context App</h1>
                            <div onClick={toggleAuth}>
                                {isAuthenticated ? 'Logged in' : 'Logged out'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    );
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        )
    }
}*/
const Navbar = () => {
    const {isLightTheme, light, dark } = useContext(ThemeContext)
    const {isAuthenticated, toggleAuth} = useContext(AuthContext)
    const theme = isLightTheme ? light : dark
    return (  
        <nav style={{background: theme.ui, color: theme.syntax}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
 
export default Navbar;