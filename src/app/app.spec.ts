import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { Component } from "@angular/core";
import { MockRouterOutlet } from './fixture/mocks/MockRouter';

@Component({
  selector: 'app-layout', // Must match the selector in App's template
  standalone: true,
  template: '<div>Mock Layout</div>'
})
export class MockLayoutComponent {}


describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })

    .overrideComponent(App, {
      remove: {
        imports: [RouterOutlet,LayoutComponent],
      },
      add: {
        imports: [MockLayoutComponent,MockRouterOutlet],
      },
    })
    .compileComponents();
  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // test('should render title', () => {
  //   const fixture = TestBed.createComponent(App);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, ng-learn-v20');
  // });
});
