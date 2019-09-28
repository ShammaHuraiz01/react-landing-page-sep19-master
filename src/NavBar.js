<<<<<<< HEAD
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
=======
import React, { useContext } from 'react';
>>>>>>> Setup for app.
import AppContext from './AppContext';

const LoginGroup = () => {
    const [globalState, setGlobalState] = useContext(AppContext);

    const logOutUser = () => {
        setGlobalState({ ...globalState, loggedIn: false })
    }

<<<<<<< HEAD
    const showRegistrationForm = () => {
        setGlobalState({ ...globalState, userForm: 'registration' })
    }

    const showLoginForm = () => {
        setGlobalState({ ...globalState, userForm: 'login' })
    }

=======
>>>>>>> Setup for app.
    if(globalState.loggedIn) {
        return (
            <div>
                <div>Welcome back, {globalState.userName}</div>
                <button onClick={logOutUser} 
                className="btn btn-primary">Log Out</button>
            </div>
        )
    } else {
        return (
            <div>
<<<<<<< HEAD
                <button onClick={showRegistrationForm} className="btn btn-primary">Register</button>
                <button onClick={showLoginForm} className="btn btn-primary">Log In</button>
=======
                <button className="btn btn-primary">Register</button>
                <button className="btn btn-primary">Log In</button>
>>>>>>> Setup for app.
            </div>
        )
    }
    
}

const NavBar = (prop) => {
<<<<<<< HEAD

    const [state, setState] = useState({
        currentPage: prop.location,
        home: prop.location === '/' ? 'btn-success' : 'btn-primary',
        about: prop.location === '/about' ? 'btn-success' : 'btn-primary',
        contact: prop.location === '/contact' ? 'btn-success' : 'btn-primary',
    });

    // Use useEffect to listen to changes outside of the component
    useEffect(()=>{

        // When the prop.location changes
        if(prop.location !== state.currentPage) {

            // Renew the state
            setState({
                currentPage: prop.location,
                home: prop.location === '/' ? 'btn-success' : 'btn-primary',
                about: prop.location === '/about' ? 'btn-success' : 'btn-primary',
                contact: prop.location === '/contact' ? 'btn-success' : 'btn-primary',             
            })
        }
    })

=======
>>>>>>> Setup for app.
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div>
                <a href="#">{prop.logo}</a>       
            </div>

            <div className="btn-group">
<<<<<<< HEAD
              <Link to="/" className={`btn ${state.home}`}>Home</Link>
              <Link to="/about" className={`btn ${state.about}`}>About</Link>
              <Link to="/contact" className={`btn ${state.contact}`}>Contact</Link>
=======
              <button className="btn btn-primary">Home</button>
              <button className="btn btn-primary">About</button>
              <button className="btn btn-primary">Contact</button>
>>>>>>> Setup for app.
            </div>

            <LoginGroup />
        </nav>
    )
}

export default NavBar;