import React, { useEffect, useState } from "react";
import "./video.css";
import numeral from "numeral";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const Video = ({ video, key }) => {
	const [icon, setIcon] = useState();

	const videoThumbnail = video.snippet.thumbnails.medium.url;
	const videoTitle = video.snippet.title;
	const videoViews = numeral(video.statistics.viewCount)
		.format("0.a")
		.toUpperCase();
	const videoPublishAt = moment(video.snippet.publishedAt).fromNow();
	const channelName = video.snippet.channelTitle;
	const videoId = video.id;

	useEffect(async () => {
		let data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyDTWmFKQ2jdZPPTZ2lIKEzEhpHJYvVe6G8`);
		data = await data.json();
		let icon = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${data.items[0].snippet.channelId}&key=AIzaSyDTWmFKQ2jdZPPTZ2lIKEzEhpHJYvVe6G8`);
		icon = await icon.json();
		setIcon(icon.items[0].snippet.thumbnails.high.url);
	}, []);

	const navigate = useNavigate();
	const playVideo = () => {
		navigate(`/watch/${videoId}`);
	};

	return (
		<div className="video-card-container">
			<div className="video-card" onClick={playVideo}>
				<div className="video-image">
					<img src={videoThumbnail} alt="" />
				</div>
				<div className="video-title">
					<p>{videoTitle}</p>
				</div>
				<div className="video-detail">
					<p>{`${videoViews} views`} </p>
					<p> - {videoPublishAt}</p>
				</div>
				<div className="video-channel-logo">
					<img src={icon} alt="" />
					<p>{channelName}</p>
				</div>
			</div>
		</div>
	);
};

export default Video;
