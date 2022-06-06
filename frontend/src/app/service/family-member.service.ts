import { FamilyMember } from './../model/family-member';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FamilyMemberService {
  list: FamilyMember[] = [
    {
      _id: 1,
      firstName: 'Brynna',
      lastName: 'Kovats',
      email: 'badamski0@sbwire.com',
      favouriteGenre: 'Horror',
      favouriteMovie: 'Texas Chainsaw Massacre 2, The',
      role: 1,
      kinshipDegree: 'mother',
    },
    {
      _id: 2,
      firstName: 'Petronille',
      lastName: 'Kovats',
      email: 'peccles1@home.pl',
      favouriteGenre: 'Action, Drama, War',
      favouriteMovie: 'Home of the Brave',
      role: 2,
      kinshipDegree: 'grandmother',
    },
    {
      _id: 3,
      firstName: 'Edyth',
      lastName: 'Kovats',
      email: 'egrievson2@php.net',
      favouriteGenre: 'Drama, Horror, Thriller',
      favouriteMovie: 'Dahmer',
      role: 3,
      kinshipDegree: 'aunt',
    },
    {
      _id: 4,
      firstName: 'Orsa',
      lastName: 'Kovats',
      email: 'oanespie3@com.com',
      favouriteGenre: 'Comedy, Musical',
      favouriteMovie: 'Nancy Goes to Rio',
      role: 1,
      kinshipDegree: 'daughter',
    },
    {
      _id: 5,
      firstName: 'Hertha',
      lastName: 'Kovats',
      email: 'hflecknoe4@ebay.co.uk',
      favouriteGenre: 'Action, Thriller',
      favouriteMovie: 'The Gunman',
      role: 1,
      kinshipDegree: 'daughter',
    },
    {
      _id: 6,
      firstName: 'Jens',
      lastName: 'Kovats',
      email: 'jmurrigans5@blogspot.com',
      favouriteGenre: 'Drama, Film-Noir',
      favouriteMovie: 'Moontide',
      role: 2,
      kinshipDegree: 'grandfather',
    },
    {
      _id: 7,
      firstName: 'Carlen',
      lastName: 'Kovats',
      email: 'cmaxwale6@wix.com',
      favouriteGenre: 'Comedy, Horror, Sci-Fi',
      favouriteMovie: 'Slither',
      role: 2,
      kinshipDegree: 'grandmother',
    },
    {
      _id: 8,
      firstName: 'Gustave',
      lastName: 'Kovats',
      email: 'gcoste7@google.ca',
      favouriteGenre: 'Comedy',
      favouriteMovie: 'All That... for This?!',
      role: 3,
      kinshipDegree: 'uncle',
    },
    {
      _id: 9,
      firstName: 'Esteban',
      lastName: 'Kovats',
      email: 'ebayley8@illinois.edu',
      favouriteGenre: 'Drama',
      favouriteMovie: 'Beefcake',
      role: 1,
      kinshipDegree: 'son',
    },
    {
      _id: 10,
      firstName: 'Elianore',
      lastName: 'Kovats',
      email: 'egoalley9@cyberchimps.com',
      favouriteGenre: 'Drama, Thriller',
      favouriteMovie: 'Mean Creek',
      role: 3,
      kinshipDegree: 'great-grandmother',
    },
    {
      _id: 11,
      firstName: 'Lulita',
      lastName: 'Kovats',
      email: 'lhandreka@illinois.edu',
      favouriteGenre: 'Crime, Drama',
      favouriteMovie: 'Return of Mod Squad, The',
      role: 3,
      kinshipDegree: 'aunt',
    },
    {
      _id: 12,
      firstName: 'Bartholomeus',
      lastName: 'Kovats',
      email: 'bwynettb@ed.gov',
      favouriteGenre: 'Action, Crime, Drama',
      favouriteMovie: 'Rockaway',
      role: 1,
      kinshipDegree: 'father',
    },
  ];
  constructor() {}

  getAll(): Observable<FamilyMember[]> {
    return of(this.list);
  }
}
