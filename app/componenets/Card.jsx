import React from 'react'

const Card = ({children}) => {
  return (
    <div className="relative py-6 p-4 rounded-[32px] overflow-hidden [background:radial-gradient(50%_50%_at_85%_54%,rgba(36,66,101,1)_0%,rgba(23,40,59,1)_85%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        {children}
    </div>
  )
}

export default Card