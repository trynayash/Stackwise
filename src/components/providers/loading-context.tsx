"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type LoadingContextType = {
    isLoading: boolean;
    setLoadingDone: () => void;
};

const LoadingContext = createContext<LoadingContextType>({
    isLoading: true,
    setLoadingDone: () => { },
});

export function useLoading() {
    return useContext(LoadingContext);
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const setLoadingDone = useCallback(() => setIsLoading(false), []);

    return (
        <LoadingContext.Provider value={{ isLoading, setLoadingDone }}>
            {children}
        </LoadingContext.Provider>
    );
}
