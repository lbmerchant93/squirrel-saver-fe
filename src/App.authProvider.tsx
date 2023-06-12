import React, { ReactNode, useState, useEffect } from 'react';
import { AuthContext } from './shared/auth-context';
import { 
    getAuth, 
    signOut, 
    setPersistence, 
    browserLocalPersistence, 
    onAuthStateChanged
} from 'firebase/auth';

export const getAuthToken = () => localStorage.getItem('token');

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = (props) => {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence);
    const [displayName, setDisplayName] = useState<string | null | undefined>('');
    const [email, setEmail] = useState<string | null>('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [providerId, setProviderId] = useState<string | null>('');
    // const [refreshToken, setRefreshToken] = useState<string | null>('');
    const [userId, setUserId] = useState<string | undefined>(undefined);
    const [totalSavings, setTotalSavings] = useState<number | undefined>(undefined);
    const [savingsRange, setSavingsRange] = useState<number[] | null>([]);
    const [numbersDrawn, setNumbersDrawn] = useState<number[] | null>([]);
    const [numbersNotDrawn, setNumbersNotDrawn] = useState<number[] | null>([]);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    const bearerToken = await user.getIdToken();
                    localStorage.setItem('token', bearerToken);
                } catch (e) {
                    console.log('getIdToken failure', e);
                    const newToken = await getAuth().currentUser?.getIdToken();
                    localStorage.setItem('token', newToken ?? '');
                }
                setEmail(user.email);
                setIsLoggedIn(true);
                // setProviderId(providerId);
                // setRefreshToken(refreshToken);
                setUserId(user.uid);
                console.log(user)
            } else {
                localStorage.setItem('token', '');
                setUserId(undefined);
                setDisplayName('');
                setEmail('');
                setIsLoggedIn(false);
                signOut(auth);
            }
        })

        return () => {
            listen();
        };
    }, []);

    return (
        <AuthContext.Provider 
            value={{
            isLoggedIn: isLoggedIn,
            id: userId,
            displayName: displayName,
            email: email,
            totalSavings: totalSavings,
            savingsRange: savingsRange,
            numbersDrawn: numbersDrawn,
            numbersNotDrawn: numbersNotDrawn,
            setUserId: setUserId,
            setDisplayName: setDisplayName,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;