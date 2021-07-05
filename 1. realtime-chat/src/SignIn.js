import { useState } from 'react'
import logo from './logo.svg'

function SignIn(props) {

 const [nickname, setNickname] = useState('')

 const signIn = (e) => {
    e.preventDefault()
    if (nickname.trim() === "") {
        alert('Enter a valid nickname')
    } else {
        props.onSubmit(nickname)
    }
 }

 return (
    <div className="px-8 md:px-16 min-h-screen">
        <div className="h-16"></div>
        <img src={logo} alt="Application logo" className="App-logo"/>

        <h1 className="text-2xl font-bold text-center mb-16">Realtime Chat Application</h1>

        <form onSubmit={signIn}>
            <div>Nickname: </div>
            <input 
                type="text" 
                value={nickname} 
                onChange={(e) => setNickname(e.target.value)}
                className="w-full rounded bg-gray-500 p-2 text-gray-100 mb-4"
                />

            <button type="submit" className="bg-blue-400 p-2 mb-2 w-full rounded hover:bg-blue-500">Enter Chat Room</button>
        </form>

    </div>
 )
}

export default SignIn