import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NpmDownloadService } from './npm-downloads.service';


@Component({
  selector: 'app-npm-downloads',
  templateUrl: './npm-downloads.component.html',
  styleUrls: ['./npm-downloads.component.css']
})
export class NpmDownloadsComponent implements OnInit {

  chart: any;
  constructor(private _npmDownloads: NpmDownloadService) {}

  ngOnInit(): void {
    this._npmDownloads.angularNpmDownloads().subscribe((res: any) => {
      let angularDownloads = res.downloads

      this._npmDownloads.reactNpmDownloads().subscribe((res: any) => {
        let reactDownloads = res.downloads

        this._npmDownloads.vueNpmDownloads().subscribe((res: any) => {
          let vueDownloads = res.downloads

          this.chart = new Chart('ncanvas', {
            type: 'doughnut',
            data: {
              labels: ['React', 'Vue', 'Angular'],
              datasets: [
                {
                  label: '# of Votes',
                  data: [reactDownloads, vueDownloads, angularDownloads],
                  backgroundColor: [
                    '#2296F3',
                    '#F44335',
                    '#FFCA28',
                  ],
                },
              ],
            },
          })
        })
      })
    })
  }
}
