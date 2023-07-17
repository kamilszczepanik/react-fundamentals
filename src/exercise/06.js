// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()

    onSubmitUsername(inputRef.current.value)
  }

  const handleChange = event => {
    let value = event.target.value

    const isValid = value === value.toLowerCase()

    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          id="usernameInput"
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={error}>
        Submit
      </button>
      <div style={{color: 'red'}} role="alert">
        {error}
      </div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
