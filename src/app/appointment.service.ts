import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppointmentDto, Consultation } from './appointment/appointment-list/appointmentdto';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 
  
 


  constructor(private http: HttpClient)  { }
  getAppointment(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/appoinment');
  }
  oneditappointment(id: number) {
    return this.http.get<any>(`http://localhost:3000/appoinment/${id}`);
  }
  

  private appointmentData: BehaviorSubject<AppointmentDto[]> = new BehaviorSubject<AppointmentDto[]>([]);

  private appointmentData$:Observable<AppointmentDto[]> = this.appointmentData.asObservable()

  

  
public sendDoctorData(data:AppointmentDto[]) {
  this.appointmentData.next(data);

}

public   getAppointments() {
  return this.appointmentData$;
}



public  searchAppointments(searchText: string) {
  let url = `http://localhost:3000/appoinment`;

  if (searchText && searchText.length > 0) {
    url += `?searchText=${searchText}`;
  }

  this.http.get<AppointmentDto[]>(url).subscribe((apiResponseData: AppointmentDto[]) => {
    this.sendDoctorData(apiResponseData);
  });
}



private baseUrl = 'http://localhost:3000/appoinment';
createAppointment(formData: any) {
  return this.http.post(`${this.baseUrl}`,formData);
}
  
  
  upadteappointment(id: number, appoinment: any) {
    return this.http.patch(`http://localhost:3000/doctor/${id}`, appoinment)
  }
  DoctorSearch(AppointmentDoctorSearch: string) {
    let url = `http://localhost:3000/appoinment`;

    if (AppointmentDoctorSearch && AppointmentDoctorSearch.length > 0) {
      url += `?AppointmentDoctorSearch=${AppointmentDoctorSearch}`;
    }
  console.log("request send sucessfully")
    this.http.get<AppointmentDto[]>(url).subscribe((apiResponseData: AppointmentDto[]) => {
      this.sendDoctorData(apiResponseData);
    });
  }


  PatientNameSearch(AppointmentNameSearch: string) {
    let url = `http://localhost:3000/appoinment`;

    if (AppointmentNameSearch && AppointmentNameSearch.length > 0) {
      url += `?AppointmentNameSearch=${AppointmentNameSearch}`;
    }
  console.log("request send sucessfully")
    this.http.get<AppointmentDto[]>(url).subscribe((apiResponseData: AppointmentDto[]) => {
      this.sendDoctorData(apiResponseData);
    });
  }


  Appointmentdatesearch(AppointmentDateSearch: any) {
   let url = `http://localhost:3000/appoinment`;

    if (AppointmentDateSearch && AppointmentDateSearch.length > 0) {
      url += `?AppointmentDateSearch=${AppointmentDateSearch}`;
    }
  console.log("request send sucessfully")
    this.http.get<AppointmentDto[]>(url).subscribe((apiResponseData: AppointmentDto[]) => {
      this.sendDoctorData(apiResponseData);
    });
  }
  onSeletectedSubscriber(id: any) {
    
    return this.http.get(`http://localhost:3000/user/${id}`);
    
    
  }
  private selectedSubscriber: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public selectedSubscriber$: Observable<any> = this.selectedSubscriber.asObservable();
  setSelectedSubscriber(user: any) {
    this.selectedSubscriber.next(user);}

    
    conUrl='http://localhost:3000/doctor'
    getDayConsultation(doc_id: number, dayOfWeek: string): Observable<any> {
      const url = `${this.conUrl}/${doc_id}/consultations/${dayOfWeek}`;
      return this.http.get(url);
    }



    sendSessionToBackend(doc_id: number, dayOfWeek: string,session: string) {
      const url = `${this.conUrl}/${doc_id}/consultations/${dayOfWeek}/${session}`;
      return this.http.get<Consultation[]>(url);
    }
    appoinmentdoctor(doc_id: any) {
      return this.http.get<any>(`http://localhost:3000/doctor/${doc_id}`);
      
    }

}