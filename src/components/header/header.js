import React , { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";


const Header = ({ setToggleSidebar }) => {

	const [query, setQuery] = useState(null);
	const navigate = useNavigate();

	const openSidebar = () => {
		setToggleSidebar((value) => !value);
	};  

	let user_pic;
	try {
		const user = JSON.parse(sessionStorage.getItem("user-profile"));		
		user_pic = user.photo;
	} catch (error) {
		console.warn("user data not found");
		sessionStorage.removeItem("user-accesstoken");
		sessionStorage.removeItem("user-profile");
// 		navigate("/auth");
	}

	const search = (event) => {
		event.preventDefault();
		const keyword = event.target.value;	
		setQuery(keyword)	
	};

	const searchHandler = () => {		
		navigate(`/search/${query}`)			
	}
	
	return (
		<header className="app-header flex">
			<div className="logo flex">
				<i
					className="bx  h-icon bx-menu-alt-left menu "
					onClick={openSidebar}
				></i>
				<i className="bx  h-icon bxl-youtube youtube" onClick={()=> navigate("/")}></i>
				<p>YouTube</p>
			</div>
			<form className="search-bar flex">
				<input type="text" placeholder="search" onChange={search}/>
				<button className="btn flex" onClick={searchHandler}>
					<i className="bx  h-icon  bx-search search"></i>
				</button>
			</form>
			<div className="features flex">
				<i className="bx  h-icon  bxs-video-plus video"></i>
				<i className="bx  h-icon  bxs-grid grid"></i>
				<i className="bx  h-icon  bxs-bell bell"></i>
// 				<img src={user_pic} alt="#" className="user-image" />
			</div>
		</header>
	);
};

export default Header;
