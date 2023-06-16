import React from 'react'

const Question = (props) => {
       
    return (
        <div>
            <h1>Q{props.id}: {props.sentence}?</h1>
        </div>
    )
}
export default Question