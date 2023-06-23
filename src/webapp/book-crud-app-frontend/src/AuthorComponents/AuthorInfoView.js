import { useContext, useEffect } from 'react';
import MainTemplate from '../MainTemplate';
import { AuthorsContext } from './AuthorsProvider';
import Spinner from 'react-bootstrap/Spinner';
import AuthorView from './AuthorView';
import { useParams } from 'react-router-dom';
const AuthorInfoView = () => {
	const { findedAuthor, isLoading, fetchAuthorById } = useContext(AuthorsContext);
	const { id } = useParams();

	useEffect(() => {
		fetchAuthorById(id);
	}, []);

	return (
		<MainTemplate>
			{isLoading && !findedAuthor ? (
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			) : (
				<AuthorView author={findedAuthor} />
			)}
		</MainTemplate>
	);
};

export default AuthorInfoView;
