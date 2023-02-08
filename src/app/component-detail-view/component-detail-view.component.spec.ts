import { ComponentDetailViewComponent } from './component-detail-view.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';

describe('ComponentDetailViewComponent', () => {
  let component: ComponentDetailViewComponent;
  let dataService: DataService;
  let route: ActivatedRoute;

  beforeEach(() => {
    dataService = new DataService();
    route = {
      queryParams: of({
        title: 'title',
        code: 'code',
        description: 'description',
      }),
    } as any;
    component = new ComponentDetailViewComponent(route, dataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dataService.addNewComponent() when addComponent() is called', () => {
    spyOn(dataService, 'addNewComponent');
    component.addComponent({});
    expect(dataService.addNewComponent).toHaveBeenCalled();
  });
});
