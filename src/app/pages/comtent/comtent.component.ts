import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-comtent',
  templateUrl: './comtent.component.html',
  styleUrls: ['./comtent.component.css']
})
export class ComtentComponent implements OnInit {
  photoCover:string=''
  contentTitle:string=''
  contentDiscription:string=''
  private id:string|null='0'

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit():void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'))
    this.setvaluesToComponent(this.id)
  }

  setvaluesToComponent(id:string|null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDiscription = result.description
    this.photoCover = result.photoCover

  }


}
