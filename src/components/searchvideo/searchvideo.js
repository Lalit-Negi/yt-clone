import React from 'react';
import "./searchvideo.css";
import { useNavigate } from 'react-router-dom';

const Searchvideo = ({video,key}) => {

    const videoThumbnail = video.snippet.thumbnails.medium.url;
	const videoTitle = video.snippet.title;
	const channelName = video.snippet.channelTitle;
	const videoDescription = video.snippet.description;
	const {videoId} = video.id;

	const navigate = useNavigate();

	const playVideo = () => {		
		navigate(`/watch/${videoId}`)		
	};
	
  return (
    <div className="video-search-card" onClick={playVideo}>
			<img src={videoThumbnail} alt="" />
			<div className="video-search-detail">
				<p className="video-search-videotitle">{videoTitle}</p>
				<p className="video-search-channelname">{channelName}</p>
				<p className='video-search-description'>{videoDescription}</p>				
			</div>
		</div>
  )
}

export default Searchvideo
