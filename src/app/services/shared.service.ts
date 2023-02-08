import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private showSecondComponent = new BehaviorSubject(false);
  showSecondComponent$ = this.showSecondComponent.asObservable();

  constructor(private router: Router) {}

  toggleShowSecondComponent() {
    this.showSecondComponent.next(!this.showSecondComponent.value);
  }

  closeDetailView() {
    this.router.navigate(['/'], {
      queryParams: {
        title: null,
        code: null,
        description: null,
        showDetailView: null,
        addComponetbutton: null,
      },
      queryParamsHandling: 'merge',
    });
  }
}
