import React from 'react'

export default function About(props) {
    return (
        <>
        <div>
            <div className={`text-center container my-4 text-${props.mode=="light"?"dark":"light"}`}>
                <h1>About US</h1>
                <p>We provide With Hot and Fresh Food</p> 
            </div>
        </div>
        </>
    )
}
