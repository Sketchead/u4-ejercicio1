import { Injectable } from '@angular/core';
import { Student } from "../models/student";
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];

  constructor(private firestore: AngularFirestore) {
    this.students = [];
  }

  public getStudents(): Observable<Student[]>{
    //return this.students;
    return this.firestore.collection('students').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Student;
          const id = a.payload.doc.id;
          return {id,...data};
        });
      }));
  }

  public removeStudent(id: string){
    /* this.students.splice(pos, 1);
    return this.students; */
    this.firestore.collection('students').doc(id).delete();
  }

  public getStudentById(id: string){
    /* let item: Student = this.students.find((student)=> {
      return student.controlnumber===controlnumber;
    });
    return item; */
    return this.firestore.collection('students').doc(id).valueChanges();
  }

  public newStudent(student: Student) {
    this.firestore.collection('students').add(student);
  }

  public updateStudent(student: Student){
    this.firestore.collection('students').doc(student.id).set(student);
  }

  /*
  Para hacer query desde  
  this.firestore.collection('tareas',ref => ref.where('completed', '==', false)).snapshotChanges();
  this.firestore.collection('tareas').doc(id).update({completed:false}) */
}
