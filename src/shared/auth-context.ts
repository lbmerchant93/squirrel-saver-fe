import { createContext, Dispatch, SetStateAction } from "react";

export interface User {
    displayName?: string | null;
    email: string | null;
    id: string | undefined;
    isLoggedIn: boolean;
    totalSavings: number;
    savingsRange: number[];
    numbersDrawn: number[];
    numbersNotDrawn: number[];
    setDisplayName: Dispatch<SetStateAction<string | null | undefined>>;
    setUserId: Dispatch<SetStateAction<string | undefined>>;
}

export const AuthContext = createContext<User>({ 
    displayName: '',
    email: '',
    id: undefined,
    isLoggedIn: false, 
    totalSavings: 0,
    savingsRange: [],
    numbersDrawn: [],
    numbersNotDrawn: [],
    setDisplayName: () => {},
    setUserId: () => {},
})