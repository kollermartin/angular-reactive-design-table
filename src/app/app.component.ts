import { Observable } from 'rxjs';
import { LoaderService } from './loader/loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pager';

  isLoading$ = new Observable<boolean>();

  constructor(private loader: LoaderService) {
  }

  ngOnInit(): void {
    this.isLoading$ = this.loader.loading$;
  }
}
