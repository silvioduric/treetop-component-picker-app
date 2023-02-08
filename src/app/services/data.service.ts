import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private availableComponents = new BehaviorSubject<
    { title: string; code: string; description: string }[]
  >([
    {
      title: 'Component 1',
      code: 'C1',
      description: 'This is the first component and has code C1.',
    },
    {
      title: 'Component 2',
      code: 'C2',
      description: 'This is the second component and has code C2.',
    },
    {
      title: 'Component 3',
      code: 'C3',
      description: 'This is the third component and has code C3.',
    },
    {
      title: 'Component 4',
      code: 'C4',
      description: 'This is the fourth component and has code C4.',
    },
    {
      title: 'Component 5',
      code: 'C5',
      description: 'This is the fifth component and has code C5.',
    },
    {
      title: 'Component 6',
      code: 'C6',
      description: 'This is the sixth component and has code C6.',
    },
    {
      title: 'Component 7',
      code: 'C7',
      description: 'This is the seventh component and has code C7.',
    },
    {
      title: 'Component 8',
      code: 'C8',
      description: 'This is the eighth component and has code C8.',
    }
  ]);
  dataAvailableComponents = this.availableComponents.asObservable();


  private addedComponents = new BehaviorSubject<
    { title: string; code: string; description: string }[]
  >([
    {
      title: 'Component 1',
      code: 'C1',
      description: 'This is the first component and has code C1.',
    },
    {
      title: 'Component 2',
      code: 'C2',
      description: 'This is the second component and has code C2.',
    },
  ]);
  dataAddedComponents = this.addedComponents.asObservable();

  constructor() {}

  addNewComponent(item: { title: string; code: string; description: string }) {
    this.addedComponents.next([...this.addedComponents.getValue(), item]);
  }
}
