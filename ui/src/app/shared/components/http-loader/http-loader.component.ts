import { Component, OnInit } from '@angular/core';
import { HttpLoaderService } from './http-loader.service';
import { debounceTime } from 'rxjs/operators';

/**
 * HttpLoaderComponent
 *
 * @author Damien Vitrac
 */
@Component({
  selector: 'app-http-loader',
  template: `
    <div class="app-http-loader" *ngIf="show">
      <div class="progress-bar-infinite" role="progressbar">
        <div class="progress-bar-infinite-primary progress-bar-infinite-fill progress-bar-infinite-element"
             style="transform: scaleX(0);"></div>
        <div class="progress-bar-infinite-secondary progress-bar-infinite-fill progress-bar-infinite-element"></div>
      </div>
      <div class="loader-wrapper">
        <app-loader>Loading ...</app-loader>
      </div>
    </div>
  `
})
export class HttpLoaderComponent implements OnInit {

  /**
   * Show attribute
   */
  show = false;

  /**
   * Constructor
   * @param httpLoaderService
   */
  constructor(private httpLoaderService: HttpLoaderService) {
  }

  /**
   * On Init
   */
  ngOnInit(): void {
    this.httpLoaderService.onChange.pipe(
      debounceTime(200))
      .subscribe((running: boolean) => {
        this.show = running;
      });
  }

}
