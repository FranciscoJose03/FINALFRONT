export type Video = {
    id: string;
    title: string;
    thumbnail: string;
    description: string;
    duration: number;
    youtubeid: string;
    date: string;
    fav: boolean;
}

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    favs: boolean;
}