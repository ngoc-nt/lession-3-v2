export type Movies = {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: Genres[]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
};

export type MovieDetail = {};

export type Genres = {
    id: number
    name: string
};

export type Reviewer = {
    author: string,
    author_details: Author[],
    content: string,
    created_at: string,
    id: string,
    updated_at: string,
    url: string
};

export type Author = {
    name: string,
    username: string,
    avatar_path: any,
    rating: number
};

export const urlImages = '../images';

export const defaultMovie = {
    adult: true,
    backdrop_path: `${urlImages}/noimage.jpg`,
    id: 0,
    title: 'Black Night',
    original_language: 'EN',
    original_title: '',
    overview: '',
    poster_path: '',
    media_type: '',
    genre_ids: [
        {id: 1, name: "HD"},
        {id: 2, name: "Session 1"}
    ],
    popularity: 0,
    release_date: '',
    video: false,
    vote_average: 0,
    vote_count: 0
};

export const defaultMovieDetail = {
    adult: false,
    backdrop_path: "/md848EEPm3dHZOqwGxxTVwH2vu5.jpg",
    belongs_to_collection: null,
    budget: 65500000,
    genres: [
        {
            id: 18,
            name: "Drama"
        },
        {
            id: 36,
            name: "History"
        }
    ],
    homepage: "https://www.netflix.com/title/81268316",
    id: 906126,
    imdb_id: "tt16277242",
    original_language: "es",
    original_title: "La sociedad de la nieve",
    overview: "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
    popularity: 1353.286,
    poster_path: "/2e853FDVSIso600RqAMunPxiZjq.jpg",
    production_companies: [
        {
            id: 207052,
            logo_path: null,
            name: "El Arriero Films",
            origin_country: "ES"
        },
        {
            id: 217668,
            logo_path: null,
            name: "Misión de Audaces Films",
            origin_country: "ES"
        },
        {
            id: 178464,
            logo_path: "/tyHnxjQJLH6h4iDQKhN5iqebWmX.png",
            name: "Netflix",
            origin_country: "US"
        }
    ],
    production_countries: [
        {
            iso_3166_1: "ES",
            name: "Spain"
        },
        {
            iso_3166_1: "US",
            name: "United States of America"
        }
    ],
    release_date: "2023-12-13",
    revenue: 0,
    runtime: 144,
    spoken_languages: [
        {
            english_name: "Spanish",
            iso_639_1: "es",
            name: "Español"
        }
    ],
    status: "Released",
    tagline: "Based on a remarkable true story.",
    title: "Society of the Snow",
    video: false,
    vote_average: 8.054,
    vote_count: 933
};

export const defaultReviewer = {
    author: "Katherine Pierce",
    author_details: [
        {
            name: "Katherine Pierce Mikaelson",
            username: "msbArlene",
            avatar_path: `${urlImages}/Ellipse 11.png`,
            rating: 8
        }
    ],
    content: "FULL SPOILER-FREE REVIEW @ https://fandomwire.com/society-of-the-snow-review-a-harrowing-tale/\r\n\r\n\"Society of the Snow unquestionably solidifies J. A. Bayona's status as an absurdly underrated filmmaker.\r\n\r\nOne of the most unbelievable, harrowing survival stories ever recreated, brought to life by a truly remarkable ensemble cast, breathtaking cinematography that captures the awe-inspiring yet treacherous landscapes, a deeply stirring score that tugs at the heartstrings, and a plane crash sequence like you've never seen before.\r\n\r\nThe convergence of these elements transforms an admittedly predictable survival piece into a visceral, emotionally resonant experience, urging audiences to reflect on the thoughtfully handled themes of human resilience, beliefs, and perseverance.\r\n\r\nA must-watch, especially on the big screen if possible.\"\r\n\r\nRating: A-",
    created_at: "2023-12-30T16:43:12.164Z",
    id: "659048a0e004a66cec172ff7",
    updated_at: "2023-12-30T16:43:12.255Z",
    url: "https://www.themoviedb.org/review/659048a0e004a66cec172ff7"
};

