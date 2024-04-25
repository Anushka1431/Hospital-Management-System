import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
  patients : Patient[]=[]; 

  constructor(private patientService: PatientService,
    private router: Router) { }

    ngOnInit(): void {
      this.getPatients();
      
    }
    private getPatients(){
      this.patientService.getPatientList().subscribe(data => { this.patients = data; 
      });
    }
  
    viewPatient(id: number) {
  
      this.router.navigate(['viewpatient', id]);
  
    }
    updatePatient(id: number) {
  
      this.router.navigate(['updatepatient', id]);
  
    }
   
  
    
  
  
}
