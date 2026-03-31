import React from 'react'

function Reusablebtn({ text, sm, lg, rounded, onClick }) {
    return (
        <button className={`text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                            hover:bg-gradient-to-bl font-medium ${sm} sm:${lg}  px-3 py-1.5
                          ${rounded} focus:outline-none focus:ring-0 cursor-pointer`} onClick={onClick}>
            {text}

        </button>
    )
}

export default Reusablebtn
