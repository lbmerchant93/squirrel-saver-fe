import { createContext, Dispatch, SetStateAction } from "react";

export interface User {
    displayName?: string | null;
    email: string | null;
    id: string | undefined;
    isLoggedIn: boolean;
    totalSavings: number | undefined;
    savingsRange: number[] | null;
    numbersDrawn: number[] | null;
    numbersNotDrawn: number[] | null;
    setDisplayName: Dispatch<SetStateAction<string | null | undefined>>;
    setUserId: Dispatch<SetStateAction<string | undefined>>;
}

export const AuthContext = createContext<User>({ 
    displayName: '',
    email: '',
    id: undefined,
    isLoggedIn: false, 
    totalSavings: undefined,
    savingsRange: [],
    numbersDrawn: [],
    numbersNotDrawn: [],
    setDisplayName: () => {},
    setUserId: () => {},
})