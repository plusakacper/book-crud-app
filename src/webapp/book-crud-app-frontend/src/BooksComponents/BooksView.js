import { useContext, useEffect } from 'react';
import MainTemplate from '../MainTemplate';
import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BooksContext } from './BooksProvider';
import BooksTable from './BooksTable';

const BooksView = () => {
	const { books, isLoading, fetchBooks } = useContext(BooksContext);
	const navigate = useNavigate();

	useEffect(() => {
		fetchBooks();
	}, [isLoading]);

	return (
		<MainTemplate>
			{isLoading ? (
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			) : (
				<>
					<Button variant='success' onClick={() => navigate('/books/add')}>
						Add new book
					</Button>
					<BooksTable books={books} />
				</>
			)}
		</MainTemplate>
	);
};

export default BooksView;
