import { useState, useEffect } from "react"
import { direito$ } from "./api/airplanes"

export const Direito = () => {
    const [state, setState] = useState({results: []})

    useEffect(() => {
        const subscription = direito$.subscribe(setState)

        return () => subscription.unsubscribe()
    }, [])

    return (
        <div>
            <h1>Lado Direito</h1>
            {state.results.map(item => (
                <p>{item.valor}</p>
            ))}
        </div>
    )
}