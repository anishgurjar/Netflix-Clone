import React from 'react'

function Herobutton({primary, text}) {
    return (
        <div>
            <a href="#" className="Button" data-primary={primary}>{text}</a>
        </div>
    )
}

export default Herobutton
