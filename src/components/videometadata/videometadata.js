import React from 'react';
import { useGetChannelIconQuery } from '../../services/post';
import "./videometadata.css";
import Loader from '../loader/loader';
import numeral from 'numeral';


const Videometadata = ({videoDetails}) => {
    
    const channelId = videoDetails.data.items[0].snippet.channelId;
    
    const getChannelIcon = useGetChannelIconQuery(channelId);
 
    if (getChannelIcon.isFetching) return <Loader />;
	if (getChannelIcon.isError) return <Loader />;   

    const videoTitle = videoDetails.data.items[0].snippet.title;
    const channelName = videoDetails.data.items[0].snippet.channelTitle;
    const channelIcon = getChannelIcon.data.items[0].snippet.thumbnails.high.url;
    const videoDescription = videoDetails.data.items[0].snippet.description;
    const videoLikes = numeral(videoDetails.data.items[0].statistics.likeCount).format("0.a").toUpperCase();
 
  return (
    <div className="videometadata">
    <div className="videometadata-detail">
        <p className='videometadata-video-tags'>#youtube#google#facebook#twiter</p>
        <p className='videometadata-video-title'>{videoTitle}</p>
    </div>
    <div className='videometadata-container'>
    <div className="videometadata-left">
        <img src={channelIcon} alt="" />
        <div className="videometadata-channel-detail">
            <p>{channelName}</p>
            <p className="videometadata-subscribers">781k suscribers</p>
        </div>
    </div>
    <div className="videometadata-right">
        <button>suscribe</button>
        <i className='bx bxs-bell-ring vmdi'></i>
    </div>
    </div>
    <div className="videometadata-actions">
    <i class='bx bx-like'><p>{videoLikes}</p></i>
    <i class='bx bx-dislike' ><p>Dislike</p></i>
    <i class='bx bxs-share'><p>Share</p></i>
    </div>    
    <div className='videometadata-description'>
        <p>{`Description : ${videoDescription}`}</p>
    </div>
</div>	
  )
}

export default Videometadata
