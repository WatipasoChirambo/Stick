import React from 'react'

function Button({text}) {
  return (
    <div>
        <button className="rounded-lg bg-orange-500 text-white px-4 py-2">
            <h4>{text}</h4>
        </button>
    </div>
  )
}

export default Button