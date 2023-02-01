import { useEffect, useState } from "react";
import { IOnlyMovie } from "../interfaces/onlyMovie";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const useFetchDocument = (id: string | undefined) => {
    const [document, setDocument] = useState<IOnlyMovie>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [cancelled, setCancelled] = useState(false)

    const url = `${moviesURL}${id}?${apiKey}`

    useEffect(() => {
        const loadData = async () => {
            if (cancelled) return;
            setLoading(true);

            try {
                const res = await fetch(url)
                const data = await res.json()
                setDocument(data)
                setLoading(false)
            } catch (error) {
                console.log(typeof error)
                setLoading(false)
            }
        }

        loadData()

    }, [cancelled, url])

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return { document, loading, error }
}