import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DoctorsDto } from './doctor/doctordto';



@Injectable({
  providedIn: 'root'
})

export class DoctorService {
 
  ConsultationofDoctor(doc_id: any) {
    throw new Error('Method not implemented.');
  }
  
  adduser(id: number)  {
    

  }

  
  private baseUrl = 'http://localhost:3000/doctor';
  createDoctor(doctorData: any): Observable<any>  {
   
    return this.http.post(`${this.baseUrl}`,doctorData);
  }
  oneditdoctor(doc_id: any) {
    return this.http.get<any>(`http://localhost:3000/doctor/${doc_id}`);
  }
  
  private doctorData:BehaviorSubject<DoctorsDto[]> = new BehaviorSubject<DoctorsDto[]>([]);
  private doctorData$:Observable<DoctorsDto[]> = this.doctorData.asObservable()

  

  constructor(private http: HttpClient) { }

  
  public sendDoctorData(data:DoctorsDto[]) {
    this.doctorData.next(data);

  }
 

  public searchDoctor(searchText: string) {
    let url = `http://localhost:3000/doctor`;
  
    if (searchText && searchText.length > 0) {
      url += `?searchText=${searchText}`;
    }
  
    this.http.get<DoctorsDto[]>(url).subscribe((apiResponseData: DoctorsDto[]) => {
      this.sendDoctorData(apiResponseData);
    });
  }
  
  public getDoctorData() {
    return this.doctorData$;
  }


  upadtedoctor(id:number, doctor: any) : Observable<any> {
    console.log(id)
    return this.http.patch(`http://localhost:3000/doctor/${id}`, doctor);
  }
 
  selectDoctor(doc_id: number) {
    return this.http.get(`http://localhost:3000/doctor/${doc_id}`);
  }
  getDoctors() {
    return this.http.get<any[]>('http://localhost:3000/doctor');
  }
  
  
  
  public searchDoctorname(docnamesearch: string) {
    let url = `http://localhost:3000/doctor`;
  
    if (docnamesearch && docnamesearch.length > 0) {
      url += `?docnamesearch=${docnamesearch}`;
    }
  
  
    this.http.get<DoctorsDto[]>(url).subscribe((apiResponseData: DoctorsDto[]) => {
      this.sendDoctorData(apiResponseData);
      console.log("request send sucessfilly");
    });
  }
  
  public searchDoctorspecialist(specalist: string) {
   
    let url = `http://localhost:3000/doctor`;
  
    if (specalist && specalist.length > 0) {
      url += `?specalist=${specalist}`;
    }
  
  
    this.http.get<DoctorsDto[]>(url).subscribe((apiResponseData: DoctorsDto[]) => {
      
      this.sendDoctorData(apiResponseData);
      
    });
  
 
  }

  getdocotorConsultations(doc_id: any) {
        return this.http.get(`http://localhost:3000/doctor/${doc_id}`);
  }
}