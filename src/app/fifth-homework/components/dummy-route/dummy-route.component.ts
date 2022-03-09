import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-dummy-route',
  templateUrl: './dummy-route.component.html',
  styleUrls: ['./dummy-route.component.scss'],
})
export class DummyRouteComponent implements OnInit {
  id!: number
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parameters) => {
      this.id = parameters['id']
    })
  }
}
