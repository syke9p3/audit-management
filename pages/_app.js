import '../styles/globals.scss'

import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../utils/firebase'

import NextNProgress from 'nextjs-progressbar';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
	<div>
		<Layout>
			<NextNProgress color="red"/>
			<Component {...pageProps} />
		</Layout>
	</div>
  )
}

export default MyApp
