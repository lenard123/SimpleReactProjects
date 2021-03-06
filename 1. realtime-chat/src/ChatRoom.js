import firestore from './firestore.js'
import { useRef, useEffect } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import SendMessage from './SendMessage.js'
import ChatMessage from './ChatMessage.js'

function ChatRoom({user, onSignOut}) {

  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt', 'desc').limit(25)

  const [messages] = useCollectionData(query, {idField: 'id'})

  const dummy = useRef()

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="ChatRoom">
      <div className="header">
        <h1 className="font-bold text-2xl self-center">Realtime Chat App</h1>
        <button 
          className="bg-gray-700 py-2 px-5 rounded-sm"
          onClick={onSignOut}
          >Sign Out</button>
      </div>


      <div className="main">
        { messages && messages.reverse().map((msg) => <ChatMessage message={msg} key={msg.id} user={user}/>) }

        <span ref={dummy}></span>

      </div>

      <SendMessage messagesRef={messagesRef} user={user}/>
    </div>
  )
}

export default ChatRoom