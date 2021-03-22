import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {GithubStarsService} from './github-stars.service'

@Component({
  selector: 'app-github-stars',
  templateUrl: './github-stars.component.html',
  styleUrls: ['./github-stars.component.css']
})

export class GithubStarsComponent implements OnInit {

  chart: any;

    constructor(private _githubStars: GithubStarsService) {}

  ngOnInit(): void {
    this._githubStars.angularGithubStars().subscribe((res: any) => {
      let angularStars = res.stargazers_count

      this._githubStars.reactGithubStars().subscribe((res: any) => {
        let reactStars = res.stargazers_count

        this._githubStars.vueGithubStars().subscribe((res: any) => {
          let vueStars = res.stargazers_count

          this.chart = new Chart('scanvas', {
            type: 'doughnut',
            data: {
              labels: ['React', 'Vue', 'Angular'],
              datasets: [
                {
                  label: '# of Votes',
                  data: [reactStars, vueStars, angularStars],
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
