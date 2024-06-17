export interface ApiResponseGetMemes<T> {
    locPrefix: string;
    error: number;
    memes: T;
}

export interface Meme {
    id: number;
    likes: number;
    location: string;
    name: string;
}

export interface ApiResponseLikeMeme {
    error: number;
    msg: string;
}