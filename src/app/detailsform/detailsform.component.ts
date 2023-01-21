import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-detailsform',
  templateUrl: './detailsform.component.html',
  styleUrls: ['./detailsform.component.css']
})
export class DetailsformComponent {
  applicationForm!: FormGroup;
  contacts:boolean=false;
  courses:boolean=false;
  projects:boolean=false;
  skill:boolean=false;
  exp:boolean=false;
  generalinformations:boolean=false;
  constructor( public service: BackendApiService, public toastr: ToastrService, public router: Router ){}

  ngOnInit(){
    this.applicationForm = new FormGroup({
      'fullname': new FormControl(''),
      'headline': new FormControl(''),
      'companyname': new FormControl(''),
      'position': new FormControl(''),
      'dateofjoining': new FormControl(''),
      'workdescription': new FormControl(''),
      'usedskills': new FormControl(''),
      'skillsname': new FormControl(''),
      'yoe': new FormControl(''),
      'projecttitle': new FormControl(''),
      'projecturl': new FormControl(''),
      'proejctdescritpion': new FormControl(''),
      'proejctdurations': new FormControl(''),
      'name': new FormControl(''),
      'issuingorganisation': new FormControl(''),
      'certificate': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl(''),
      'skypeid': new FormControl(''),

    });

    this.getAllapplication();
  }


  submitApplicationform(){
    console.log(this.applicationForm.value);
    if(this.applicationForm.valid){
      let obj={
        fullnames: this.applicationForm.value.fullname,
        headline: this.applicationForm.value.headline,
        companyname: this.applicationForm.value.companyname,
        position: this.applicationForm.value.position,
        dateofjoining: this.applicationForm.value.dateofjoining,
        workdescription: this.applicationForm.value.workdescription,
        usedskills: this.applicationForm.value.usedskills,
        skillsname: this.applicationForm.value.skillsname,
        yoe: this.applicationForm.value.yoe,
        projecttitle: this.applicationForm.value.projecttitle,
        projecturl: this.applicationForm.value.projecturl,
        projectdescription: this.applicationForm.value.projectdescription,
        projectdurations: this.applicationForm.value.projectdurations,
        name: this.applicationForm.value.name,
        issuingorganisation: this.applicationForm.value.issuingorganisation,
        certificate: this.applicationForm.value.certificate,
        email: this.applicationForm.value.email,
        phone: this.applicationForm.value.phone,
        skypeid: this.applicationForm.value.skypeid
      }
      console.log(obj);
      this.service.addNewApplication(obj).subscribe(res=>{
        try{
          console.log("Successfully Inserted Data");
          this.toastr.success("Application Form Successfully Submited");
        } catch(err){
          console.log(err);
          this.toastr.error("!!Error, Application form not submited");
        }
      });
    }
    this.applicationForm.reset();
  }

  allApplication:any[]=[];
  getAllapplication(){
    this.service.getApplication().subscribe(res=>{
      try{
        console.log("get all data",res);
        this.allApplication.push(res);
      } catch(err){
        console.log(err);
      }
    })
    console.log(this.allApplication)
  }

  generalInformation(){
    this.generalinformations = true;
    this.exp = false;
    this.skill=false;
    this.projects=false;
    this.courses=false;
    this.contacts=false;
  }

  experience(){
    this.exp = true;
    this.generalinformations = false;
    this.skill=false;
    this.projects=false;
    this.courses=false;
    this.contacts=false;

  }

  skills(){
    this.skill=true;
    this.generalinformations = false;
    this.exp = false;
    this.projects=false;
    this.courses=false;
    this.contacts=false;
  }

  project(){
    this.projects=true;
    this.generalinformations = false;
    this.exp = false;
    this.skill=false;
    this.courses=false;
    this.contacts=false;
  }

  course(){
    this.courses=true;
    this.generalinformations = false;
    this.exp = false;
    this.skill=false;
    this.projects=false;
    this.contacts=false;
  }

  contact(){
    this.contacts=true;
    this.generalinformations = false;
    this.exp = false;
    this.skill=false;
    this.projects=false;
    this.courses=false;
  }
  
  loginPage(){
    this.router.navigate(['/signin']);
  }
}
