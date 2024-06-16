const mockArtists = [
    {
        id: 1,
        name: 'Nicki Minaj',
        image: 'https://m.media-amazon.com/images/I/71gAiMpNu-L._UF1000,1000_QL80_.jpg',
        albums: [
            {
                id: 1,
                title: 'Pink Friday',
                year: 2010,
                cover: 'https://link_to_pink_friday_cover.jpg',
                tracks: [
                    { id: 1, title: 'Super Bass', duration: '3:20', url: 'https://link_to_super_bass.mp3' },
                    { id: 2, title: 'Moment 4 Life', duration: '4:39', url: 'https://link_to_moment_4_life.mp3' },
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Chris Brown',
        image: 'https://i.scdn.co/image/ab67616d0000b2730a1d20ec09cab4bb17a36aab'
    },
    {
        id: 3,
        name: 'Rihanna',
        image: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Rihanna_-_Loud.png'
    },
    {
        id: 4,
        name: 'Beyonce',
        image: 'https://m.media-amazon.com/images/I/816LJhBJIkL._UF1000,1000_QL80_.jpg'
    },
    {
        id: 5,
        name: 'Usher',
        image: 'https://cdns-images.dzcdn.net/images/cover/1a727988b4762a5bd8f05e064753d381/1900x1900-000000-80-0-0.jpg'
    },
    {
        id: 6,
        name: '50 Cent',
        image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/50_Cent_-_The_Massacre.png'
    },
    {
        id: 7,
        name: 'Cardi B',
        image: 'https://m.media-amazon.com/images/I/61UBIeJmXQL._AC_UF894,1000_QL80_.jpg'
    },
    {
        id: 8,
        name: 'Drake',
        image: 'https://www.levelman.com/content/images/2022/11/Thank-Me-Later-1.jpg'
    },
    {
        id: 9,
        name: 'GIMS',
        image: 'https://m.media-amazon.com/images/I/71gE+iAHBSL._UF1000,1000_QL80_.jpg'
    },
    {
        id: 10,
        name: 'Future',
        image: 'https://upload.wikimedia.org/wikipedia/en/9/96/Future_cover.jpg'
    },
    {
        id: 11,
        name: 'Mariah Carey',
        image: 'https://cdns-images.dzcdn.net/images/cover/dbd77fe2d938b191c990db84008edbff/1900x1900-000000-80-0-0.jpg'
    },
    {
        id: 12,
        name: 'Sean Paul',
        image: 'https://upload.wikimedia.org/wikipedia/en/1/15/Sean_Paul_-_The_Trinty.jpg'
    },
    {
        id: 13,
        name: 'Busta Rhymes',
        image: 'https://m.media-amazon.com/images/I/81jiMUnepJL._UF1000,1000_QL80_.jpg'
    },
    {
        id: 14,
        name: 'Snoop Dogg',
        image: 'https://cdns-images.dzcdn.net/images/cover/4e8ebae30709cff2ad91f5c29ad7a068/500x500.jpg'
    },
    {
        id: 15,
        name: 'Akon',
        image: 'https://lastfm.freetls.fastly.net/i/u/300x300/0956ddf2bd294e55ce6ba63dc3b8d98b.jpg'
    }
];

export default mockArtists;
export { mockArtists };
