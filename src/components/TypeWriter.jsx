import { useEffect } from "react"
import { useState } from "react"


export function TypeWriter(props) {
    const [text, setText] = useState("")

    const writeOnScreen = (text, i = 0) => {
        if ( i < text.length ) {
            setText(text.slice(0, i + 1))
            setTimeout(() => writeOnScreen(text, i + 1), 100)
        }
    }

    useEffect(() => {
        setTimeout(() => writeOnScreen(props.text))
    }, [])

    return (
        <div>
            {text}
        </div>
    )
}