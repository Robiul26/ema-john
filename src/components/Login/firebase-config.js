
import { initializeApp  } from 'firebase/app';
import { getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBYomyMFDg34EXlao0HwV-rykkTZM2ONSI",
    authDomain: "fir-auth-practice-c18d3.firebaseapp.com",
    projectId: "fir-auth-practice-c18d3",
    storageBucket: "fir-auth-practice-c18d3.appspot.com",
    messagingSenderId: "802075804257",
    appId: "1:802075804257:web:1035e86d9d2960b6856020"
  };


  const app = initializeApp(firebaseConfig);
  
  export const auth =  getAuth(app);