import React, { ReactNode, useState } from 'react';
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
    const [providerId, setProviderId] = useState<string | null>('');
    const [refreshToken, setRefreshToken] = useState<string | null>('');
    const [userId, setUserId] = useState<string | undefined>(undefined);

    onAuthStateChanged(auth, async (user) => {
        // conditional to check data from useUser to match user from firebase ?
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
            setProviderId(providerId);
            setRefreshToken(refreshToken);
            setUserId(user.uid);
        } else {
            localStorage.setItem('token', '');
            setDisplayName('');
            setEmail('');
            setIsLoggedIn(false);
            signOut(auth);
            setUserId(undefined);
        }
    })

    return (
        <AuthContext.Provider 
            value={{
            isLoggedIn: isLoggedIn,
            id: userId,
            displayName: displayName,
            email: email,
            setUserId: setUserId,
            setDisplayName: setDisplayName,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;