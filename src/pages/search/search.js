import React from "react";
import "./search.css";
import Loader from "../../components/loader/loader";
import {useGetVideoByKeywordQuery} from "../../services/post"
import Searchvideo from "../../components/searchvideo/searchvideo";
import { useParams } from "react-router-dom";
import Error from "../../components/404page/error";

const Search = () => {    
	const {query} = useParams()
	
	const searchedVideo = useGetVideoByKeywordQuery(query)

	if(searchedVideo.isFetching) return <Loader/>;
	if(searchedVideo.isError) return <Error/>;

	return (
		<>
		<div className="search-container">
		<p className="search-tag">searched results ...</p>
			{searchedVideo.data.items.map((ele,index) => <Searchvideo video={ele} key={index}/>)}
			</div>
		</>	
	);
};

export default Search;
