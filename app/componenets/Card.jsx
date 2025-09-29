import React from 'react'

// [background:radial-gradient(50%_50%_at_85%_54%,rgba(36,66,101,1)_0%,rgba(23,40,59,1)_85%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]

const Card = ({children,className}) => {
  return (
    <div className={`relative text-center  py-6 px-2 md:p-4 rounded-[32px] overflow-hidden ${className} `}>
 
        {children}
    </div>
  )
}

export default Card