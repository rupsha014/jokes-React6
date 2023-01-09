import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div className="">
            {props.setup && <h3 className=" text-2xl font-bold flex items-center justify-center">{props.setup}</h3>}
            {isShown && <p className="font-semibold bold flex items-center justify-center mt-3">{props.punchline}</p>}
            <button className="border-2 p-3 border-black mr-auto ml-auto flex mb-3 mt-3" onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr  className="border-2 border-black"/>
        </div>
    )
}
