import React from "react"
import { useNavigate } from "react-router-dom"
import "./NotFound.css"

function NotFound() {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate("/") // Navigate to home page
  }

  const handleGoBack = () => {
    navigate(-1) // Go back to previous page
  }

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="error-code">
          <span className="four">4</span>
          <span className="zero">0</span>
          <span className="four">4</span>
        </div>

        <div className="error-message">
          <h1>Lost your way?</h1>
          <p>Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
        </div>

        <div className="error-buttons">
          <button className="btn-home" onClick={handleGoHome}>
            Netflix Home
          </button>
          <button className="btn-back" onClick={handleGoBack}>
            Go Back
          </button>
        </div>

        <div className="error-code-small">
          Error Code: <span>NFLX-404</span>
        </div>
      </div>

      <div className="background-animation">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
      </div>
    </div>
  )
}

export default NotFound
