import { Container } from 'react-bootstrap';
import AppNavbar from './AppNavbar';

const MainTemplate = ({ children }) => (
	<Container>
		<AppNavbar />
		<div className='wrapper'>{children}</div>
	</Container>
);

export default MainTemplate;
