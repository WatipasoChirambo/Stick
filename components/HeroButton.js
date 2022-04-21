import React from 'react'

function HeroButton(text) {
  return (
    <div>
        <div className="border rounded-lg bg-orange-600 text-white">
            <h4>{text}</h4>
        </div>
    </div>
  )
}

export default HeroButton