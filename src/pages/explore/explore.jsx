import React from "react";
import Explore_item from "../../components/explore-item/eplore-item";
import "./explore.css";

const Explore = () => {
	return (
		<div className="explore-screen">
			<div className="explore-items">
				<Explore_item />
			</div>
		</div>
	);
};

export default Explore;
