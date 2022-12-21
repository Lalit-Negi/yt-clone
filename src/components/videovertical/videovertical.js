import React from "react";
import "./videovertical.css";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";

function Videovertical({ video, key }) {
	const videoThumbnail = video.snippet.thumbnails.medium.url;
	const videoTitle = video.snippet.title;
	const videoViews = numeral(video.statistics.viewCount).format("0.a").toUpperCase();
	const channelName = video.snippet.channelTitle;
	const videoId = video.id;

	const navigate = useNavigate();

	const playVideo = () => {		
		navigate(`/watch/${videoId}`)		
	};

	return (
		<div className="videovertical-card" onClick={playVideo}>
			<img src={videoThumbnail} alt="" />
			<div className="videovertical-detail">
				<p className="videovertical-videotitle">{videoTitle}</p>
				<p className="videovertical-channelname">{channelName}</p>
				<p className="videovertical-videoviews">{`${videoViews} views`}</p>
			</div>
		</div>
	);
}

export default Videovertical;
