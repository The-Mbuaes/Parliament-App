import React, {useEffect, useState} from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(()=>{
        const listener = onAuthStateChanged(auth, user=>{
            //runs when auth state changes
            if(user){
                setAuthUser(user);
            }else{
                setAuthUser(null);
            }
        })

        return ()=>{
            listener();
        }
    },[]);


    const signoutfunc = ()=>{
        signOut(auth)
        .then("sign out successful")
    }


    return (
        <div>
            {
            authUser ? 
            <>
               <p>User is {authUser.email}</p>
               <button onClick={signoutfunc}>Sign out</button>
            </>
            : 
            <p>User is not logged in</p>
        }
        </div>
    )
}

export default AuthDetails
