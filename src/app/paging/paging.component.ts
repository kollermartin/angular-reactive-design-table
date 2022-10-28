import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, switchMap } from 'rxjs';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {

 pageNumber$ = new BehaviorSubject<number>(1);
 pageData$ = this.pageNumber$.pipe(
    switchMap( currentPage => this.dataService.getDataForPage(currentPage))
  )

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  nextPage() {
    this.pageNumber$.next(this.pageNumber$.value + 1);
  }

  previousPage() {
    this.pageNumber$.next(this.pageNumber$.value - 1);
  }
}
