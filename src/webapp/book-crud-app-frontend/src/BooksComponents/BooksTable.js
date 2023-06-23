import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { BooksContext } from './BooksProvider';

const BooksTable = ({ books }) => {
	const navigate = useNavigate();
	const { setLoading, removeBook } = useContext(BooksContext);

	return (
		<>
			<Table striped>
				<thead>
					<tr>
						<th>ID</th>
						<th>Title</th>
						<th>Category</th>
						<th>Author</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{books.map(book => (
						<tr key={book.id}>
							<td>{book.id}</td>
							<td>{book.title}</td>
							<td>{book.category}</td>
							<td>{`${book.authorFirstName} ${book.authorSurname}`}</td>
							<td>
								<Button
									variant='info'
									onClick={() => {
										setLoading();
										navigate(`/books/${book.id}`);
									}}>
									Info
								</Button>
								<Button
									variant='primary'
									onClick={() => {
										setLoading();
										navigate(`books/edit/${book.id}`);
									}}>
									Edit
								</Button>
								<Button
									variant='danger'
									onClick={() => {
										setLoading();
										removeBook(book.id);
									}}>
									Remove
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default BooksTable;
