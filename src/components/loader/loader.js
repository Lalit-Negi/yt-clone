import React from "react";
import "./_loader.scss";


const Loader = () => {
	return (
		// <div classNameName="loader">
		// 	<div className="preloader">
		// 		<div className="preloader__square"></div>
		// 		<div className="preloader__square"></div>
		// 		<div className="preloader__square"></div>
		// 		<div className="preloader__square"></div>
		// 	</div>
		// </div>

		<div
			className="loader__wrap"
			role="alertdialog"
			aria-busy="true"
			aria-live="polite"
			aria-label="Loading…"
		>
			<div className="loader" aria-hidden="true">
				<div className="loader__sq"></div>
				<div className="loader__sq"></div>
			</div>
		</div>
	);
};

export default Loader;
