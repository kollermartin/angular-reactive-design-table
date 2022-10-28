import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading$ = new BehaviorSubject<boolean>(true);

  constructor() { }
}
