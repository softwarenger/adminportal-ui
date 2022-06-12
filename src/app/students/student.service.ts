import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddStudentRequest } from '../models/api-models/add-student-request.model';
import { student } from '../models/api-models/student.model';
import { updateStudentRequest } from '../models/api-models/update-student-request.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl= 'https://localhost:44331';

  constructor(private httpClient:HttpClient) {}

  getStudents():Observable<student[]>{

    return this.httpClient.get<student[]>(this.baseApiUrl +'/students');
  }

  getStudent(studentId:string):Observable<student>{

    return this.httpClient.get<student>(this.baseApiUrl +'/students/'+studentId);
  }

  updateStudent(studentId:string,studentRequest:student):Observable<student>
  {
    const updateStudentRequest:updateStudentRequest={

      firstName:studentRequest.firstName,
      lastName:studentRequest.lastName,
      dateOfBirth:studentRequest.dateOfBirth,
      mobile:studentRequest.mobile,
      email:studentRequest.email,
      genderId:studentRequest.genderId,
      physicalAddress:studentRequest.address.physicalAddress,
      postalAddress:studentRequest.address.postalAddress
    }
     return this.httpClient.put<student>(this.baseApiUrl +'/students/'+studentId,updateStudentRequest);
  }

  deleteStudent(studentId:string):Observable<student>
  {
    return this.httpClient.delete<student>(this.baseApiUrl +'/students/' +studentId);

  }

  addStudent(studentRequest:student):Observable<student>{
    const addStudentRequest:AddStudentRequest={

      firstName:studentRequest.firstName,
      lastName:studentRequest.lastName,
      dateOfBirth:studentRequest.dateOfBirth,
      mobile:studentRequest.mobile,
      email:studentRequest.email,
      genderId:studentRequest.genderId,
      physicalAddress:studentRequest.address.physicalAddress,
      postalAddress:studentRequest.address.postalAddress
    };

     return this.httpClient.post<student>(this.baseApiUrl +'/students/add',addStudentRequest);

  }

}
