import {formatWork} from "../practice.ts"

interface AniListResponse {
    data: AniListData;
    errors?: { message: string }[];
}

// interface AnimeData {
//     title: string,
//     year: number,
//     studio: string,
//     genre: string[],
//     rating: number
// }

interface AniListData {
    Page: {
        media: {
            title: { native: string | null; romaji: string; };
            seasonYear: number | null;
            averageScore: number | null;
            genres: string[];
            studios: { nodes: { name: string; }[]; };
        }[];
    };
};

interface Media {
    title: { native: string | null; romaji: string; };
    seasonYear: number | null;
    averageScore: number | null;
    genres: string[];
    studios: { nodes: { name: string; }[]; };
};

async function aniListFetch(): Promise<AniListResponse> {
    const res = await fetch("https://graphql.anilist.co", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            query: `query ($page: Int, $perPage: Int) {
                Page(page: $page, perPage: $perPage) {
                  media(type: ANIME, sort: POPULARITY_DESC) {
                    title { native romaji }
                    seasonYear
                    averageScore
                    genres
                    studios(isMain: true) { nodes { name } }
                  }
                }
              }`,
            variables: { page: 1, perPage: 25 }
        })
    });

    const json = await res.json();

    if (json.errors) {
        throw new Error("Failed to fetch data " + json.errors[0].message);
    }

    if (!res.ok) {
        throw new Error("Failed to fetch data " + res.status)
    }

    return json
}

async function main() {
    try {
        const data = await aniListFetch();

        const animeData = data.data.Page.media.map(p => convert(p))
        console.log(animeData);

        const countStudio: Record<string, number> = animeData.reduce((count, work) => {
            count[work.studio] = (count[work.studio] || 0) + 1
            return count
        }, {} as Record<string, number>)

        console.log(countStudio)

        const averageScore = Math.round((animeData.filter(work => work.rating).reduce((sum, work) => {
            return sum + (work.rating || 0);
        }, 0) / animeData.filter(Work => Work.rating).length) * 10) / 10;

        console.log(averageScore)

        animeData.filter(work => work.title && work.year).map(work=>{
            console.log(formatWork(work.title,work.year as number))
        })

    } catch (e) {
        console.error((e as Error).message);
    }
}



function convert(media: Media) {
    if (media.studios.nodes.length === 0) {
        return {
            title: media.title.native ?? media.title.romaji,
            year: media.seasonYear,
            studio: '不明',
            genre: media.genres,
            rating: media.averageScore
        }
    } else {
        return {
            title: media.title.native ?? media.title.romaji,
            year: media.seasonYear,
            studio: media.studios.nodes[0].name,
            genre: media.genres,
            rating: media.averageScore
        }
    }
}

// function formatWork(title:string,year:number | null) {
//     return title+'('+year+')'
// }

main();