import { useState } from 'react'
import firebase from 'firebase/app'

function SendMessage({messagesRef, user})
{

    const [message, setMessage] = useState('')

    const send = async (e) => {
        e.preventDefault()
        if (message.trim().length > 0) {
            const msg = message.trim()
            setMessage('')

            console.log('sending')
            await messagesRef.add({
                text: msg,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                sender: user.nickname,
                uid: user.uid
            })
            console.log('sent')
        }
    }

    return (
        <form onSubmit={send} className="flex">
            <input 
                type="text" 
                value={message} 
                onChange={(e)=>setMessage(e.target.value)}
                className="px-2 py-3 bg-gray-500 flex-grow"
                />
            <button 
                type="submit" 
                disabled={message.trim().length === 0}
                className="bg-blue-900 px-10"
                >Send</button>
        </form>
    )
}

export default SendMessage