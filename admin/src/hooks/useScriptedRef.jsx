import { useEffect, useRef } from "react"

const useScriptedRef = () => {
    const scripted = useRef(true);
    useEffect(() => () => {
        scripted.current = false;
    }, [])
    return scripted
}

export default useScriptedRef