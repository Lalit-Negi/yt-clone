import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../../redux/reducers/authreducer";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
	const got_accessToken = useSelector((state) => state.auth.accessToken);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const logOut = () => {
		dispatch(LOGOUT());		
		sessionStorage.removeItem("user-accesstoken");
		sessionStorage.removeItem("user-profile");
// 		navigate("/auth");
	};

	const goHome = () => {
		navigate("/");
		setToggleSidebar(false);
	};

	return (
		<aside className={toggleSidebar ? "app-sidebar" : "unactive"}>
			<div className="flex" onClick={goHome}>
				<div>
					<i className="bx s-icon bxs-home"></i>
				</div>
				<p>home</p>
			</div>

			<div className="flex">
				<div>
					<i className="bx s-icon bxl-internet-explorer"></i>
				</div>
				<p>explore</p>
			</div>

			<div className="flex">
				<div>
					<i className="bx s-icon bxs-videos"></i>
				</div>
				<p>subsription</p>
			</div>

			<hr />

			<div className="flex">
				<div>
					<i className="bx s-icon bx-library"></i>
				</div>
				<p>library</p>
			</div>

			<div className="flex">
				<div>
					<i className="bx s-icon bx-history"></i>
				</div>
				<p>history</p>
			</div>

			<div className="flex">
				<div>
					<i className="bx s-icon bxs-video-recording"></i>
				</div>
				<p>your videos</p>
			</div>

			<div className="flex">
				<div>
					<i className="bx s-icon bxs-watch"></i>
				</div>
				<p>watch later</p>
			</div>

			<hr />

			<div className="flex">
				<div>
					<i className="bx s-icon bxs-doughnut-chart"></i>
				</div>
				<p>setting</p>
			</div>

			<div className="flex">
				<div>
					<i className="bx s-icon bxs-edit-alt"></i>
				</div>
				<p>feedback</p>
			</div>

			<hr />

			<div className="flex" onClick={logOut}>
				<div>
					<i className="bx s-icon bx-log-out"></i>
				</div>
				<p>log out</p>
			</div>

			
		</aside>
	);
};

export default Sidebar;
