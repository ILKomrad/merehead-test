import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

export function useTitle(title) {
    useEffect(() => {
        document.title = title;
    }, []);
}

export function usePageNumber() {
    const loc = useLocation();
    return +new URLSearchParams(loc.search).get("page") || 1;
}