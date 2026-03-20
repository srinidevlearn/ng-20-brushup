import { Directive } from '@angular/core';

@Directive({
  selector: 'router-outlet', // Matches the tag in your HTML
  standalone: true           // Crucial for standalone components like App
})
export class MockRouterOutlet {}