import { UserDataProvider } from '@src/Providers/UserData';
import Container from './components/Container';

export const DashBoard = () => (
	<UserDataProvider>
		<Container />
	</UserDataProvider>
);
