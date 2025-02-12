import React, { useEffect, useState } from 'react'

const WindowDimensions = () => {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    useEffect(() => {
        function handleResize() {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize)

    }, [])

    return (
        <span>
            {dimensions.width} && {dimensions.height}
        </span>
    )
}

export default WindowDimensions