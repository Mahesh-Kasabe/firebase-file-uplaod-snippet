import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
      apiKey: "AIzaSyDVnqlCzvQf5gHSrpHwymRVHkC2mbGHdwI",
      authDomain: "crud-62abb.firebaseapp.com",
      projectId: "crud-62abb",
      storageBucket: "crud-62abb.appspot.com",
      messagingSenderId: "383048689000",
      appId: "1:383048689000:web:1aa91d56911426be6722dd",
      measurementId: "G-G54ZRLZ51B"
    };
    
    // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
 