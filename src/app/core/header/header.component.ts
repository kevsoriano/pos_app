import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private appDrawerSub : Subscription;
  isAppDrawerOpen = true;
  private phonePortraitSub: Subscription;
  isPhonePortrait = false;
  private tabletPortraitSub: Subscription;
  isTabletPortrait = false;
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(
    private navService: NavService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.appDrawerSub = this.navService.appDrawer$.subscribe(appDrawer => {
      this.isAppDrawerOpen = appDrawer;
    });
    this.phonePortraitSub = this.navService.phonePortrait$.subscribe(val => {
      this.isPhonePortrait = val;
    });
    this.tabletPortraitSub = this.navService.tabletPortrait$.subscribe(val => {
      this.isTabletPortrait = val;
    });
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  toggleNav() {
    this.navService.toggleNav(!this.isAppDrawerOpen);
  }
}
