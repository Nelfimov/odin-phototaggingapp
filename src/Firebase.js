import {initializeApp} from 'firebase/app';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCW9R88ju_4olf-drY2O072bKP5lTbsUhc',
  authDomain: 'odin-phototaggingapp.firebaseapp.com',
  projectId: 'odin-phototaggingapp',
  storageBucket: 'odin-phototaggingapp.appspot.com',
  messagingSenderId: '497603497944',
  appId: '1:497603497944:web:c31dc10965f6de4bcd2cad',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db, app};
