import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent {
  data: { title: string; code: string; description: string }[] = [];

  constructor(
    private sharedService: SharedService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dataService.dataAddedComponents.subscribe((data) => {
      this.data = data;
    });
  }

  showDetailView(
    item: { title: string; code: string; description: string },
    showDetailView: boolean
  ) {
    this.router.navigate(['/detailView'], {
      queryParams: {
        title: item.title,
        code: item.code,
        description: item.description,
        showDetailView: showDetailView,
      },
    });
  }

  closeDetailView() {
    this.sharedService.closeDetailView();
  }

  addComponent() {
    this.sharedService.toggleShowSecondComponent();
  }
}
