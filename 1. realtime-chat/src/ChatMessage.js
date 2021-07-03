function ChatMessage({message, id}) {
    const {text, sender} = message
    return (
        <div>
            <span>{sender}: </span>
            <span>{text}</span>
        </div>
    )
}

export default ChatMessage