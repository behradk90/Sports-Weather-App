// Would have preferred to accessed the wikipediAPI properly for a larger and more dynamic data pool: time constraints

const ukFootballStadiums = [
    {
        name: 'Wembley Stadium',
        id: 1,
        location: 'London',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wembley_Stadium_interior.jpg/200px-Wembley_Stadium_interior.jpg'
    },
    {
        name: 'Old Trafford',
        id: 2,
        location: 'Manchester',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Manchester_United_Panorama_%288051523746%29.jpg/200px-Manchester_United_Panorama_%288051523746%29.jpg'
    },
    {
        name: 'Emirates Stadium',
        id: 3,
        location: 'London',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Emirates_Stadium_-_East_stand_Club_Level.jpg/200px-Emirates_Stadium_-_East_stand_Club_Level.jpg'
    },
    {
        name: 'Anfield',
        id: 4,
        location: 'Liverpool',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Panorama_of_Anfield_with_new_main_stand_%2829676137824%29.jpg/200px-Panorama_of_Anfield_with_new_main_stand_%2829676137824%29.jpg'
    },
    {
        name: 'Etihad Stadium',
        id: 5,
        location: 'Manchester',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Etihad_Stadium.jpg/200px-Etihad_Stadium.jpg'
    },
    {
        name: 'Tottenham Hotspur Stadium',
        id: 6,
        location: 'London',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Spurs_0_Chelsea_2_%2849287739013%29.jpg/200px-Spurs_0_Chelsea_2_%2849287739013%29.jpg'
    },
    {
        name: 'Stamford Bridge',
        id: 7,
        location: 'London',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Stamford_Bridge_Clear_Skies.JPG/200px-Stamford_Bridge_Clear_Skies.JPG'
    },
    {
        name: 'Goodison Park',
        id: 8,
        location: 'Liverpool',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Goodison_Park_August_2022.jpg/200px-Goodison_Park_August_2022.jpg'
    },
    {
        name: 'Villa Park',
        id: 9,
        location: 'Birmingham',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Villa_Park.jpg/200px-Villa_Park.jpg'
    },
    {
        name: 'St. James\' Park',
        id: 10,
        location: 'Newcastle',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/StJamesParkPanorama.jpg/200px-StJamesParkPanorama.jpg'
    },
    {
        name: 'Celtic Park',
        id: 11,
        location: 'Glasgow',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Celtic_Park_during_an_Old_Firm_derby_between_Celtic_FC_and_Rangers_FC.jpg/200px-Celtic_Park_during_an_Old_Firm_derby_between_Celtic_FC_and_Rangers_FC.jpg'
    },
    {
        name: 'Ibrox Stadium',
        id: 12,
        location: 'Glasgow',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Rangers-SM_%281%29.jpg/200px-Rangers-SM_%281%29.jpg'
    },
    {
        name: 'Molineux Stadium',
        id: 13,
        location: 'Wolverhampton',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/MolineuxStadium2022.jpg/200px-MolineuxStadium2022.jpg'
    },
    {
        name: 'King Power Stadium',
        id: 14,
        location: 'Leicester',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/King_Power_Stadium_wide_view.jpg/200px-King_Power_Stadium_wide_view.jpg'
    },
    {
        name: 'Bramall Lane',
        id: 15,
        location: 'Sheffield',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bramall_Lane_End.jpg/200px-Bramall_Lane_End.jpg'
    },
    {
        name: 'Carrow Road',
        id: 16,
        location: 'Norwich',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Under21june07.JPG/200px-Under21june07.JPG'
    },
    {
        name: 'The Hawthorns',
        id: 17,
        location: 'West Bromwich',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/The_Hawthorns_2013-12-21.jpg/200px-The_Hawthorns_2013-12-21.jpg'
    },
    {
        name: 'St. Mary\'s Stadium',
        id: 18,
        location: 'Southampton',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/St_Mary%27s_Stadium_%282%29.jpg/200px-St_Mary%27s_Stadium_%282%29.jpg'
    },
    {
        name: 'St. Andrew\'s Stadium',
        id: 19,
        location: 'Birmingham',
        imageUrl: ''
    },
    {
        name: 'Riverside Stadium',
        id: 20,
        location: 'Middlesbrough',
        imageUrl: ''
    },
    {
        name: 'Pride Park Stadium',
        id: 21,
        location: 'Derby',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pridepark.jpg/200px-Pridepark.jpg'
    },
    {
        name: 'Stadium of Light',
        id: 22,
        location: 'Sunderland',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Stadium_of_light_Haway_the_lads.jpg/200px-Stadium_of_light_Haway_the_lads.jpg'
    },
    {
        name: 'Ewood Park',
        id: 23,
        location: 'Blackburn',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ewood_Park_2011.jpg/200px-Ewood_Park_2011.jpg'
    },
    {
        name: 'Craven Cottage',
        id: 24,
        location: 'London',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Craven_Cottage_view_from_Johnny_Haynes_Stand.jpg/200px-Craven_Cottage_view_from_Johnny_Haynes_Stand.jpg'
    },
    {
        name: 'City Ground',
        id: 25,
        location: 'Nottingham',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/CityGroundPanorama.jpg/200px-CityGroundPanorama.jpg'
    },
    {
        name: 'Portman Road',
        id: 26,
        location: 'Ipswich',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2002-07-16_Portman_Road.jpg/200px-2002-07-16_Portman_Road.jpg'
    },
    {
        name: 'Turf Moor',
        id: 27,
        location: 'Burnley',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Turf_Moor_panorama.jpg/200px-Turf_Moor_panorama.jpg'
    },
    {
        name: 'Ricoh Arena',
        id: 28,
        location: 'Coventry',
        imageUrl: ''
    },
];

export default ukFootballStadiums;