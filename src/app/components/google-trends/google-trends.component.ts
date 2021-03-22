import { Component } from '@angular/core';

@Component({
  selector: 'app-google-trends',
  templateUrl: './google-trends.component.html',
  styleUrls: ['./google-trends.component.css']
})
export class GoogleTrendsComponent {
  loadAPI: Promise<any>;

  constructor() {
    let trends:any;
      this.loadAPI = new Promise((resolve) => {
          this.loadScript();
          resolve(true);
          console.log("div-elm-Tag")

      var divElem = document.getElementById('samp-div');

      trends.embed.renderExploreWidgetTo(divElem,"TIMESERIES", {"comparisonItem":[{"keyword":"React","geo":"","time":"2016-02-17 2021-02-17"},{"keyword":"Vue","geo":"","time":"2016-02-17 2021-02-17"},{"keyword":"Angular","geo":"","time":"2016-02-17 2021-02-17"}],"category":733,"property":""}, {"exploreQuery":"cat=733&date=today%205-y&q=React,Vue,Angular","guestPath":"https://trends.google.com:443/trends/embed/"});
      console.log("div-elm-Tag2")
    });
  }

  public loadScript() {
    var dynamicScripts = ["https://ssl.gstatic.com/trends_nrtr/2431_RC04/embed_loader.js"];
    for (var i = 0; i < dynamicScripts.length; i++) {
      console.log("another thing")
        let node = document.createElement('script');
        node.src = dynamicScripts [i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);

        console.log("Script-Tag",node)
    }
  }
}

