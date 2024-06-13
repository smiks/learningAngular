export interface ApiResponse<T> {
    locPrefix: string;
    error: number;
    memes: T;
}

export interface Meme {
    likes: number;
    location: string;
    name: string;
}