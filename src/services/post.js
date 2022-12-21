import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeVideosApi = createApi({
	reducerPath: "homeVideos",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://youtube.googleapis.com/youtube/v3/",
	}),
	endpoints: (builder) => ({
		getHomeVideos: builder.query({
			query: () => ({
				url: "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyDTWmFKQ2jdZPPTZ2lIKEzEhpHJYvVe6G8",
				method: "GET",
			}),
		}),
		getMoreHomeVideos: builder.query({
			query:(nextPageToken)=> ({
				url:`videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&&pageToken=${nextPageToken}&regionCode=IN&key=AIzaSyDTWmFKQ2jdZPPTZ2lIKEzEhpHJYvVe6G8`,
				method:"GET",
			}),
		}),
		getChannelIcon:builder.query({
			query:(id) => ({
				url:`channels?part=snippet&id=${id}&key=AIzaSyDTWmFKQ2jdZPPTZ2lIKEzEhpHJYvVe6G8`,
				method:"GET",
			}),
		}),
		getVideoByKeyword: builder.query({
			query:(keyword) => ({
				url:`search?part=snippet&maxResults=50&q=${keyword}&videoType=any&key=AIzaSyDTWmFKQ2jdZPPTZ2lIKEzEhpHJYvVe6G8`,
				method:"GET",
			})
		}),
		getVideoById:builder.query({
			query:(videoId) => ({
				url:`videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyDTWmFKQ2jdZPPTZ2lIKEzEhpHJYvVe6G8`,
				method:"GET",
			}),
		}),
	}),
});

export const { useGetHomeVideosQuery,useGetMoreHomeVideosQuery, useGetChannelIconQuery , useGetVideoByKeywordQuery, useGetVideoByIdQuery } = homeVideosApi;


