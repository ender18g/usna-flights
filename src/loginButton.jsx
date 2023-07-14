import { Flex, Heading, Spinner, Button, Text, Image} from '@chakra-ui/react';
import { useAuth, useSigninCheck } from 'reactfire';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import googleLogo from './assets/google.svg';
const signIn = async (auth) => {
	const provider = new GoogleAuthProvider();

	await signInWithPopup(auth, provider);
};

const signOut = auth => auth.signOut().then(() => console.log('signed out'));


export const AuthWrapper = ({ children }) => {
  const { data: signInCheckResult, status } = useSigninCheck();

  if (status === 'loading') {
    return <Spinner />;
  } else if (signInCheckResult.signedIn === true) {
    return <>{children}</>;
  } else {
    return <SignInForm />;
  }
};

const SignInForm = () => {
	const auth = useAuth();
	return (
    <Flex align={'center'} p={0}>
      <Button size={'md'} colorScheme='gray' onClick={() => signIn(auth)} >
       Sign In
      <Image
        // Make mouseover pointer
          maxW={'50px'}
        cursor="pointer"
          src={googleLogo}
          p={0}
        onClick={() => signIn(auth)}
        ></Image>
        </Button>
		</Flex>
	);
};

export function LoginButton() {
  const { data: signInCheckResult, status } = useSigninCheck();
  const auth = useAuth();


	if (status === 'loading') {
		return <Spinner />;
	}

	if (signInCheckResult.signedIn === true) {
		return (
    <Flex align={'center'} p={0}>
      <Button size={'md'} colorScheme='gray' onClick={() => signOut(auth)} >
       Sign Out
      <Image
        // Make mouseover pointer
          maxW={'50px'}
        cursor="pointer"
          src={googleLogo}
          p={0}
        onClick={() => signIn(auth)}
        ></Image>
        </Button>
		</Flex>
		);
	} else {
		return (
			<Flex>
				<SignInForm />
			</Flex>
		);
	}
}
