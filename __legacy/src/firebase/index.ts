import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBq8FS24z18hDhKW6r51nYRCFVqhhPS-a0',
    authDomain: 'tekken-ae8ac.firebaseapp.com',
    projectId: 'tekken-ae8ac',
    storageBucket: 'tekken-ae8ac.appspot.com',
    messagingSenderId: '709596426327',
    appId: '1:709596426327:web:ea04f95901d9dbfeff3312',
};

const CHARACTERS_COLLECTION_NAME = 'fighters';
const COMBOS_COLLECTION_NAME = 'combos';

export const useFirestoreHelper = () => {
    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);

    const charactersCollection = collection(db, CHARACTERS_COLLECTION_NAME);
    const combosCollection = collection(db, COMBOS_COLLECTION_NAME);
    const characterDocument = (id: string) =>
        doc(db, CHARACTERS_COLLECTION_NAME, id);
    const comboDocument = (id: string) => doc(db, COMBOS_COLLECTION_NAME, id);

    return {
        firebaseApp,
        charactersCollection,
        characterDocument,
        combosCollection,
        comboDocument,
    };
};
