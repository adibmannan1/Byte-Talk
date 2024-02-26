import React from 'react'

const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
          <img src="https://images.unsplash.com/photo-1626469028023-896eda77d814?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <span>John</span>
      </div>
      <div className="messageContent">
          <p>Hello, how are you?</p>
      </div>
    </div>
  )
}

export default Message