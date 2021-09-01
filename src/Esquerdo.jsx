import { useState, useEffect } from "react"
import { esquerdo$ } from "./api/airplanes"

export const Esquerdo = () => {
    const [state, setState] = useState({results: []})

    useEffect(() => {
        const subscription = esquerdo$.subscribe(setState)

        return () => subscription.unsubscribe()
    }, [])

    return (
        <div>
            <h1>Lado esquerdo</h1>
            {state.results.map(item => (
                <p>{item.valor}</p>
            ))}
        </div>
    )
}