import React, { ReactNode, useState, useEffect } from 'react';
import { AuthContext } from './shared/auth-context';
import { 
    getAuth, 
    signOut, 
    setPersistence, 
    browserLocalPersistence, 
    onAuthStateChanged
} from 'firebase/auth';
import { useUser } from './api/user/user';

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
    const [totalSavings, setTotalSavings] = useState<number>(0);
    const [savingsRange, setSavingsRange] = useState<number[]>([]);
    const [numbersDrawn, setNumbersDrawn] = useState<number[]>([]);
    const [numbersNotDrawn, setNumbersNotDrawn] = useState<number[]>([]);
    const [periodId, setPeriodId] = useState<number | null>(null);
    const { data } = useUser(userId, email);

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
                // setProviderId(providerId);
                // setRefreshToken(refreshToken);
                setDisplayName(user.displayName);
                setEmail(user.email);
                setUserId(user.uid);
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

    useEffect(() => {
        if (data && data.user !== null && data.user.id === userId) {
            const { user } = data;
            const { periods } = user;

            setPeriodId(periods[periods.length - 1].id);
            setNumbersDrawn(periods[periods.length - 1].numbersDrawn);
            setNumbersNotDrawn(periods[periods.length - 1].numbersNotDrawn);
            setSavingsRange(periods[periods.length - 1].savingsRange);
            setTotalSavings(periods[periods.length - 1].totalSavings);
            setIsLoggedIn(true);
        };
    }, [data, userId]);

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
            periodId: periodId,
            setUserId: setUserId,
            setDisplayName: setDisplayName,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;