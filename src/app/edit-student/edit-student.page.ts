import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.page.html',
  styleUrls: ['./edit-student.page.scss'],
})
export class EditStudentPage implements OnInit {
  public student: Student;
  public myForm: FormGroup;
  private stID: string;
  public validationMessages: object;
  
  constructor(private ar: ActivatedRoute, private fs: StudentService, private fb: FormBuilder, private router: Router) { 
    this.student = {
      controlnumber: "",
      name: "",
      curp: "",
      age: 0,
      nip: 0,
      email: "",
      career: "",
      photo: "",
      id:"",
    }

    this.myForm = this.fb.group({
      /*controlnumber:["", Validators.compose([Validators.minLength(8), Validators.required, Validators.pattern('^[0-9]+$')])],
      name:["", Validators.required],
      curp:["", Validators.compose([Validators.required, Validators.pattern('^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$')])],
      age:[0, Validators.compose([Validators.required, Validators.min(17)])],
      nip:[0, Validators.compose([Validators.required, Validators.min(10)])],
      email:["", Validators.compose([Validators.required, Validators.email])],
      career:["", Validators.required],
      photo:["", Validators.compose([Validators.required])]*/
      controlnumber:["", Validators.compose([Validators.minLength(8), Validators.required, Validators.pattern('^[0-9]+$')])],
      name:["", Validators.required],
      curp:["", Validators.compose([Validators.required, Validators.pattern('^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$')])],
      age:[, Validators.compose([Validators.required, Validators.min(17)])],
      nip:[, Validators.compose([Validators.required, Validators.min(10)])],
      email:["", Validators.compose([Validators.required, Validators.email])],
      career:["", Validators.required],
      photo:["", Validators.compose([Validators.required])]
    });

  }

  ngOnInit() {
    this.ar.queryParams.subscribe(params => {
      this.stID = params.id;
      this.fs.getStudentById(params.id).subscribe(item => {
        this.student = item as Student
      })
    })
  }

  public updateStudent(){
    this.student = {
      controlnumber: this.myForm.controls.controlnumber.value,
      name: this.myForm.controls.name.value,
      curp: this.myForm.controls.curp.value,
      age: this.myForm.controls.age.value,
      nip: this.myForm.controls.nip.value,
      email: this.myForm.controls.email.value,
      career: this.myForm.controls.career.value,
      photo: this.myForm.controls.photo.value,
      id: this.stID
    }

    console.log(this.fs.updateStudent(this.student));
    this.router.navigate(['..']);
  }

}
