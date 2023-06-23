import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { AuthorsContext } from './AuthorsProvider';

const AuthorsTable = ({ authors }) => {
	const navigate = useNavigate();
	const { setLoading, removeAuthor } = useContext(AuthorsContext);

	return (
		<>
			<Table striped>
				<thead>
					<tr>
						<th>ID</th>
						<th>First Name</th>
						<th>Surname</th>
						<th>Birthdate</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{authors.map(author => (
						<tr key={author.id}>
							<td>{author.id}</td>
							<td>{author.firstName}</td>
							<td>{author.surname}</td>
							<td>{author.birthdate}</td>
							<td>
								<Button
									variant='info'
									onClick={() => {
										setLoading();
										navigate(`${author.id}`);
									}}>
									Info
								</Button>
								<Button
									variant='primary'
									onClick={() => {
										setLoading();
										navigate(`edit/${author.id}`);
									}}>
									Edit
								</Button>
								<Button
									variant='danger'
									onClick={() => {
										setLoading();
										removeAuthor(author.id);
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

export default AuthorsTable;
