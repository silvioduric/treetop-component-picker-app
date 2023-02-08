import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-component-detail-view',
  templateUrl: './component-detail-view.component.html',
  styleUrls: ['./component-detail-view.component.scss'],
})
export class ComponentDetailViewComponent {
  title?: string;
  code?: string;
  description?: string;
  showDetailView = false;
  addComponetbutton = false;
  data: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    if (
      this.route.snapshot.queryParamMap.get('title') &&
      this.route.snapshot.queryParamMap.get('title') !== ''
    ) {
      this.showDetailView = true;
    } else {
      this.showDetailView = false;
    }

    this.route.queryParams.subscribe((params) => {
      this.data = params;
      this.title = params['title'];
      this.code = params['code'];
      this.description = params['description'];

      if (params['addComponetbutton']) {
        this.addComponetbutton = true;
      } else {
        this.addComponetbutton = false;
      }
    });
  }

  addComponent(data: any) {
    this.dataService.addNewComponent(data);
  }
}
