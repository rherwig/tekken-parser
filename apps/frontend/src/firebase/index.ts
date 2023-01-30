import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    doc,
    getDoc,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBq8FS24z18hDhKW6r51nYRCFVqhhPS-a0',
    authDomain: 'tekken-ae8ac.firebaseapp.com',
    projectId: 'tekken-ae8ac',
    storageBucket: 'tekken-ae8ac.appspot.com',
    messagingSenderId: '709596426327',
    appId: '1:709596426327:web:ea04f95901d9dbfeff3312',
};

export const useFirestore = () => {
    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);

    const findAll = async (name: string) => {
        const ref = collection(db, name);

        return getDocs(ref);
    };

    const findOne = async (collectionName: string, documentId: string) => {
        const ref = doc(db, collectionName, documentId);

        return getDoc(ref);
    };

    return {
        auth,
        firebaseApp,
        db,
        findAll,
        findOne,
    };
};