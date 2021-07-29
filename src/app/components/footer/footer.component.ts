import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  doSomethingOnScroll( data: any) {
    const scrollOffset = data.srcElement.children[0].scrollTop;
    //console.log("window scroll: ", scrollOffset);   
    const backtotop: HTMLElement = document.getElementById('buttom-to-top')!
    //let offset = header.offsetHeight; 
    if (backtotop) { 
        if (scrollOffset > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        } 
    } 
  } 

}
