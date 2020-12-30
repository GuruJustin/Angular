import { Injectable } from '@angular/core';

import { Hero } from './hero'
import { HEROES } from './mock-heros'
import { Observable, of } from 'rxjs'

import {MessageService} from './message.service'
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private herosUrl = 'api/heros'
  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : "application/json"})
  }

  constructor(
    private http: HttpClient,
    private messageService : MessageService
  ) { }

  getHeros() : Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heros')
    // return of(HEROES)
    return this.http.get<Hero[]>(this.herosUrl)
      .pipe(
        tap(_ => this.log('fetched heros')),
        catchError(this.handleError<Hero[]>('getHeros', []))
      )
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.herosUrl}/${id}`

    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id = ${id}`)),
      catchError(this.handleError<Hero>(`getHero id = ${id}`))
    )
  }

  private log(message: string) {
    this.messageService.add(`HeroService : ${message}`)
  }

  private handleError<T>(operation = 'operation', result ?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      this.log(`${operation} failed : ${error.message}`)
      return of(result as T)
    }
  }

  updateHero(hero: Hero) : Observable<any> {
    return this.http.put(this.herosUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id = ${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    )
  }

  addHero(hero : Hero) : Observable<Hero> {
    return this.http.post<Hero>(this.herosUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`add hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  deleteHero(hero:Hero | number) : Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id
    const url = `${this.herosUrl}/${id}`

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`delete hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }

  searchHeros(term : string) : Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.herosUrl}/?name=${term}`)
      .pipe(
        tap(x => x.length ? this.log(`found heros matching "${term}"`) : this.log(`no heros matching "${term}"`)),
        catchError(this.handleError<Hero[]>('searchHeros', []))
      )
  }
}