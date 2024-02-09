import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private appDrawerSub: Subscription;
  private tabletPortraitSub: Subscription;
  isAppDrawerOpen=false;
  isTabletPortrait = false;

  constructor(private navService: NavService) {}

  ngOnInit(): void {
    this.appDrawerSub = this.navService.appDrawer$.subscribe(appDrawer => {
      this.isAppDrawerOpen = appDrawer;
    });
    this.tabletPortraitSub = this.navService.tabletPortrait$.subscribe(val => {
      this.isTabletPortrait = val;
    });
  }

  toggleNav(val: boolean) {
    this.navService.toggleNav(!this.isAppDrawerOpen);
  }
}
