import firestore from './firestore.js'

import { useCollectionData } from 'react-firebase-hooks/firestore'

import SendMessage from './SendMessage.js'
import ChatMessage from './ChatMessage.js'

function ChatRoom({user, onSignOut}) {

  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, {idField: 'id'})

  return (
    <>
      <h1>Hi, {user.nickname}</h1>
      <button onClick={onSignOut}>Sign Out</button>


      <div>
        { messages && messages.map((msg) => <ChatMessage message={msg} key={msg.id}/>) }
      </div>

      <SendMessage messagesRef={messagesRef} user={user} />
    </>
  )
}

export default ChatRoom