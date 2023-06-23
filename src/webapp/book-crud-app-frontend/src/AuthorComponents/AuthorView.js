import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { AuthorsContext } from './AuthorsProvider';
import { useNavigate } from 'react-router-dom';

const AuthorView = ({ author }) => {
	const { setLoading, removeAuthor } = useContext(AuthorsContext);
	const navigate = useNavigate();

	return (
		<Card style={{ width: '18rem', textAlign: 'center' }}>
			<Card.Img
				variant='top'
				src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
			/>
			<Card.Body>
				<Card.Title>{`${author.firstName} ${author.surname}`}</Card.Title>
				<Card.Text>Date of birth: {author.birthdate}</Card.Text>
				<Button
					variant='primary'
					onClick={() => {
						setLoading();
						navigate(`/authors/edit/${author.id}`);
					}}>
					Edit
				</Button>
				<Button
					variant='danger'
					onClick={() => {
						setLoading();
						removeAuthor(author.id);
						navigate('/authors');
					}}>
					Remove
				</Button>
			</Card.Body>
		</Card>
	);
};

export default AuthorView;
