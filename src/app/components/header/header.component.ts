import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  statusMenu: boolean = false;
  homeStatus: boolean = false;
  aboutStatus: boolean = false;
  serviesStatus: boolean = false;
  portfolioStatus: boolean = false;
  contactStatus: boolean = false;

  @ViewChild('navegationElement') navegationElement:ElementRef; 

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    const header: HTMLElement = document.getElementById('header')!  
    this.validateSection(header.scrollTop + 200); 
  }

  setActiveLink(link: string): void {
    if(link === 'hero'){
      this.homeStatus = true;
      this.aboutStatus = false;
      this.serviesStatus = false;
      this.portfolioStatus = false;
      this.contactStatus = false;
    }else if(link === 'about'){
      this.homeStatus = false;
      this.aboutStatus = true;
      this.serviesStatus = false;
      this.portfolioStatus = false;
      this.contactStatus = false;
    }else if(link === 'services'){
      this.homeStatus = false;
      this.aboutStatus = false;
      this.serviesStatus = true;
      this.portfolioStatus = false;
      this.contactStatus = false;
    }else if(link === 'portfolio'){
      this.homeStatus = false;
      this.aboutStatus = false;
      this.serviesStatus = false;
      this.portfolioStatus = true;
      this.contactStatus = false;
    }else {
      this.homeStatus = false;
      this.aboutStatus = false;
      this.serviesStatus = false;
      this.portfolioStatus = false;
      this.contactStatus = true;
    }
  }

  validateSection(position: number): void {
    
    const hero: HTMLElement = document.getElementById('hero')!   
    const heroTop = hero.offsetTop;
    const heroHeight = hero.offsetHeight;
    //console.log("about Top: ", heroTop); 
    const about: HTMLElement = document.getElementById('about')!   
    const aboutTop = about.offsetTop
    const aboutHeight = about.offsetHeight;
    //console.log("about Top: ", aboutTop);  
    const services: HTMLElement = document.getElementById('services')!  
    const servicesTop = services.offsetTop
    const servicesHeight = services.offsetHeight;
    //console.log("services Top: ", servicesTop);   
    const portfolio: HTMLElement = document.getElementById('portfolio')!   
    const portfolioTop = portfolio.offsetTop
    const portfolioHeight = portfolio.offsetHeight;
    //console.log("portfolio Top: ", portfolioTop);   
    const contact: HTMLElement = document.getElementById('contact')!  
    const contactTop = contact.offsetTop
    const contactHeight = contact.offsetHeight;   

    if(position >= heroTop && position <= (heroTop + heroHeight)){
      this.homeStatus = true;
    }else{
      this.homeStatus = false;
    }

    if(position >= aboutTop && position <= (aboutTop + aboutHeight)){
      this.aboutStatus = true;
    }else{
      this.aboutStatus = false;
    }

    if(position >= servicesTop && position <= (servicesTop + servicesHeight)){
      this.serviesStatus = true;
    }else{
      this.serviesStatus = false;
    }

    if(position >= portfolioTop && position <= (portfolioTop + portfolioHeight)){
      this.portfolioStatus = true;
    }else{
      this.portfolioStatus = false;
    }

    if(position >= contactTop && position <= (contactTop + contactHeight)){
      this.contactStatus = true;
    }else{
      this.contactStatus = false;
    } 
  }
 
  @HostListener('window:scroll', ['$event'])
  doSomethingOnScroll( data: any) {
    //console.log("window scroll: ", data); 
    const scrollOffset = data.srcElement.children[0].scrollTop;
    //console.log("window scroll: ", scrollOffset);   
    const position: number = scrollOffset + 200; 
    
    this.validateSection(position); 

    const header: HTMLElement = document.getElementById('header')!
    //let offset = header.offsetHeight; 
    if (header) { 
        if (scrollOffset > 100) {
          header.classList.add('header-scrolled')
        } else {
          header.classList.remove('header-scrolled')
        } 
    } 
  }  

  onClickMenu(): void {
    this.statusMenu = !this.statusMenu; 
  }

  onChangeTopic(toView: string): void {
    //console.log(toView); 
    this.setActiveLink(toView);
    if(this.statusMenu) this.statusMenu = false; 
    const header: HTMLElement = document.getElementById('header')!;
    let offset = header.offsetHeight;
    if (!header.classList.contains('header-scrolled'))  offset -= 20
    const elementId: HTMLElement = document.getElementById(toView)!;
    const position = elementId.offsetTop
    //console.log(position)
    this.viewportScroller.scrollToPosition([0, position - offset]);  
  }


}
