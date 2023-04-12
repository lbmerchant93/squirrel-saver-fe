import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAFA98anx3pHV_EEhuY_molR_8FCxJWXx4",
    authDomain: "squirrel-saver.firebaseapp.com",
    projectId: "squirrel-saver",
    storageBucket: "squirrel-saver.appspot.com",
    messagingSenderId: "246137505859",
    appId: "1:246137505859:web:5c50c5f5842a160cb2acf6",
    measurementId: "G-YTERKFKLE6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);