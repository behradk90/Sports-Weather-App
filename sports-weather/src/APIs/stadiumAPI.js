const ukFootballStadiums = [
    {
        name: 'Wembley Stadium',
        location: 'London',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Wembley_Stadium_interior.jpg/200px-Wembley_Stadium_interior.jpg'
    },
    {
        name: 'Old Trafford',
        location: 'Manchester',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Manchester_United_Panorama_%288051523746%29.jpg/200px-Manchester_United_Panorama_%288051523746%29.jpg'
    },
    {
        name: 'Emirates Stadium',
        location: 'London',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Emirates_Stadium_-_East_stand_Club_Level.jpg/200px-Emirates_Stadium_-_East_stand_Club_Level.jpg'
    },
    {
        name: 'Anfield',
        location: 'Liverpool',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Panorama_of_Anfield_with_new_main_stand_%2829676137824%29.jpg/200px-Panorama_of_Anfield_with_new_main_stand_%2829676137824%29.jpg'
    },
    {
        name: 'Etihad Stadium',
        location: 'Manchester',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Etihad_Stadium.jpg/200px-Etihad_Stadium.jpg'
    },
    {
        name: 'Tottenham Hotspur Stadium',
        location: 'London',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Spurs_0_Chelsea_2_%2849287739013%29.jpg/200px-Spurs_0_Chelsea_2_%2849287739013%29.jpg'
    },
    {
        name: 'Stamford Bridge',
        location: 'London',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Stamford_Bridge_Clear_Skies.JPG/200px-Stamford_Bridge_Clear_Skies.JPG'
    },
    {
        name: 'Goodison Park',
        location: 'Liverpool',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Goodison_Park_August_2022.jpg/200px-Goodison_Park_August_2022.jpg'
    },
    {
        name: 'Villa Park',
        location: 'Birmingham',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Villa_Park.jpg/200px-Villa_Park.jpg'
    },
    {
        name: 'St. James\' Park',
        location: 'Newcastle',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/StJamesParkPanorama.jpg/200px-StJamesParkPanorama.jpg'
    },
    {
        name: 'Celtic Park',
        location: 'Glasgow',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Celtic_Park_during_an_Old_Firm_derby_between_Celtic_FC_and_Rangers_FC.jpg/200px-Celtic_Park_during_an_Old_Firm_derby_between_Celtic_FC_and_Rangers_FC.jpg'
    },
    {
        name: 'Ibrox Stadium',
        location: 'Glasgow',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Rangers-SM_%281%29.jpg/200px-Rangers-SM_%281%29.jpg'
    },
    {
        name: 'Molineux Stadium',
        location: 'Wolverhampton',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/MolineuxStadium2022.jpg/200px-MolineuxStadium2022.jpg'
    },
    {
        name: 'King Power Stadium',
        location: 'Leicester',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/King_Power_Stadium_wide_view.jpg/200px-King_Power_Stadium_wide_view.jpg'
    },
    {
        name: 'Bramall Lane',
        location: 'Sheffield',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Bramall_Lane_End.jpg/200px-Bramall_Lane_End.jpg'
    },
    {
        name: 'Carrow Road',
        location: 'Norwich',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Under21june07.JPG/200px-Under21june07.JPG'
    },
    {
        name: 'The Hawthorns',
        location: 'West Bromwich',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/The_Hawthorns_2013-12-21.jpg/200px-The_Hawthorns_2013-12-21.jpg'
    },
    {
        name: 'St. Mary\'s Stadium',
        location: 'Southampton',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/St_Mary%27s_Stadium_%282%29.jpg/200px-St_Mary%27s_Stadium_%282%29.jpg'
    },
    {
        name: 'St. Andrew\'s Stadium',
        location: 'Birmingham',
        imageUrl: ''
    },
    {
        name: 'Riverside Stadium',
        location: 'Middlesbrough',
        imageUrl: ''
    },
    {
        name: 'Pride Park Stadium',
        location: 'Derby',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Pridepark.jpg/200px-Pridepark.jpg'
    },
    {
        name: 'Stadium of Light',
        location: 'Sunderland',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Stadium_of_light_Haway_the_lads.jpg/200px-Stadium_of_light_Haway_the_lads.jpg'
    },
    {
        name: 'Ewood Park',
        location: 'Blackburn',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ewood_Park_2011.jpg/200px-Ewood_Park_2011.jpg'
    },
    {
        name: 'Craven Cottage',
        location: 'London',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Craven_Cottage_view_from_Johnny_Haynes_Stand.jpg/200px-Craven_Cottage_view_from_Johnny_Haynes_Stand.jpg'
    },
    {
        name: 'City Ground',
        location: 'Nottingham',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/CityGroundPanorama.jpg/200px-CityGroundPanorama.jpg'
    },
    {
        name: 'Portman Road',
        location: 'Ipswich',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2002-07-16_Portman_Road.jpg/200px-2002-07-16_Portman_Road.jpg'
    },
    {
        name: 'Turf Moor',
        location: 'Burnley',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Turf_Moor_panorama.jpg/200px-Turf_Moor_panorama.jpg'
    },
    {
        name: 'Ricoh Arena',
        location: 'Coventry',
        imageUrl: ''
    },
];

export default ukFootballStadiums;