import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./videoskeleton.css";

const Videoskeleton = () => {
	return (
		<>
			{" "}
			{Array(16)
				.fill(0)
				.map((ele) => (
					<div className="skeleton-video-card">
						<Skeleton
							baseColor="rgb(60, 60, 60)"
							highlightColor="rgb(233, 233, 233)"
							height="120px"
							width="100%"
						/>
						<Skeleton
							className="skeleton-outer-card"
							baseColor="rgb(60, 60, 60)"
							highlightColor="rgb(233, 233, 233)"
							height="20px"
							width="100%"
						/>
						<div className="skeleton-inner-card">
							<Skeleton
								className="skeleton-video-icon"
								baseColor="rgb(60, 60, 60)"
								highlightColor="rgb(233, 233, 233)"
								height="50px"
								width="50px"
								circle={true}
							/>
							<Skeleton
								baseColor="rgb(60, 60, 60)"
								highlightColor="rgb(233, 233, 233)"
								height="20px"
								width="150px"
							/>
						</div>
					</div>
				))}
		</>
	);
};

export default Videoskeleton;
