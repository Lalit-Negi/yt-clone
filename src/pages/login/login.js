import React, { useEffect } from "react";
import "./login.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../../redux/reducers/authreducer";
import { useNavigate } from "react-router-dom";
import Error from "../../components/404page/error"

const Login = () => {
	const dispatch = useDispatch();

	const logIn = async () => {
		try {
			const provider = new GoogleAuthProvider();
			const resp = await signInWithPopup(authentication, provider);


			const accessToken = resp.user.accessToken;
			const profile = {
				name: resp.user.displayName,
				photo: resp.user.photoURL,
			};

					dispatch(LOGIN({ accessToken, profile }));

			sessionStorage.setItem("user-accesstoken", accessToken);
			sessionStorage.setItem("user-profile", JSON.stringify(profile));

		} catch (error) {
			console.log(error.message);
		}
	};

	const got_accessToken = useSelector((state) => state.auth.accessToken);
	const navigate = useNavigate();

	useEffect(() => {
		if (got_accessToken) {
			navigate("/");
		}
	}, [got_accessToken,navigate]);

	return (
		<div className="login-page">
		<div className="login-container">
		    <p className="youtube-tag">Youtube</p>
			<i className="bx bxl-youtube yt"></i>
			<button type="submit" onClick={logIn}>
				login with google
			</button>
			<p>Note : This website is made by me , using youtube data api ..</p>
		</div>
		</div>
	);
};

export default Login;
