import { Container } from 'react-bootstrap';
import AppNavbar from './AppNavbar';

const MainTemplate = ({ children }) => (
	<Container>
		<AppNavbar />
		{children}
	</Container>
);

export default MainTemplate;
