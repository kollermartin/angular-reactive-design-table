import { LoaderService } from './../loader/loader.service';
import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';


type paginationData = {
  minPage: number;
  maxPage: number;
  data: {[key: number]: string[]}
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _data: paginationData = {
    minPage: 1,
    maxPage: 3,
    data: {
      1: ['Alex', 'Abraham', 'Alfonso', 'Albi'],
      2: ['Belzebos', 'Bublos', 'Berkoslav', 'Baki'],
      3: ['Cement', 'Celib', 'Curkele', 'Crkalis']
    }
  }

  constructor(private laoderService: LoaderService) { }

  public getDataForPage(page: number): Observable<string[]> {
    this.laoderService.loading$.next(true)
    return of(this._data.data[page]).pipe(delay(1000), tap(() => this.laoderService.loading$.next(false)));
  }
}
