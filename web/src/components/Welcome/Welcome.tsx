import { useUserData } from '@src/stores/useUserData';

export const Welcome = () => {
	const { name, age } = useUserData();

	return (
		<div>
			<h1>Hello World</h1>
			<h2>{name}</h2>
			<h3>{age}</h3>
		</div>
	);
};
