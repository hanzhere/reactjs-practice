import React, { Suspense } from 'react';
import 'bulma/css/bulma.css'
import './App.css';

import firebase from 'firebase'
import {
	AuthCheck,
	useAuth,
	FirebaseAppProvider,
	SuspenseWithPerf,
	useFirestore,
	useFirestoreCollectionData,
	useUser
} from 'reactfire'

const firebaseConfig = {
	apiKey: "AIzaSyAIzlyyUqV7t7ddQE7ba2oNnnORIkQsSU8",
	authDomain: "game-lobby-59479.firebaseapp.com",
	databaseURL: "https://game-lobby-59479.firebaseio.com",
	projectId: "game-lobby-59479",
	storageBucket: "game-lobby-59479.appspot.com",
	messagingSenderId: "779605288924",
	appId: "1:779605288924:web:066e985d4bc64c1ecd9119",
	measurementId: "G-SVEKNMK9D0"
}

function AuthenticationButtons() {
	const auth = useAuth()

	const signIn = async () => {
		await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
	}

	const signOut = async () => {
		await auth.signOut()
	}

	return (
		<AuthCheck
			fallback={
				<button className="button is-primary" onClick={signIn}>Sign In</button>
			}
		>
			<button className="button is-info" onClick={signOut}>Sign Out</button>
		</AuthCheck>
	)
}

function Lobby() {
	const { email, displayName, uid } = useUser()
	const lobbyCollection = useFirestore().collection('lobby')
	const lobby = useFirestoreCollectionData(lobbyCollection)

	const userInLobby = lobby.find(m => m.email === email)

	const joinLobby = async () => {
		await lobbyCollection.doc(uid).set({ email, displayName, ready: false })
	}

	const leaveLobby = async () => {
		await lobbyCollection.doc(uid).delete()
	}

	const toggleReadiness = async newReadiness => {
		await lobbyCollection.doc(uid).set({ ready: newReadiness }, { merge: true })
	}

	return (
		<div className='container is-fluid'>
			{lobby.map(m => {
				return (
					<article key={m.email} className='tile is-child notification'>
						<p className='title'>
							{m.displayName} - {m.ready ? 'Ready 🎮' : 'Not Ready ❌'}
						</p>
					</article>
				)
			})}
			<div className='columns'>
				{userInLobby && (
					<div className='column is-1'>
						<button className='button is-primary' onClick={() => toggleReadiness(!userInLobby.ready)}>
							{userInLobby.ready ? 'Not Ready!' : 'Ready'}
						</button>
					</div>
				)}
				<div className='column is-1'>
					{userInLobby ? (
						<button className='button is-primary' onClick={leaveLobby}>
							Leave
						</button>
					) : (
							<button className='button is-primary' onClick={joinLobby}>
								Join
							</button>
						)}
				</div>
			</div>
		</div>
	)
}

function NavBar() {
	return (
		<nav className="navbar">
			<div className='navbar-brand'>Game Lobby!</div>
			<div className='navbar-menu'>
				<div className='navbar-start'></div>
				<div className='navbar-end'>
					<div className='navbar-item'>
						<div className='buttons'>
							<AuthenticationButtons />
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

function App() {
	return (
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<SuspenseWithPerf fallback={<p>Loading...</p>} traceId={'load-app-status'}>
				<NavBar />
				<AuthCheck fallback={<p>Not Logged in...</p>}>
					<Lobby />
				</AuthCheck>
			</SuspenseWithPerf>
		</FirebaseAppProvider>
	);
}

export default App;
