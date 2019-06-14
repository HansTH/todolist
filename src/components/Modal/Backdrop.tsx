import React from 'react';
import './modal.css';

interface IProps {
	isOpen: Boolean;
	toogleOpen: () => void;
}

const Backdrop = (props: IProps) => {
	const { isOpen, toogleOpen } = props;
	return (
		<div
			onClick={toogleOpen}
			className={isOpen ? 'is-open backdrop' : 'backdrop'}
		/>
	);
};

export default Backdrop;
