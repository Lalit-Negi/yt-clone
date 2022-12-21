import React from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";

const Categories = ({key,ele}) => {
	const navigate = useNavigate();

	const search = (e) => {
		e.preventDefault();
		navigate(`/search/${e.target.innerHTML}`);
	};
	return (
		<div className="category" onClick={search}>		
			{ele}
		</div>
	);
};

export default Categories;
