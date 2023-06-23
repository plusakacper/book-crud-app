import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MainTemplate from '../MainTemplate';
import { useContext, useEffect, useState } from 'react';
import { AuthorsContext } from './AuthorsProvider';
import { useNavigate, useParams } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const AuthorEditForm = () => {
	const today = new Date().toISOString().slice(0, 10);
	const { findedAuthor, isLoading, fetchAuthorById, updateAuthor } = useContext(AuthorsContext);
	const [formState, setFormState] = useState({
		firstName: '',
		surname: '',
		birthdate: today
	});
	const [validated, setValidated] = useState(false);
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		fetchAuthorById(id);
	}, []);

	useEffect(() => {
		if (findedAuthor) {
			setFormState(findedAuthor);
		}
	}, [findedAuthor]);

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
			updateAuthor(formState);
			navigate('/authors');
		}
	};

	return (
		<MainTemplate>
			{isLoading && !findedAuthor ? (
				<Spinner animation='border' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</Spinner>
			) : (
				<Form noValidate validated={validated} onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='firstName'>
						<Form.Label>First name</Form.Label>
						<Form.Control
							required
							type='text'
							name='firstName'
							placeholder='Enter first name'
							value={formState.firstName}
							onChange={e => handleFormChange(e)}
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						<Form.Control.Feedback type='invalid'>Please provide a valid first name!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className='mb-3' controlId='surname'>
						<Form.Label>Surname</Form.Label>
						<Form.Control
							required
							type='text'
							name='surname'
							placeholder='Enter surname'
							value={formState.surname}
							onChange={e => handleFormChange(e)}
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						<Form.Control.Feedback type='invalid'>Please provide a valid surname!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className='mb-3' controlId='birthdate'>
						<Form.Label>Birthdate</Form.Label>
						<Form.Control
							required
							type='date'
							max={today}
							name='birthdate'
							placeholder='Enter surname'
							value={formState.birthdate}
							onChange={e => handleFormChange(e)}
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
						<Form.Control.Feedback type='invalid'>Please provide a valid date!</Form.Control.Feedback>
					</Form.Group>

					<Button type='submit'>Submit form</Button>
				</Form>
			)}
		</MainTemplate>
	);
};
export default AuthorEditForm;
