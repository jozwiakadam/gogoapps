export interface Thumbnail {
    url: string;
    width: number;
    height: number;
};

export interface Video {
    king: string;
    etag: string;
    id: string | {
        videoId: string;
    };
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        channelTitle: string;
        tags: string[];
        categoryId:string;
        liveBroadcastContent: string;
        thumbnails: {
            default: Thumbnail;
            medium: Thumbnail;
            high: Thumbnail;
            standard: Thumbnail;
            maxres: Thumbnail;
        };
    };
    //Rest of Video's interface
};

export interface Videos {
    king: string;
    etag: string;
    nextPageToken: string;
    pageInfo: {
        totalResults: string;
        resultsPerPage: string;
    };
    items: Video[];
};
