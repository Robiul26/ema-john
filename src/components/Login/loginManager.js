
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile, FacebookAuthProvider } from "firebase/auth";

import {auth} from './firebase-config';

export const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider)
  .then((res) => {
    const {displayName, photoURL, email} = res.user;
    const signedInUser = {
      isSignedIn: true,
      name: displayName,
      email: email,
      photo: photoURL,
      success: true
    }
    console.log(displayName,email);
    return signedInUser;
    
  })
  .catch(err => {
    console.log(err.message);
  })
}


export const handleFbSignIn = () => {
    const fbProvider = new FacebookAuthProvider();
   return signInWithPopup(auth, fbProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      user.success = true;
        return user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
  }

  

 export const handleSignOut = () => {  
    return signOut(auth)
    .then(res => {
        const signedOutUser = {
            isSignedIn: false,
            name: '',
            email: '',
            photo: '',
            error: '',
            success: false
        }
      return signedOutUser;
    })
    .catch((err) => {

    })
  }

  export const createUserWithMailAndPwd = (name,email,password) => {
    const auth = getAuth();
    return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
    // Signed in 
    const newUserInfo = res.user;
    newUserInfo.error = '';
    newUserInfo.success = true;
    updateUserName(name);    
    return newUserInfo;
    })
    .catch((error) => {
    const newUserInfo = {}
    newUserInfo.error = error.message;
    newUserInfo.success = false;
    return newUserInfo;
    });
  }


    export const signInWithMailAndPwd = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        return newUserInfo;
        })
        .catch((error) => {
        const newUserInfo = {}
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
        });
    }

    
  const updateUserName = name => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      console.log('User name update successfully');
    }).catch((error) => {
      console.log(error.message);
    });
  }