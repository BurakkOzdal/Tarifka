import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [veri, setVeri] = useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)

    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setVeri(responseData);
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    
    return { veri, error, loading}
}
export default useFetch;