import { useEffect, useState } from "react";
import { IMovie } from "../interfaces/movie";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const searchURL = import.meta.env.VITE_SEARCH;


export const useFetchDocuments = (search: string | null = '') => {
    const [documents, setDocuments] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [cancelled, setCancelled] = useState(false)

    const url = `${moviesURL}top_rated?${apiKey}`;
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${search}`;
    useEffect(() => {
        const loadData = async () => {
            if (cancelled) return;
            setLoading(true);

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

    }, [documents, cancelled, search]);

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return { documents, loading, error }
}