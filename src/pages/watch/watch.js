import React from "react";
import "./watch.css";
import Videovertical from "../../components/videovertical/videovertical";
import {
	useGetHomeVideosQuery,
	useGetVideoByIdQuery,
} from "../../services/post";
import Videometadata from "../../components/videometadata/videometadata";
import { useParams } from "react-router-dom";
import Error from "../../components/404page/error";
import Videometadataskeleton from "../../components/videometadataskeleton/videometadataskeleton";
import Skeleton from "react-loading-skeleton";

const Watch = () => {
	const { id } = useParams();

	const videoDetails = useGetVideoByIdQuery(id);

	const videos = useGetHomeVideosQuery();

	if (videos.isError) return <Error />;

	if (videoDetails.isError) return <Error />;

	return (
		<div className="watch-screen">
			<div className="watch-screen-left">
				<div className="watch-screen-video-player">
				<iframe
						src={`https://www.youtube.com/embed/${id}`}
						frameBorder={0}
						allowFullScreen
						autoPlay={1}
						mute={1}
						width="100%"
						height="100%"
					></iframe>
				</div>
				{!videoDetails.isFetching ? <Videometadata videoDetails={videoDetails} /> : <Videometadataskeleton/>}
			</div>

			<div className="watch-screen-right">
				{ !videos.isFetching ? videos.data.items.map((ele, index) => (
					<Videovertical video={ele} key={index} />
				)) : <Skeleton baseColor='rgb(60, 60, 60)' highlightColor='rgb(233, 233, 233)' width="100%" height="100vh" />}
			</div>
		</div>
	);
};

export default Watch;
