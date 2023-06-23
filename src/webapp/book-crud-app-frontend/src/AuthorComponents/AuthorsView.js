import { useContext, useEffect } from 'react';
import MainTemplate from '../MainTemplate';
import { AuthorsContext } from './AuthorsProvider';
import Spinner from 'react-bootstrap/Spinner';
import AuthorsTable from './AuthorsTable';
import { Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const AuthorsView = () => {
	const { authors, isLoading, fetchAuthors, error } = useContext(AuthorsContext);
	const navigate = useNavigate();

	useEffect(() => {
		fetchAuthors();
	}, [isLoading]);

	return (
		<MainTemplate>
			{isLoading ? (
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			) : (
				<>
					<Button variant='success' onClick={() => navigate('add')}>
						Add new author
					</Button>
					<AuthorsTable authors={authors} />
				</>
			)}
			{error && <Alert variant='danger'>{error}</Alert>}
		</MainTemplate>
	);
};

export default AuthorsView;
