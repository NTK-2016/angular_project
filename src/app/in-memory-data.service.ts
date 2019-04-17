import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Bhaghat Singh' },
      { id: 12, name: 'Sukhdev' },
      { id: 13, name: 'Raj Guru' },
      { id: 14, name: 'Chandra shekhar Azad' },
      { id: 15, name: 'Netaji Subhash Chandra Bose' },
      { id: 16, name: 'Rani Lakshmi Bai' },
      { id: 17, name: 'Swami Vievkanand' },
      { id: 18, name: 'Annie Besant' },
      { id: 19, name: 'Sardar Patel' },
      { id: 20, name: 'Rajendra Prasad' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}