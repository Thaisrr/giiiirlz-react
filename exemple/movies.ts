export interface Movie {
    id: number;
    title: string;
    year: number;
    director: string;
    poster: string;
    is_watched: boolean;
    duration: number;
    type: 'movie' | 'series' | 'documentary' | 'anime';
    seasons?: number;
}


export const movies: Movie[] = [
    {
        id: 1,
        title: 'Shaun of the Dead',
        year: 2004,
        director: 'Edgar Wright',
        poster: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/91005cc6ae8d9294f275f0c8fb606dc79d8e1fb936b032c913647417af60bb7d._UY500_UX667_RI_V_TTW_.jpg',
        is_watched: false,
        duration: 99,
        type: 'movie'
    },
    {
        id: 2,
        title: 'Hot Fuzz',
        year: 2007,
        director: 'Edgar Wright',
        poster: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/319da0632ab6f42ba95cf39a637717d9035adaf7e620f3fb3a9072980f8d25f3._UY500_UX667_RI_V_TTW_.jpg',
        is_watched: false,
        duration: 99,
        type: 'movie'
    },
    {
        id: 3,
        title: 'The World\'s End',
        year: 2013,
        director: 'Edgar Wright',
        poster: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/366d10fd11526476d8e78eb9331bea9ce81722f2ac94fa7fca2b2bfc2adfcb3b._UY500_UX667_RI_V_TTW_.jpg',
        is_watched: false,
        duration: 99,
        type: 'movie'
    },
    {
        id: 4,
        title: 'Kill Bill',
        year: 2003,
        director: 'Quentin Tarantino',
        poster: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/68b3b8d7be227829f41fe190016bcda843205635d26b2bfec4178e40723c94df._UY500_UX667_RI_V_TTW_.jpg',
        is_watched: false,
        duration: 99,
        type: 'movie'
    },
    {
        id: 5,
        title: 'Kill Bill 2',
        year: 2004,
        director: 'Quentin Tarantino',
        poster: 'https://m.media-amazon.com/images/S/pv-target-images/d3de317bb19f0b9d1f0cb9b2fd1de51756916facf5de8dfcc698551800600df3._UR1920,1080_.jpg',
        is_watched: false,
        duration: 99,
        type: 'movie'
    },
    {
        id: 6,
        title: 'You, Me and the Apocalypse',
        year: 2015,
        director: 'Graham Linehan',
        poster: 'https://flxt.tmsimg.com/assets/p12117612_b_h10_aa.jpg',
        is_watched: false,
        duration: 45,
        type: 'series',
        seasons: 1
    },
    {
        id: 7,
        title: 'The Walking Dead',
        year: 2010,
        director: 'Frank Darabont',
        poster: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/de471659ee3138e69bfd37a6747d83e7b21d5c5b291b78a89ddcca9771016179._RI_V_TTW_.jpg',
        is_watched: false,
        duration: 45,
        type: 'series',
        seasons: 11
    },
    {
        id: 8,
        title: 'Russian Doll',
        year: 2019,
        director: 'Natasha Lyonne',
        poster: 'https://www.direct8.fr/wp-content/uploads/2022/04/poupee-russe-saison-2.png',
        is_watched: false,
        duration: 45,
        type: 'series',
        seasons: 2
    },
    {
        id: 9,
        title: 'The Good Place',
        year: 2016,
        director: 'Michael Schur',
        poster: 'https://point-theo.com/wp-content/uploads/2019/04/The_Good_Place_S3-KeyArt-Logo-Show-Tile-1920x1080.jpg',
        is_watched: false,
        duration: 45,
        type: 'series',
        seasons: 5
    },
    {
        id: 10,
        title: 'In the Flesh',
        year: 2013,
        director: 'Dominic Mitchell',
        poster: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/3e42837d450d6cdd99621b24b5c45aacd3ca17676d42e28e01c2d61be6b11d30._UY500_UX667_RI_V_TTW_.jpg',
        is_watched: false,
        duration: 45,
        type: 'series',
        seasons: 2
    },
    {
        id: 11,
        title: 'Mister Robot',
        year: 2015,
        director: 'Sam Esmail',
        poster: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/134f649dcc4873394463c6374bb990ada39ee3e62fec51f33391b529c9665d6b._UY500_UX667_RI_V_TTW_.jpg',
        is_watched: false,
        duration: 45,
        type: 'series',
        seasons: 4
    },
    {
        id: 12,
        title: 'The OA',
        year: 2016,
        director: 'Zal Batmanglij',
        poster: 'http://antredeluciole.fr/wp-content/uploads/the-oa.jpg',
        is_watched: false,
        duration: 45,
        type: 'series',
        seasons: 2
    },
    {
        id: 13,
        title: 'Shutter Island',
        year: 2010,
        director: 'Martin Scorsese',
        poster: 'https://occ-0-360-3211.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTfg2AJU5MBEdUC798VG4iI6Np5LZDgCmfgmnpzK7DsR2k4P4uIr1Wmnoz8kZ-4eH1CUpOL5YwjqHm0clZyOerR78voHNlNY4GQY.jpg?r=30a',
        is_watched: false,
        duration: 138,
        type: 'movie'
    },
    {
        id: 14,
        title: 'Inception',
        year: 2010,
        director: 'Christopher Nolan',
        poster: 'https://static.hitek.fr/img/actualite/2015/06/fb_9389e514fca06a37ba2cba3493be1fbc-large.jpeg',
        is_watched: false,
        duration: 148,
        type: 'movie'
    },
    {
        id: 15,
        title: 'Adventure Time',
        year: 2010,
        director: 'Pendleton Ward',
        poster: 'https://jupiterjazz.net/wp-content/uploads/2020/01/Adventure-time.jpg',
        is_watched: false,
        duration: 11,
        type: 'anime',
        seasons: 10
    },
    {
        id: 16,
        title: 'Steven Universe',
        year: 2013,
        director: 'Rebecca Sugar',
        poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgAvhCoQ1IlVnTngGMBmXmA_SLbuK9vaQAg&usqp=CAU',
        is_watched: false,
        duration: 11,
        type: 'anime',
        seasons: 6
    },
];
