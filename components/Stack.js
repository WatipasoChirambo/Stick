import React from 'react'

function Stack({title}) {
    return (
        <div className='border border-solid px-4 w-[400px] h-10 overflow-hidden hover:h-[300px] bg-white text-[#EE9408] duration-500 hover:text-white hover:bg-[#EE9408]'>
            <h4 className='text-3xl text-center pt-1 duration-500 hover:text-left'>{title}</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat eros quis risus pretium aliquet. Phasellus posuere eros ultricies, sagittis sapien at, tristique sem. Vestibulum ut lacinia leo.</p>
        </div>
    )
}

export default Stack