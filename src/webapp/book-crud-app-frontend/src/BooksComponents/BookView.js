import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BooksContext } from './BooksProvider';

const BookView = ({ book }) => {
	const { setLoading, removeBook } = useContext(BooksContext);
	const navigate = useNavigate();

	return (
		<Card style={{ width: '18rem', textAlign: 'center' }}>
			<Card.Img
				variant='top'
				src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
			/>
			<Card.Body>
				<Card.Title>{book.title}</Card.Title>
				<Card.Text>Author: {`${book.authorFirstName} ${book.authorSurname}`}</Card.Text>
				<Card.Text>Category: {`${book.category}`}</Card.Text>
				<Button
					variant='primary'
					onClick={() => {
						setLoading();
						navigate(`/books/edit/${book.id}`);
					}}>
					Edit
				</Button>
				<Button
					variant='danger'
					onClick={() => {
						setLoading();
						removeBook(book.id);
						navigate('/');
					}}>
					Remove
				</Button>
			</Card.Body>
		</Card>
	);
};

export default BookView;
