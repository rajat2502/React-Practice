import React from "react"

function Joke(prop){
    return (
        <div>
            <h3>{prop.content.question}</h3>
            <h4> - {prop.content.punchLine}</h4>
        </div>
    )
}

export default Joke