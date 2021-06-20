import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ChartsComponent implements OnInit {
  /* public date: Object = new Date();
  constructor(@Inject('sourceFiles') private sourceFiles: any) {
    sourceFiles.files = ['./charts.component.css'];
  }
 */
  ngOnInit(): void {}
}
