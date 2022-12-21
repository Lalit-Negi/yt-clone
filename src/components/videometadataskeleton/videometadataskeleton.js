import React from "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import "./videometadataskeleton.css";

const Videometadataskeleton = () => {
	return <div className="videometadata-skeleton-container" >
        <Skeleton  baseColor='rgb(60, 60, 60)' highlightColor='rgb(233, 233, 233)' width="100%" height="2rem" />
        <div className="videometadata-skeleton-detail">
        <Skeleton className="videometadata-skeleton-detail-icon" baseColor='rgb(60, 60, 60)' highlightColor='rgb(233, 233, 233)' width="4rem" height="3.6rem" circle={true} />
        <Skeleton className="videometadata-skeleton-detail-icon" baseColor='rgb(60, 60, 60)' highlightColor='rgb(233, 233, 233)' width="18rem" height="1.6rem" />
        </div>        
        <Skeleton className="videometadeta-skeleton-description" count={6} baseColor='rgb(60, 60, 60)' highlightColor='rgb(233, 233, 233)' width="100%" height="1.2rem" />    
    </div>;
};

export default Videometadataskeleton;
