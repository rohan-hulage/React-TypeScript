import React from "react"

type GreetProps = {
    name: string;
}

function Greet(props: GreetProps) {
    return (
        <div>
            <h2>Hello, My name is {props.name}</h2>
        </div>
    )
}

export default Greet;