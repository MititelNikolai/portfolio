import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai'
//import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { MdOutlineWorkOutline } from 'react-icons/md'
import './nav.css'
import { useState } from 'react'
const Nav = () => {
	const [activNav, setActiveNav] = useState('#home')
	return (
		<nav>
			<a
				href='#home'
				onClick={() => setActiveNav('#home')}
				className={activNav === '#home' ? 'active' : ''}
			>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav('#about')}
				className={activNav === '#about' ? 'active' : ''}
			>
				<AiOutlineUser />
			</a>
			<a
				href='#experience'
				onClick={() => setActiveNav('#experience')}
				className={activNav === '#experience' ? 'active' : ''}
			>
				<AiOutlineBook />
			</a>
			{
				<a
					href='#portfolio'
					onClick={() => setActiveNav('#portfolio')}
					className={activNav === '#portfolio' ? 'active' : ''}
				>
					<MdOutlineWorkOutline />
				</a>
			}
			<a
				href='#contact'
				onClick={() => setActiveNav('#contact')}
				className={activNav === '#contact' ? 'active' : ''}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	)
}

export default Nav
