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
            await messagesRef.add({
                text: msg,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                sender: user.nickname,
                uid: user.uid
            })
        }
    }

    return (
        <form onSubmit={send}>
            <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <button type="submit" disabled={message.trim().length === 0}>Send</button>
        </form>
    )
}

export default SendMessage