function ChatMessage({message, id, user, formRef}) {
    const {text, sender, uid} = message

    return (
        <div ref={formRef} className={`message text-left ${uid === user.uid ? 'sent' : 'received'}`}>
            <div className="sender">{sender}</div>
            <div className="text">{text}</div>
        </div>
    )
}

export default ChatMessage