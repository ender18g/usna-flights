import { Image, Text, Flex, Heading, Button } from '@chakra-ui/react';
import { LoginButton } from './loginButton.jsx';
import Splash from './splash.jsx';
import BigCalendar from './calendar.jsx';
import RequestForm from './requestForm.jsx';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import './index.css';
import crest from './assets/crest.png';
import { HamburgerIcon } from '@chakra-ui/icons';
import { AuthProvider, useFirebaseApp } from 'reactfire';

import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { getAuth } from 'firebase/auth';

export default function App() {
	const firebaseapp = useFirebaseApp();
	const auth = getAuth(firebaseapp);


	return (
		<Routes>
			<Route path="/" element={<MenuBar />}>
        <Route index element={<Splash />} />
				<Route path="calendar" element={<BigCalendar />} />
				<Route path="request" element={<RequestForm />} />
				<Route path="login" element={<Splash />} />
				<Route path="*" element={<Splash />} />
			</Route>
		</Routes>
	);
}

function MenuBar() {
	return (
		<Flex flexWrap={'wrap'}>
			<AuthProvider sdk={getAuth(useFirebaseApp())}>
				<Flex w={'100vw'} bg={'blue.600'} justify={'space-between'} align={'center'} p={3} boxShadow={'lg'}>
					<Flex align={'center'}>
						<Image src={crest} alt={'USNA Crest'} w={30} dropShadow={'lg'} mr={5} />
						<Heading size={'lg'} color={'gray.100'} letterSpacing={3} fontWeight={100}>
							USNA Flights
						</Heading>
					</Flex>

					<Flex align={'center'} justifySelf={'flex-end'}>
						<LoginButton />
						{/* This is the hamburger menu */}
						<Menu>
							<MenuButton colorScheme="none" as={Button}>
								<HamburgerIcon />
							</MenuButton>
							<MenuList>
								<Link to="/calendar">
									<MenuItem>Calendar</MenuItem>
								</Link>

								<Link to="/request">
									<MenuItem>Flight Request</MenuItem>
								</Link>
							</MenuList>
						</Menu>
						{/* Done with the hanburger menu */}
					</Flex>
				</Flex>
				<Outlet />
			</AuthProvider>
		</Flex>
	);
}
