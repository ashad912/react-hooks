import React, {createContext, Component} from 'react';


export const ThemeContext = createContext();


class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: {   
            syntax: '#555',
            ui: '#ddd',
            bg: '#eee'},
        dark: { 
            syntax: '#ddd',
            ui: '#333', 
            bg: '#555'}
    }

    toggleTheme = (param) => {
        console.log('param: ', param)
        this.setState( {
            isLightTheme: !this.state.isLightTheme
        });
    }
    render() { 
        return ( 
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}> {/*providing specific props of state, and funcs 'toggleTheme'*/ }
                {this.props.children} {/*refers to children wraped by provider in App.js */}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;