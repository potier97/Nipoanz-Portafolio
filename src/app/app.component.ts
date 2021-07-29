import { ViewportScroller } from '@angular/common';
import { Component, OnInit, } from '@angular/core';
import Typed from 'typed.js';
import { TypedOptions } from 'typed.js';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NPA PORTAFOLIO';
  
  copyProjectsList: any = [];
  projectsList = [
    {
      id: 0,
      name: "App de Tareas",
      image: "../assets/img/mongoTask.png",
      titleImage: "mongoTask",
      tipo: "web", 
      urlProject: "https://task.nipoanz.com/", 
      urlGit: "https://github.com/potier97/TasksAngularMongo/tree/master", 
    },
    {
      id: 1,
      name: "Localstorage",
      image: "../assets/img/localStorage.png", 
      titleImage: "LocalstorageTask",
      tipo: "web", 
      urlProject: "https://localstorage.nipoanz.com/", 
      urlGit: "https://github.com/potier97/angularTaskLocalStorage/tree/master", 
    },
    {
      id: 2,
      name: "Angular Api",
      image: "../assets/img/angularApi.png", 
      titleImage: "apiApp",
      tipo: "web", 
      urlProject: "https://apiangular.nipoanz.com/", 
      urlGit: "https://github.com/potier97/simpleApiAngular/tree/master", 
    },
    {
      id: 3,
      name: "Products App",
      image: "../assets/img/products.png", 
      titleImage: "productsReactApp",
      tipo: "web", 
      urlProject: "https://products.nipoanz.com/", 
      urlGit: "https://github.com/potier97/PRODUCTS-APP/tree/master", 
    },
    {
      id: 4,
      name: "Pay Dashboard",
      image: "../assets/img/payDash.png",  
      titleImage: "payCoApp",
      tipo: "web", 
      urlProject: "https://pay.nipoanz.com/", 
      urlGit: "https://github.com/potier97/payDash/tree/master", 
    },
    {
      id: 5,
      name: "Gta Landing",
      image: "../assets/img/gta.png",  
      titleImage: "gtaLanding",
      tipo: "web", 
      urlProject: "http://gta.nipoanz.com/", 
      urlGit: "https://github.com/potier97/simpleLandingPage", 
    },
    {
      id: 6,
      name: "Iot Dashboard",
      image: "../assets/img/iotCultivos.png",     
      titleImage: "iotDashboard",
      tipo: "iot", 
      urlProject: "http://iot.nipoanz.com/", 
      urlGit: "https://github.com/potier97/AgroIot", 
    },
    {
      id: 7,
      name: "Starbucks",
      image: "../assets/img/starbucks.png",    
      titleImage: "starbucksApp",
      tipo: "web", 
      urlProject: "http://starbucks.nipoanz.com/", 
      urlGit: "https://github.com/potier97/webBoostrap4", 
    },
    {
      id: 8,
      name: "Todo App",
      image: "../assets/img/todo.png",    
      titleImage: "starbucksApp",
      tipo: "web", 
      urlProject: "https://todo.nipoanz.com/", 
      urlGit: "https://github.com/potier97/TODO-APP/tree/master", 
    },
    {
      id: 9,
      name: "Swagger Api",
      image: "../assets/img/swaggerApi.png",   
      titleImage: "swaggerApi",
      tipo: "web", 
      urlProject: "https://swagger-node-api.herokuapp.com/", 
      urlGit: "https://github.com/potier97/SwaggerSimpleApi", 
    },
    {
      id: 10,
      name: "Login App",
      image: "../assets/img/login.png",   
      titleImage: "angularLogin",
      tipo: "web", 
      urlProject: "https://login.nipoanz.com/", 
      urlGit: "https://github.com/potier97/techBank-frontend", 
    },
    {
      id: 11,
      name: "Form",
      image: "../assets/img/form.png",   
      titleImage: "htmlForm",
      tipo: "web", 
      urlProject: "https://potier97.github.io/landingTypescript/", 
      urlGit: "https://github.com/potier97/landingTypescript", 
    },
    {
      id: 12,
      name: "Bici Red",
      image: "../assets/img/bicis.png",   
      titleImage: "biciRed",
      tipo: "web", 
      urlProject: "https://bicired.herokuapp.com/", 
      urlGit: "https://github.com/potier97/RedBicis", 
    },
    {
      id: 13,
      name: "Wsn Micropython",
      image: "../assets/img/microPython.jpeg", 
      titleImage: "micropythonWsn",
      tipo: "iot", 
      urlProject: "https://github.com/potier97/WSN-MICROPYTHON", 
      urlGit: "https://github.com/potier97/WSN-MICROPYTHON", 
    }
  ]  


  

  filterProjects: string = 'all';

  constructor(private viewportScroller: ViewportScroller) { }
 
  ngOnInit(): void {
    this.copyProjectsList = this.projectsList;
    const options: TypedOptions = {
      strings: ['Contáctame'],
      typeSpeed: 250,
      backSpeed: 250,
      startDelay: 250, 
      fadeOut: true,
      fadeOutDelay: 250,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };
    new Typed('.messageTyped', options); 

    options.strings = ["Portafolio"]
    new Typed('.portfolioTyped', options); 

    options.strings = ["Servicios"]
    new Typed('.servicesTyped', options); 

    options.strings = ["Habilidades"]
    new Typed('.aboutTyped', options); 
    

    
    
  }

  gotoAbout(): void { 
    const header: HTMLElement = document.getElementById('header')!;
    let offset = header.offsetHeight;
    if (!header.classList.contains('header-scrolled'))  offset -= 20
    const elementId: HTMLElement = document.getElementById("about")!;
    const position = elementId.offsetTop
    //console.log(position)
    this.viewportScroller.scrollToPosition([0, position - offset]);  
  }

  selectProjects(filter : string): void {
    console.log("Filer -> ", filter); 
    if(filter === "all"){
      this.filterProjects = "all"
      this.projectsList = this.copyProjectsList;
    }else if(filter === "web"){
      this.filterProjects = "web"
      this.projectsList = this.copyProjectsList.filter((p: any) => p.tipo === "web");
    }else{
      this.filterProjects = "iot"
      this.projectsList = this.copyProjectsList.filter((p: any) => p.tipo === "iot");
    }
 
  }


}
