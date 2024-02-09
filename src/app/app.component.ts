
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NavService } from './core/services/nav.service';
import { Subscription } from 'rxjs';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private userSub: Subscription;
  isAuthenticated = false;
  isPhonePortrait = false;
  isTabletPortrait = false;

  constructor(
    private navService: NavService, 
    private responsive: BreakpointObserver,
    private authService: AuthService
  ) {
    this.authService.autoLogin();
  }
  
  ngOnInit(): void {
    // TODO: replace breakpoint enums with custom breakpoints
    this.responsive.observe([Breakpoints.HandsetPortrait,Breakpoints.TabletPortrait])
      .subscribe(result => {
        this.isPhonePortrait = false;
        this.isTabletPortrait = false;
        this.navService.toggleNav(true);
        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.navService.toggleNav(false);
          this.navService.togglePhonePortrait(true);
        } else if (breakpoints[Breakpoints.TabletPortrait]) {
          this.navService.toggleNav(true);
          this.navService.toggleTabletPortrait(true);
        } else {
          this.navService.toggleNav(true);
          this.navService.isWebPortrait();
        }
      });
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
}
