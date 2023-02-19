import Title from './Title'
import { useState } from 'react'
const loggedInUser = () => {
    // API call
    return false
}
export const Header = () => {

    const [isLoggedIn, setLoggedIn] = useState(false)
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn ? <button className='btn' onClick={() => setLoggedIn(false)}>Logout</button> : <button className='btn' onClick={() => setLoggedIn(true)}>Login</button>
            }
            
        </div>
    )
}

