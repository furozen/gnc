import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar-settings',
  templateUrl: './toolbar-settings.component.html',
  styleUrls: ['./toolbar-settings.component.scss']
})
export class ToolbarSettingsComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
