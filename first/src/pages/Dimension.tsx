import { useState, useEffect } from "react"

const Dimension = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

  return (
    <div>
        <h1>Dimension:</h1>
        <h1>width:{windowWidth}</h1>
        <h1>height:{windowHeight}</h1>
    </div>
  )
}

export default Dimension