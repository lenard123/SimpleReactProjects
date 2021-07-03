import { useState } from 'react'

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
  <>
    <h1>SignIn</h1>

    <form onSubmit={signIn}>
      <label>Nickname: </label>
      <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)}/>

      <button type="submit">Enter Chat Room</button>
    </form>

  </>
 )
}

export default SignIn