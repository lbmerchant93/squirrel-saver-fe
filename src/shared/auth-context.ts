import { createContext, Dispatch, SetStateAction } from "react";

export interface User {
    displayName?: string | null;
    email: string | null;
    id: string | undefined;
    isLoggedIn: boolean;
    setDisplayName: Dispatch<SetStateAction<string | null | undefined>>;
    setIsLoadingUser: Dispatch<SetStateAction<boolean>>;
    setUserId: Dispatch<SetStateAction<string | undefined>>;
}

export const AuthContext = createContext<User>({ 
    displayName: '',
    email: '',
    id: undefined,
    isLoggedIn: false, 
    setDisplayName: () => {},
    setIsLoadingUser: () => {},
    setUserId: () => {},
})