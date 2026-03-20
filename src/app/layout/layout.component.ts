import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ILearnTopic, learnTopics } from '../route-util';
import { Location } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  styleUrl: './layout.component.scss',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
  ]
})
export class LayoutComponent implements OnInit {

 learnTopics = signal<ILearnTopic[]>([]);
 loc = inject(Location);

 constructor() {
  effect(() => {
    console.log('Current route:', this.loc);
  });
 }


  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit():void{
      this.learnTopics.update(() => learnTopics.filter(i=>!i.name.toLowerCase().includes('authentication')).map(topic => {
        const route = this.loc.path();
        return {...topic, isActive: false || (topic.route.toLowerCase()).includes(route.toLowerCase())};
      }));

    }

}
