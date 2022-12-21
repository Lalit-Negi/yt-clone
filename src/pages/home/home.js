import React from "react";
import Categories from "../../components/categories/categories";
import Video from "../../components/video/video";
import "./home.css";
import { useGetHomeVideosQuery } from "../../services/post";
import Error from "../../components/404page/error";
import Videoskeleton from "../../components/videoskeleton/videoskeleton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import InfiniteScroll from 'react-infinite-scroll-component';

const DUMMY_CONTENT = [
	"All",
	"react",
	"redux",
	"sass",
	"javascript",
	"node",
	"html5",
	"css3",
	"python",
	"gaming",
	"cartoon",
	"tv",
	"live",
	"funny",
	"python",
	"django",
];

const Home = () => {
	const homeVideos = useGetHomeVideosQuery();

	if (homeVideos.isError) return <Error />;

	return (
		<div className="home-screen">
			<Swiper
				slidesPerView={window.innerWidth > 1200 ? 10 : window.innerWidth > 992 ? 6 : window.innerWidth < 768 ? 4 : 1}
				spaceBetween={30}
				pagination={{
					clickable: false,
				}}
				modules={[]}
				className="mySwiper"
			>
				{DUMMY_CONTENT.map((ele, index) => (
					<SwiperSlide className="slide">
						<Categories key={index} ele={ele} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="video-section">
				{homeVideos.isFetching ? (
					<Videoskeleton />
				) : (
					homeVideos.data.items.map((ele, index) => (
						<Video video={ele} key={index} />
					))
				)}
			</div>
		</div>
	);
};

export default Home;

{
	/* <InfiniteScroll
  dataLength={items.length} //This is important field to render the next data
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  // below props only if you need pull down functionality
  refreshFunction={this.refresh}
  pullDownToRefresh
  pullDownToRefreshThreshold={50}
  pullDownToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
  }
>
  {items}
</InfiniteScroll> */
}
