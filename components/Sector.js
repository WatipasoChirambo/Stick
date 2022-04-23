import React from 'react'
import Button from './Button'

function Sector({ title }) {
    return (
        <div className='w-80 lg:96 p-4'>
            <h3 className='font-black font-semibold'>{title}</h3>
            <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam magna metus, elementum vitae sem eget,
                iaculis varius mi. Donec vel elementum arcu.
                Donec porta lorem varius mauris semper,
                et cursus orci placerat.</p>
            <div className='mt-4'>
                <Button text="Learn More" />
            </div>
        </div>
    )
}

export default Sector