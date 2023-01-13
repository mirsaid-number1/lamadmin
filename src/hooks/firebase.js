import { initializeApp } from "firebase/app";
import { useEffect,useState,useContext } from "react";
import {useNavigate} from 'react-router-dom'
import {getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged
       } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {AuthDB} from '../context/AuthContext';
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "lamadmin-3352f.firebaseapp.com",
  projectId: "lamadmin-3352f",
  storageBucket: "lamadmin-3352f.appspot.com",
  messagingSenderId: "512337186686",
  appId: "1:512337186686:web:5b7293a4ed1c5b9bc72d2f",
  measurementId: "G-XVV378JRXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();

export function createUser(email,password) {
  return createUserWithEmailAndPassword(auth,email,password)
} 

export function signInUser(email,password) {
  return signInWithEmailAndPassword(auth,email,password)
}


function CheckOut({children}) {
  let [token,setToken] = useState('');
  let navigate = useNavigate();
  const {dispatch} = useContext(AuthDB);

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            console.log(user);
            if(!user) {
              navigate('/login')
              dispatch({type:'Login',payload:user.accessToken})
            } else {
              setToken(user.accessToken);
            }
        })
    },[])

  return (
    <div>{children}</div>
  )
}

export default CheckOut