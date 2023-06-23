import { useContext, useEffect } from 'react';
import MainTemplate from '../MainTemplate';
import { AuthorsContext } from './AuthorsProvider';
import Spinner from 'react-bootstrap/Spinner';
import AuthorsTable from './AuthorsTable';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const AuthorsView = () => {
	const { authors, isLoading, fetchAuthors } = useContext(AuthorsContext);
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
		</MainTemplate>
	);
};

export default AuthorsView;
