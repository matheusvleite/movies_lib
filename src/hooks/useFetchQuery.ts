import { useEffect, useState } from "react";
import { IMovie } from "../interfaces/movie";

const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH;



export const useFetchQuery = (query: string | null) => {
    const [documents, setDocuments] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        const url = `${searchURL}?${apiKey}&query=${query}`;

        const loadData = async () => {
            setLoading(true);
            setDocuments([])

            try {
                const res = await fetch(url)
                const data = await res.json()
                setDocuments(data.results)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }

        loadData()


    }, [query])

    return { documents, loading, error }
}