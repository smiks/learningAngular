export interface ApiResponse<T> {
    msg: string;
    error: number;
    quotes: T;
}

export interface ApiResponseQOTD<T> {
    msg: string;
    error: number;
    quote: T;
}

export interface Quote {
    id: number;
    author: string;
    keywords: string;
    quote: object;
}