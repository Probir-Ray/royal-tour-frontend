import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initAuthentication from "../Components/Login/Firebase/firebase.init";
import { useEffect, useState } from "react";

initAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google sign in
    const signInUsingGoogle = () => {    
        return signInWithPopup(auth, googleProvider);
    }

    // Observe for user state changed.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    // Logout function
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {})
        .finally(() => setIsLoading(false));
    }

    return {
        isLoading,
        user,
        logout,
        signInUsingGoogle
    }
}
export default useFirebase;