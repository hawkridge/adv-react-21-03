import firebase from 'firebase/app'

export const appName = 'adv-react-21-03'

const config = {
  apiKey: 'AIzaSyCj-E59IlLpTfHFqrNl4DREvpwD5bq8fmM',
  authDomain: 'adv-react-21-03.firebaseapp.com',
  databaseURL: 'https://adv-react-21-03.firebaseio.com',
  projectId: 'adv-react-21-03',
  storageBucket: '',
  messagingSenderId: '679222747585'
}

firebase.initializeApp(config)
