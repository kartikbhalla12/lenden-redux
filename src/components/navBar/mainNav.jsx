import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action as toggleMenu } from 'redux-burger-menu';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav, Image, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faHeart,
	faShoppingCart,
	faSearch,
} from '@fortawesome/free-solid-svg-icons';

const MainNav = props => {
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.user);

	return (
		<div>
			<Navbar variant='dark' className='mainNav'>
				<Navbar.Brand
					onClick={() => dispatch(toggleMenu(true))}
					style={{ cursor: 'pointer' }}>
					<FontAwesomeIcon icon={faBars} />
				</Navbar.Brand>
				<Image
					onClick={() => props.history.push('/')}
					id='logo'
					src='/images/navLogo.png'
				/>
				<Nav className='ml-auto' id='navSearchBox'>
					<FontAwesomeIcon id='navSearchIcon' icon={faSearch} />
					<Form.Control
						id='navSearchInput'
						type='text'
						placeholder='Search for products'
					/>
				</Nav>
				<Nav className='ml-auto'>
					<Nav.Link>
						<FontAwesomeIcon
							id='mainNavHeart'
							className='navIcon'
							icon={faHeart}
						/>
					</Nav.Link>
					<Nav.Link>
						<FontAwesomeIcon className='navIcon' icon={faShoppingCart} />
					</Nav.Link>
					<Nav.Link
						id='userImage'
						// onClick={this.props.onUserClick}
					>
						<Image
							style={{
								maxWidth: 42,
							}}
							src={
								user.userId
									? 'https://placekitten.com/g/300/300'
									: '/images/genericUser.png'
							}
							roundedCircle
						/>
					</Nav.Link>
				</Nav>
			</Navbar>
			<div id='mobileSearchBox'>
				<div className='ml-auto' id='mobileSearchBoxItem'>
					<FontAwesomeIcon id='mobileSearchIcon' icon={faSearch} />
					<Form.Control
						id='mobileSearchInput'
						type='text'
						placeholder='Search for products'
					/>
				</div>
			</div>
		</div>
	);
};

export default withRouter(MainNav);
