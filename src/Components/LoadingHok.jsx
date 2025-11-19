import { useEffect, useState } from "react"

export const useLoading = () => {
    const [lod, setLod] = useState(true)
    useEffect(() => {
        setLod(true)
        setTimeout(() => {
            setLod(false)
        }, 500)
    }, [])

    return {lod}
}