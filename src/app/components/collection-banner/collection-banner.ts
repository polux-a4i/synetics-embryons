import { Component } from '@angular/core';

interface Collection {
    id: string
    type: string
    date: string
    location: string
    donor: string
    owner: string
    bull: string
}

@Component({
  selector: 'syn-collection-banner',
  imports: [],
  templateUrl: './collection-banner.html',
  styleUrl: './collection-banner.scss'
})
export class CollectionBanner {
    data: Collection = {
        id: "35025101411",
        type: "oocyte collection",
        date: "10-09-2025",
        location: "FR44201084",
        donor: "FR2234789916 – VITAA – 3695 – 66",
        owner: "FR44015966",
        bull: "US003209722037 – FIRSTCUT – 15"
    }
}
