import React from 'react'

const OfflineError = () => {
    const onRetry = () =>{
        window.location.reload();
    }
  return (
     <div className="container">
    <h1>Oops! You're Offline</h1>
    <p>It seems like you're not connected to the internet. Please check your connection and try again.</p>
    <button className="retry-button" onclick={onRetry}>Retry</button>
</div>
  )
}

export default OfflineError