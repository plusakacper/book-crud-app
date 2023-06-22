import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const AppNavbar = () => {
	const navigate = useNavigate();

	return (
		<Navbar expand='lg' bg='primary' data-bs-theme='dark'>
			<Container>
				<Navbar.Brand>Book APP</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link onClick={() => navigate('/')}>Books</Nav.Link>
						<Nav.Link onClick={() => navigate('/authors')}>Authors</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavbar;
