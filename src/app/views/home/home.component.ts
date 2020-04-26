import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/services/personas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Claudio-app';
  personas = [];

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
    this.personasService.listarPersonas().subscribe(resp=>{
      this.personas = resp["personas"];
      console.log(this.personas);
    });
  }


}
