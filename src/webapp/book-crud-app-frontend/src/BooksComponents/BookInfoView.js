import { useContext, useEffect } from 'react';
import MainTemplate from '../MainTemplate';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import { BooksContext } from './BooksProvider';
import BookView from './BookView';

const BookInfoView = () => {
	const { findedBook, isLoading, fetchBookById } = useContext(BooksContext);
	const { id } = useParams();

	useEffect(() => {
		fetchBookById(id);
	}, []);

	return (
		<MainTemplate>
			{isLoading && !findedBook ? (
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			) : (
				<BookView book={findedBook} />
			)}
		</MainTemplate>
	);
};

export default BookInfoView;
