import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-picker',
  templateUrl: './component-picker.component.html',
  styleUrls: ['./component-picker.component.scss'],
})
export class ComponentPickerComponent {
  data: { title: string; code: string; description: string }[] = [];
  showSecondComponent: boolean = false;
  subscription: Subscription = new Subscription();

  selectedComponent: any;

  constructor(
    private sharedService: SharedService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.sharedService.showSecondComponent$.subscribe(
      (showSecondComponent: boolean) => {
        this.showSecondComponent = showSecondComponent;
      }
    );

    this.dataService.dataAvailableComponents.subscribe((data) => {
      this.data = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  showDetailView(
    item: { title: string; code: string; description: string },
    showDetailView: boolean,
    addComponetbutton: boolean
  ) {
    this.router.navigate(['/detailView'], {
      queryParams: {
        title: item.title,
        code: item.code,
        description: item.description,
        showDetailView: showDetailView,
        addComponetbutton: addComponetbutton,
      },
    });
  }

  closeDetailView() {
    this.sharedService.closeDetailView();
  }
}
