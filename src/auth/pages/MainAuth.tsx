/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Dashboard from './Dashboard';
import Dashboard2 from './Dashboard2';

const MainAuth = () => {

    const [isLoggedIn, setisLoggedIn] = useState<boolean>();

    const handleClick = () => {
        setisLoggedIn(!isLoggedIn)
    };


    return (
        <>
            <div className="container">
                <h1>Main</h1>
                <button className="btn btn-secondary" onClick={handleClick}>Login</button>
                {/* {isLoggedIn && <Dashboard setIsLoggedIn={setisLoggedIn} />} */}
                {isLoggedIn && <Dashboard2 setIsLoggedIn={setisLoggedIn} />}
            </div>
        </>
    )
}

export default MainAuth
