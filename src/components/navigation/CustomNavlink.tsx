import React from 'react';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom'

interface CustomNavLinkProps extends NavLinkProps {
	to: string;
	children: React.ReactNode;
	customClass?: string;
	onClick?: () => void;
}

const CustomNavlink: React.FC<CustomNavLinkProps> = ({ to, children, customClass, onClick }) => {
	const location = useLocation();

	// Check if the current hash matches the `to` value
	const isActive = location.hash === to;

	return (
		<NavLink to={to} onClick={onClick} className={`relative font-medium transition-all duration-700 ease-in-out hover:text-active ${isActive ? "text-active scale-110 font-bold" : "text-inherit"} ${customClass}`}>
			<span>
				{isActive && <p className='inline mr-1'>&lt;</p>}
				{children}
				{isActive && <p className='inline ml-1'>&gt;</p>}
			</span>
		</NavLink>
	);
};

export default CustomNavlink