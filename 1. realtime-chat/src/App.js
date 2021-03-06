import './App.css';


import { useState } from 'react'

import ChatRoom from './ChatRoom.js'
import SignIn from './SignIn.js'

function App() {

    const [user, setUser] = useState(null)

    const submit = (nickname) => {
        setUser({
            nickname,
            uid: (new Date()).getTime()
        })
    }

    const resetUser = () => {
        setUser(null)
    }

    return (
        <div className="App">
            { user ? 
                <ChatRoom user={user} onSignOut={resetUser}/> : 
                <SignIn onSubmit={submit}/> 
            }
        </div>
    );
}

export default App;
