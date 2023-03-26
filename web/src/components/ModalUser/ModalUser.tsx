import { useUserData } from '@src/Providers/UserData/useUserData';
import { useEffect } from 'react';
import GeneralData from './components/GeneralData';
import LineGraph from './components/LineGraph';
import { ContainerStyled } from './styled';

export const ModalUser = () => {
	const { handleSwitchModal, handleChangeUserData, user } = useUserData();

	const handleCloseModal = () => {
		handleChangeUserData(null);

		handleSwitchModal();
	};

	const getHistoric = async () => {
		// get historic about feeling
	};

	useEffect(() => {
		getHistoric()
	}, [])

	return (
		<ContainerStyled className="modal is-text" role="dialog">
			<div className="modal-background" />
			<div className="modal-card">
				<header className="modal-card-head">
					<span className="modal-card-title">{user?.name}</span>
					<button
						className="delete is-medium"
						aria-label="close"
						onClick={handleCloseModal}
					/>
				</header>
				<section className="modal-card-body">
					<GeneralData
						name={user?.name ?? ''}
						status={user?.status ?? ''}
						feeling={user?.sentiment ?? ''}
					/>

					<LineGraph />
				</section>
				<footer className="modal-card-foot is-centered">
					<button className="button is-primary" onClick={handleCloseModal}>
						Fechar
					</button>
				</footer>
			</div>
		</ContainerStyled>
	);
};
