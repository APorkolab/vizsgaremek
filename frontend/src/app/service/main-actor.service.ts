import { MainActor } from './../model/main-actor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainActorService {
  list: MainActor[] = [
    {
      _id: 1,
      fullName: 'Brig Morrad',
      nationality: 'CN',
      dateOfBirth: '2022-01-22',
      mostFamousMovie: 'Pump Up the Volume',
    },
    {
      _id: 2,
      fullName: 'Luisa Goracci',
      nationality: 'NG',
      dateOfBirth: '2021-06-25',
      mostFamousMovie: 'Grand Canyon',
    },
    {
      _id: 3,
      fullName: 'Sawyer Reignolds',
      nationality: 'AR',
      dateOfBirth: '2021-09-07',
      mostFamousMovie: 'Long Way Down, A',
    },
    {
      _id: 4,
      fullName: 'Gerty Pepineaux',
      nationality: 'CN',
      dateOfBirth: '2021-07-04',
      mostFamousMovie: 'New World, The',
    },
    {
      _id: 5,
      fullName: 'Marissa Castanares',
      nationality: 'PH',
      dateOfBirth: '2021-06-17',
      mostFamousMovie: 'Cheerleader Camp',
    },
    {
      _id: 6,
      fullName: 'Solly Wickenden',
      nationality: 'CN',
      dateOfBirth: '2021-06-12',
      mostFamousMovie: 'I Never Sang for My Father',
    },
    {
      _id: 7,
      fullName: 'Avery Golsby',
      nationality: 'MY',
      dateOfBirth: '2021-07-25',
      mostFamousMovie: 'Where the Road Meets the Sun',
    },
    {
      _id: 8,
      fullName: 'Art Eakle',
      nationality: 'GE',
      dateOfBirth: '2022-05-02',
      mostFamousMovie: 'Summer and Smoke',
    },
    {
      _id: 9,
      fullName: 'Aubert Klauber',
      nationality: 'US',
      dateOfBirth: '2021-11-03',
      mostFamousMovie: 'Call Girl',
    },
    {
      _id: 10,
      fullName: 'Murray Petrovic',
      nationality: 'BR',
      dateOfBirth: '2021-05-30',
      mostFamousMovie: 'Reap the Wild Wind',
    },
    {
      _id: 11,
      fullName: 'Jilli Plum',
      nationality: 'ID',
      dateOfBirth: '2021-10-19',
      mostFamousMovie: 'Payback',
    },
    {
      _id: 12,
      fullName: 'Birdie Antliff',
      nationality: 'SE',
      dateOfBirth: '2021-12-25',
      mostFamousMovie: 'Pussy Riot: A Punk Prayer',
    },
    {
      _id: 13,
      fullName: 'Abbye Coolican',
      nationality: 'CZ',
      dateOfBirth: '2021-05-29',
      mostFamousMovie: 'Highlander: The Source',
    },
    {
      _id: 14,
      fullName: 'Brooke Feldharker',
      nationality: 'TH',
      dateOfBirth: '2022-04-24',
      mostFamousMovie: 'Vengeance (Fuk sau)',
    },
    {
      _id: 15,
      fullName: 'Freddie Loxdale',
      nationality: 'GT',
      dateOfBirth: '2022-05-09',
      mostFamousMovie: 'Hidden Face, The (La cara oculta)',
    },
    {
      _id: 16,
      fullName: 'Ardine Lowndsborough',
      nationality: 'CN',
      dateOfBirth: '2021-06-02',
      mostFamousMovie: 'Lover Come Back',
    },
    {
      _id: 17,
      fullName: 'Lindy Cancellieri',
      nationality: 'AR',
      dateOfBirth: '2022-05-05',
      mostFamousMovie: 'Beeswax',
    },
    {
      _id: 18,
      fullName: 'Shelby Gantlett',
      nationality: 'PH',
      dateOfBirth: '2022-02-23',
      mostFamousMovie: 'Bakhita',
    },
    {
      _id: 19,
      fullName: 'Kain Hollier',
      nationality: 'PH',
      dateOfBirth: '2021-06-06',
      mostFamousMovie: 'Hello Down There',
    },
    {
      _id: 20,
      fullName: 'Brooke Esposi',
      nationality: 'PH',
      dateOfBirth: '2022-01-22',
      mostFamousMovie: 'Where in the World Is Osama Bin Laden?',
    },
    {
      _id: 21,
      fullName: 'Hallie Twiddle',
      nationality: 'YE',
      dateOfBirth: '2021-10-30',
      mostFamousMovie: 'All Relative',
    },
    {
      _id: 22,
      fullName: 'Bronnie Blase',
      nationality: 'US',
      dateOfBirth: '2022-05-06',
      mostFamousMovie: 'Horse in the Gray Flannel Suit, The',
    },
    {
      _id: 23,
      fullName: 'Riane Haggus',
      nationality: 'CN',
      dateOfBirth: '2022-05-05',
      mostFamousMovie: 'Private Life of Don Juan, The',
    },
    {
      _id: 24,
      fullName: 'Maison Wrigley',
      nationality: 'LU',
      dateOfBirth: '2022-03-03',
      mostFamousMovie: 'Paulie',
    },
    {
      _id: 25,
      fullName: 'Hedwiga Snartt',
      nationality: 'PE',
      dateOfBirth: '2021-07-26',
      mostFamousMovie:
        'Naked Ambition: An R Rated Look at an X Rated Industry ',
    },
    {
      _id: 26,
      fullName: 'Dodie Baudins',
      nationality: 'PL',
      dateOfBirth: '2022-01-27',
      mostFamousMovie: 'Mouse on the Moon, The',
    },
    {
      _id: 27,
      fullName: 'Isidor Paramor',
      nationality: 'ID',
      dateOfBirth: '2022-04-27',
      mostFamousMovie: 'Legacy, The',
    },
    {
      _id: 28,
      fullName: 'Prudence Tremblett',
      nationality: 'PL',
      dateOfBirth: '2021-05-26',
      mostFamousMovie: 'Cat People',
    },
    {
      _id: 29,
      fullName: 'Waverley Littleton',
      nationality: 'UA',
      dateOfBirth: '2022-02-15',
      mostFamousMovie: 'Grbavica: The Land of My Dreams (Grbavica)',
    },
    {
      _id: 30,
      fullName: 'Hanson Severwright',
      nationality: 'CZ',
      dateOfBirth: '2022-05-06',
      mostFamousMovie: 'Mad Hot Ballroom',
    },
    {
      _id: 31,
      fullName: 'Noach Cowely',
      nationality: 'NE',
      dateOfBirth: '2021-06-11',
      mostFamousMovie:
        'Uncle Boonmee Who Can Recall His Past Lives (Loong Boonmee raleuk chat)',
    },
    {
      _id: 32,
      fullName: 'Kahaleel Bruckmann',
      nationality: 'ML',
      dateOfBirth: '2022-01-29',
      mostFamousMovie: 'It Came from Beneath the Sea',
    },
    {
      _id: 33,
      fullName: 'Aurea Polglase',
      nationality: 'PA',
      dateOfBirth: '2021-11-22',
      mostFamousMovie:
        'Nanny McPhee Returns (a.k.a. Nanny McPhee and the Big Bang)',
    },
    {
      _id: 34,
      fullName: 'Cassandre Mattiacci',
      nationality: 'PH',
      dateOfBirth: '2021-05-25',
      mostFamousMovie: 'If You Love (Jos rakastat)',
    },
    {
      _id: 35,
      fullName: 'Cymbre Dorning',
      nationality: 'PT',
      dateOfBirth: '2021-09-06',
      mostFamousMovie: 'Ledge, The',
    },
    {
      _id: 36,
      fullName: 'Blake Guisot',
      nationality: 'IT',
      dateOfBirth: '2021-11-11',
      mostFamousMovie: 'Damnation Alley',
    },
    {
      _id: 37,
      fullName: 'Rosanna Trude',
      nationality: 'PH',
      dateOfBirth: '2021-11-02',
      mostFamousMovie: 'Life Aquatic with Steve Zissou, The',
    },
    {
      _id: 38,
      fullName: 'Vikky Starrs',
      nationality: 'NG',
      dateOfBirth: '2021-06-16',
      mostFamousMovie: 'And So It Is',
    },
    {
      _id: 39,
      fullName: 'Dora Furnell',
      nationality: 'CN',
      dateOfBirth: '2021-11-27',
      mostFamousMovie: 'Blood of the Beasts (Sang des bêtes, Le)',
    },
    {
      _id: 40,
      fullName: 'Ephraim Barkaway',
      nationality: 'CN',
      dateOfBirth: '2021-10-31',
      mostFamousMovie: 'CBGB',
    },
    {
      _id: 41,
      fullName: 'Salome Carbin',
      nationality: 'DE',
      dateOfBirth: '2021-12-06',
      mostFamousMovie: 'Before and After',
    },
    {
      _id: 42,
      fullName: 'Herc Partrick',
      nationality: 'VE',
      dateOfBirth: '2021-09-15',
      mostFamousMovie:
        'Godzilla: Tokyo S.O.S. (Gojira tai Mosura tai Mekagojira: Tôkyô S.O.S.)',
    },
    {
      _id: 43,
      fullName: 'Madlen Mazella',
      nationality: 'ID',
      dateOfBirth: '2022-03-14',
      mostFamousMovie: 'The Smiling Ghost',
    },
    {
      _id: 44,
      fullName: 'Darrelle Calfe',
      nationality: 'PH',
      dateOfBirth: '2021-06-16',
      mostFamousMovie: 'Quick and the Dead, The',
    },
    {
      _id: 45,
      fullName: 'Ermin Ragsdale',
      nationality: 'CZ',
      dateOfBirth: '2021-09-01',
      mostFamousMovie: 'Wonderful World of the Brothers Grimm, The',
    },
    {
      _id: 46,
      fullName: 'Kacie Tolan',
      nationality: 'ID',
      dateOfBirth: '2022-04-08',
      mostFamousMovie: 'The Borderlands',
    },
    {
      _id: 47,
      fullName: 'Ryun Scrivner',
      nationality: 'PE',
      dateOfBirth: '2021-12-02',
      mostFamousMovie: 'Celebrity',
    },
    {
      _id: 48,
      fullName: 'Samantha Bartels',
      nationality: 'CN',
      dateOfBirth: '2021-08-24',
      mostFamousMovie: 'Heli',
    },
    {
      _id: 49,
      fullName: 'Friedrick Barthrup',
      nationality: 'JP',
      dateOfBirth: '2021-06-06',
      mostFamousMovie: 'Trapped Ashes',
    },
    {
      _id: 50,
      fullName: 'Guenevere Bolle',
      nationality: 'MG',
      dateOfBirth: '2021-10-09',
      mostFamousMovie: "Berkeley in the '60s",
    },
    {
      _id: 51,
      fullName: 'Tuesday Romi',
      nationality: 'ID',
      dateOfBirth: '2021-11-28',
      mostFamousMovie: 'My One and Only',
    },
    {
      _id: 52,
      fullName: 'Ardine Bulley',
      nationality: 'ID',
      dateOfBirth: '2021-06-21',
      mostFamousMovie: 'Dragonfly',
    },
    {
      _id: 53,
      fullName: 'Jorge Ros',
      nationality: 'UA',
      dateOfBirth: '2021-12-29',
      mostFamousMovie: "Ed's Next Move",
    },
    {
      _id: 54,
      fullName: 'Tabby Bagnal',
      nationality: 'ID',
      dateOfBirth: '2021-10-12',
      mostFamousMovie: 'Instructions Not Included (No se Aceptan Devoluciones)',
    },
    {
      _id: 55,
      fullName: 'Ingrid Odgers',
      nationality: 'PY',
      dateOfBirth: '2021-11-10',
      mostFamousMovie: 'Déjà Vu',
    },
    {
      _id: 56,
      fullName: 'Devland Agiolfinger',
      nationality: 'ID',
      dateOfBirth: '2021-09-16',
      mostFamousMovie: 'Executioner, The (Massacre Mafia Style)',
    },
    {
      _id: 57,
      fullName: 'Warren Ship',
      nationality: 'VN',
      dateOfBirth: '2022-02-27',
      mostFamousMovie: 'THX 1138',
    },
    {
      _id: 58,
      fullName: 'Betti Dungey',
      nationality: 'PL',
      dateOfBirth: '2021-07-13',
      mostFamousMovie: 'Europa Report',
    },
    {
      _id: 59,
      fullName: 'Raynor Potteril',
      nationality: 'RU',
      dateOfBirth: '2022-01-05',
      mostFamousMovie: 'Prairie Home Companion, A',
    },
    {
      _id: 60,
      fullName: 'Benjy Cartwight',
      nationality: 'CN',
      dateOfBirth: '2022-02-28',
      mostFamousMovie: 'Ninja, A Band of Assassins (Shinobi No Mono)',
    },
    {
      _id: 61,
      fullName: 'Colly Hurdedge',
      nationality: 'PS',
      dateOfBirth: '2022-02-02',
      mostFamousMovie: 'Tales from the Organ Trade',
    },
    {
      _id: 62,
      fullName: 'Abdel Jest',
      nationality: 'BR',
      dateOfBirth: '2022-05-12',
      mostFamousMovie: 'Iria: Zeiram the Animation ',
    },
    {
      _id: 63,
      fullName: 'Charisse Pinar',
      nationality: 'ID',
      dateOfBirth: '2022-04-03',
      mostFamousMovie: 'Easy',
    },
    {
      _id: 64,
      fullName: 'Samson Goad',
      nationality: 'EG',
      dateOfBirth: '2021-08-05',
      mostFamousMovie: 'Mind Reader, The',
    },
    {
      _id: 65,
      fullName: 'Isadore Beatty',
      nationality: 'RU',
      dateOfBirth: '2021-07-19',
      mostFamousMovie: 'Horns',
    },
    {
      _id: 66,
      fullName: 'Leandra Justun',
      nationality: 'LU',
      dateOfBirth: '2021-12-14',
      mostFamousMovie: 'Temple Grandin',
    },
    {
      _id: 67,
      fullName: 'Sarette Keune',
      nationality: 'CN',
      dateOfBirth: '2022-03-18',
      mostFamousMovie: 'To Live (Huozhe)',
    },
    {
      _id: 68,
      fullName: 'Fredrika Gell',
      nationality: 'ID',
      dateOfBirth: '2022-01-20',
      mostFamousMovie: 'American Psycho II: All American Girl',
    },
    {
      _id: 69,
      fullName: 'Raffarty Devons',
      nationality: 'KM',
      dateOfBirth: '2021-06-14',
      mostFamousMovie: 'Trust',
    },
    {
      _id: 70,
      fullName: 'Hyacinthia Snelgar',
      nationality: 'CN',
      dateOfBirth: '2021-06-16',
      mostFamousMovie: 'Last of Mrs. Cheyney, The',
    },
    {
      _id: 71,
      fullName: 'Katerina Drust',
      nationality: 'BR',
      dateOfBirth: '2022-03-24',
      mostFamousMovie: 'Donner Party, The',
    },
    {
      _id: 72,
      fullName: 'Mala Kann',
      nationality: 'KH',
      dateOfBirth: '2021-11-10',
      mostFamousMovie: 'Conversation with Gregory Peck, A',
    },
    {
      _id: 73,
      fullName: 'Godard Woodburn',
      nationality: 'ID',
      dateOfBirth: '2022-04-19',
      mostFamousMovie: 'The Hallelujah Handshake',
    },
    {
      _id: 74,
      fullName: 'Dayle Parnall',
      nationality: 'CN',
      dateOfBirth: '2021-08-17',
      mostFamousMovie: 'North Star (a.k.a. Tashunga)',
    },
    {
      _id: 75,
      fullName: 'Bartolomeo McKeurton',
      nationality: 'PT',
      dateOfBirth: '2022-05-06',
      mostFamousMovie: 'American Gothic',
    },
    {
      _id: 76,
      fullName: 'Constantine Abbatucci',
      nationality: 'BR',
      dateOfBirth: '2021-05-28',
      mostFamousMovie: 'Mulberry Street',
    },
    {
      _id: 77,
      fullName: 'Denyse Dive',
      nationality: 'NG',
      dateOfBirth: '2022-04-04',
      mostFamousMovie: 'Mississippi Grind',
    },
    {
      _id: 78,
      fullName: 'Hamlin Buffham',
      nationality: 'AR',
      dateOfBirth: '2021-07-21',
      mostFamousMovie: 'Critters 3',
    },
    {
      _id: 79,
      fullName: 'Bridie Madgwich',
      nationality: 'PH',
      dateOfBirth: '2022-05-14',
      mostFamousMovie: 'Moomins on the Riviera (Muumit Rivieralla)',
    },
    {
      _id: 80,
      fullName: 'Cazzie Cowe',
      nationality: 'CN',
      dateOfBirth: '2022-05-21',
      mostFamousMovie: 'Fog, The',
    },
    {
      _id: 81,
      fullName: 'Juliet Domini',
      nationality: 'ID',
      dateOfBirth: '2021-09-22',
      mostFamousMovie: "Pig's Tale, A",
    },
    {
      _id: 82,
      fullName: 'Aigneis Hartman',
      nationality: 'PK',
      dateOfBirth: '2021-10-19',
      mostFamousMovie: "Snowball Effect: The Story of 'Clerks'",
    },
    {
      _id: 83,
      fullName: 'Dari Scutching',
      nationality: 'RU',
      dateOfBirth: '2021-06-22',
      mostFamousMovie: 'Invasion of the Body Snatchers',
    },
    {
      _id: 84,
      fullName: 'Dunn Schober',
      nationality: 'KZ',
      dateOfBirth: '2021-12-08',
      mostFamousMovie: 'Allnighter, The',
    },
    {
      _id: 85,
      fullName: 'Kata Hicklingbottom',
      nationality: 'PT',
      dateOfBirth: '2021-07-18',
      mostFamousMovie: 'Turandot Project, The',
    },
    {
      _id: 86,
      fullName: 'Lindi Pudan',
      nationality: 'NO',
      dateOfBirth: '2021-11-11',
      mostFamousMovie: 'Blackhat',
    },
    {
      _id: 87,
      fullName: 'Devon Farrell',
      nationality: 'SE',
      dateOfBirth: '2022-01-13',
      mostFamousMovie: 'Fetching Cody',
    },
    {
      _id: 88,
      fullName: 'Brina Pringour',
      nationality: 'CI',
      dateOfBirth: '2022-03-25',
      mostFamousMovie: 'Broken Hearts Club, The',
    },
    {
      _id: 89,
      fullName: 'Jacintha Kinnane',
      nationality: 'US',
      dateOfBirth: '2021-10-09',
      mostFamousMovie: 'Arsène Lupin',
    },
    {
      _id: 90,
      fullName: 'Abner Velti',
      nationality: 'CN',
      dateOfBirth: '2022-02-27',
      mostFamousMovie: 'Common Threads: Stories from the Quilt',
    },
    {
      _id: 91,
      fullName: 'Adora Wattins',
      nationality: 'CZ',
      dateOfBirth: '2021-11-03',
      mostFamousMovie: 'Like Mike',
    },
    {
      _id: 92,
      fullName: 'Yetty Parkins',
      nationality: 'CN',
      dateOfBirth: '2022-03-12',
      mostFamousMovie: 'Tall Guy, The',
    },
    {
      _id: 93,
      fullName: "Frasquito O'Shesnan",
      nationality: 'RU',
      dateOfBirth: '2022-02-23',
      mostFamousMovie: 'Shit Year',
    },
    {
      _id: 94,
      fullName: 'Caleb Kempster',
      nationality: 'UA',
      dateOfBirth: '2022-02-27',
      mostFamousMovie: 'Crusades, The',
    },
    {
      _id: 95,
      fullName: 'Tod Gohn',
      nationality: 'CN',
      dateOfBirth: '2021-12-31',
      mostFamousMovie: 'NeverEnding Story II: The Next Chapter, The',
    },
    {
      _id: 96,
      fullName: 'Lesya Flippelli',
      nationality: 'EC',
      dateOfBirth: '2021-06-30',
      mostFamousMovie:
        'Strawberries in the Supermarket (Jagoda u supermarketu) ',
    },
    {
      _id: 97,
      fullName: 'Star Tinghill',
      nationality: 'RU',
      dateOfBirth: '2021-06-28',
      mostFamousMovie: 'Indecent Proposal',
    },
    {
      _id: 98,
      fullName: 'Anna-diane Creer',
      nationality: 'HN',
      dateOfBirth: '2021-09-27',
      mostFamousMovie: 'Atlantis: The Lost Empire',
    },
    {
      _id: 99,
      fullName: 'Johnette Geharke',
      nationality: 'PL',
      dateOfBirth: '2022-03-01',
      mostFamousMovie: 'Bounty, The',
    },
    {
      _id: 100,
      fullName: 'Karoly Pulbrook',
      nationality: 'JP',
      dateOfBirth: '2022-04-21',
      mostFamousMovie: 'Chastity Bites',
    },
  ];

  constructor() {}

  getAll(): Observable<MainActor[]> {
    return of(this.list);
  }
}
