import { useState } from "react"

export const useMap = () => {
    const [position, setPosition] = useState({
        lat: 49.828,
        lng: 24.054,
    });
    useEffect(()=>{}, []);
    return {position};
}