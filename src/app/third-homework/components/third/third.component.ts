import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core'

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
})
export class ThirdComponent implements OnInit {
  bgColor: string = ''
  inputColor: string = ''
  @ViewChild('button', { static: false })
  buttonTemplate: any
  @ViewChild('nobutton', { static: false })
  noButtonTemplate: any
  outlet: TemplateRef<any> | undefined

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.outlet = this.buttonTemplate
  }

  setBackground() {
    this.bgColor = this.inputColor
  }

  changeTemplate() {
    if (this.outlet == this.noButtonTemplate) {
      this.outlet = this.buttonTemplate
    } else {
      this.outlet = this.noButtonTemplate
    }
  }
}
