import React, { useState } from "react"

import "../styling/ThoughtInput.css"

export const ThoughtInput = () => {
  const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const [thought, setThought] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    fetch(THOUGHTS_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({message: thought})
        }
      ).then(() => {
        setThought("")
        window.location.reload()
      })
  }

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
        <h3>What is making you happy right now?</h3>
        <div className="input-container">
          <textarea
            className="form-text"
            rows="3"
            placeholder="Write a happy thought!"
            onChange={event => setThought(event.target.value)}>
          </textarea>
          <button 
            className="form-button"
            type="submit"
            value="thought"
            disabled={thought.length < 6 || thought.length > 140 ? true : false}
            >
            <span className="heart" role="img" arial-label="Heart">
              {"❤️ "}
            </span>
            Send happy thought
            <span className="heart" role="img" arial-label="Heart">
              {"❤️ "}
            </span>
          </button>
        </div>
        <p className="thought-length">{thought.length} / 140.</p>
        <p className="characters">Min 5 characters.</p>
      </form>
    </div>
  )
}