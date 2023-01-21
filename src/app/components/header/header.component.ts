import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('dropdownDiv') dropdownDiv!: ElementRef;
  dropdown = false;
  screenWidth = window.innerWidth;

  constructor(private renderer: Renderer2,
    private router: Router) {
  }

  ngOnInit(): void {
    // this.renderer.listen('window', 'click', (e: Event) => {
    //   if (!this.dropdownDiv.nativeElement.contains(e.target)) {
    //     this.dropdown = false;
    //   }
    // });
    this.renderer.listen('window', 'resize', (event) => {
      this.screenWidth = event.target.innerWidth;
    });
  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }
}
