import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MainTemplate from '../MainTemplate';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BooksContext } from './BooksProvider';
import { AuthorsContext } from '../AuthorComponents/AuthorsProvider';
import { Spinner } from 'react-bootstrap';

const BookAddForm = () => {
	const { addBook } = useContext(BooksContext);
	const { authors, fetchAuthors, isLoading } = useContext(AuthorsContext);
	const [formState, setFormState] = useState({
		title: '',
		description: '',
		category: '',
		authorId: 1
	});
	const [validated, setValidated] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		fetchAuthors();
	}, []);

	const handleFormChange = e => {
		let data = { ...formState };
		data[e.target.name] = e.target.value;
		setFormState(data);
	};

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.currentTarget;
		setValidated(true);

		if (form.checkValidity() === true) {
			console.log(formState);
			addBook(formState);
			navigate('/');
		}
	};

	return (
		<MainTemplate>
			{isLoading && !authors ? (
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			) : (
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='title'>
						<Form.Label>Title</Form.Label>
						<Form.Control
							required
							type='text'
							name='title'
							placeholder='Enter title'
							value={formState.title}
							onChange={e => handleFormChange(e)}
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						<Form.Control.Feedback type='invalid'>Please provide a valid title!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className='mb-3' controlId='description'>
						<Form.Label>Description</Form.Label>
						<Form.Control
							type='text'
							name='description'
							placeholder='Enter description'
							value={formState.description}
							onChange={e => handleFormChange(e)}
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className='mb-3' controlId='category'>
						<Form.Label>Category</Form.Label>
						<Form.Control
							type='text'
							name='category'
							placeholder='Enter category'
							value={formState.category}
							onChange={e => handleFormChange(e)}
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						<Form.Control.Feedback type='invalid'>Please provide a valid category!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className='mb-3' controlId='authorId'>
						<Form.Label>Author</Form.Label>
						<Form.Select
							aria-label='Default select example'
							name='authorId'
							value={formState.authorId}
							onChange={e => handleFormChange(e)}>
							{authors.map(author => (
								<option key={author.id} value={author.id}>{`${author.firstName} ${author.surname}`}</option>
							))}
						</Form.Select>
					</Form.Group>
					<Button type='submit'>Submit form</Button>
				</Form>
			)}
		</MainTemplate>
	);
};
export default BookAddForm;
