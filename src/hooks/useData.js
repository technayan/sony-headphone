import { useEffect, useState } from "react";

const useData = () => {
    const [analysis, setAnalysis] = useState([]);
    
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAnalysis(data))
    }, []);
    return [analysis, setAnalysis];
}

export default useData;