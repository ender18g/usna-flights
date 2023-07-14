import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
	apiKey: 'AIzaSyBcb-nOooeT-Bbq97R6fkfNwdNEwCk1VXQ',
	authDomain: 'usna-uas.firebaseapp.com',
	projectId: 'usna-uas',
	storageBucket: 'usna-uas.appspot.com',
	messagingSenderId: '54201480580',
	appId: '1:54201480580:web:ff1411f8c7ce16be8e59d1',
	measurementId: 'G-0DP3X7GJNY'
};

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<BrowserRouter>
				<ChakraProvider>
					<App />
				</ChakraProvider>
			</BrowserRouter>
		</FirebaseAppProvider>
	</React.StrictMode>
);
