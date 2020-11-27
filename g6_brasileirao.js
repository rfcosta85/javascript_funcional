const Brazil_Serie_A =
[

    {club: 'Atlético-MG', points: 42, victories: 13},
    {club: 'Flamengo', points: 39, victories: 11},
    {club: 'São Paulo', points: 38, victories: 10},
    {club: 'Internacional', points: 36, victories: 10},
    {club: 'Fluminense', points: 35, victories: 10},
    {club: 'Palmeiras', points: 34, victories: 9},

]

const getClubs = club_name => club_name.club
const getPoints = club_points => club_points.points
const getVictories = club_victories => club_victories.victories

const disputed = same_victories => same_victories.victories > 9 && same_victories.victories < 11

const clubs_list = Brazil_Serie_A
.filter(disputed)
.map(getClubs)

console.log('\n' + 'Equilíbrio no Campeonato Brasileiro 2021 - Após 22 rodadas' + '\n')
console.log(clubs_list)
console.log('\n' +'A lista apresenta o 3° o 4° e o 5° colocados da competição, com o mesmo número de vitórias!' + '\n')