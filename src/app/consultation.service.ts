import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ConsutationtimeDto } from './consultation/consultationlist/consultationdto';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {



  constructor(private http: HttpClient)  { }
  getconsultation(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/consultation');
  }
  oneditconsultation(id: number) {
    return this.http.get<any>(`http://localhost:3000/consultation/${id}`);
  }
  

  private consutationData: BehaviorSubject<ConsutationtimeDto []> = new BehaviorSubject<ConsutationtimeDto []>([]);

  private consultationtData$:Observable<ConsutationtimeDto []> = this.consutationData.asObservable()

  
    

  public getConsultationData() {
    return this.consultationtData$;
  }
  
public searchConsutation(data:ConsutationtimeDto []) {
  this.consutationData.next(data);

}


public sendconsultationData(data:ConsutationtimeDto []) {
  this.consutationData.next(data);

}
private baseUrl = 'http://localhost:3000/consultation';


createconsultation(consultation: any) {
  return this.http.post(`${this.baseUrl}`,consultation);
}
create_consultations(formData: any) {
  console.log("executed")
  return this.http.post(`${this.baseUrl}`,formData);
  
}
upadteconsultation(con_id: number, consultation: any) {
  return this.http.patch(`http://localhost:3000/consultation/doctor/${con_id}`, consultation)
}

SessionSearch(ConsultationSessionSearch: string) {
  let url = `http://localhost:3000/consultation`;
  
  if (ConsultationSessionSearch && ConsultationSessionSearch.length > 0) {
    url += `?ConsultationSessionSearch=${ConsultationSessionSearch}`;
  }


  this.http.get<ConsutationtimeDto[]>(url).subscribe((apiResponseData: ConsutationtimeDto[]) => {
    this. sendconsultationData(apiResponseData);
    console.log("request send sucessfilly");
  });}


DaySearch(ConsultationDaySearch: string) {
  let url = `http://localhost:3000/consultation`;
  
  if (ConsultationDaySearch && ConsultationDaySearch.length > 0) {
    url += `?ConsultationDaySearch=${ConsultationDaySearch}`;
  }


  this.http.get<ConsutationtimeDto[]>(url).subscribe((apiResponseData: ConsutationtimeDto[]) => {
    this. sendconsultationData(apiResponseData);
    console.log("request send sucessfilly");
  });
}


DateSearch(ConsultationDateSearch: string) {
  let url = `http://localhost:3000/consultation`;
  
  if (ConsultationDateSearch && ConsultationDateSearch.length > 0) {
    url += `?ConsultationDateSearch=${ConsultationDateSearch}`;
  }


  this.http.get<ConsutationtimeDto[]>(url).subscribe((apiResponseData: ConsutationtimeDto[]) => {
    this. sendconsultationData(apiResponseData);
    console.log("request send sucessfilly");
  });
}

update_consultations ( formData: any,doc_id:number) {
  console.log("executed")
  return this.http.patch(`${this.baseUrl}/${doc_id}`,formData);
 
}
 
}
