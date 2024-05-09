

import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  public headOfficeUrl = 'http://localhost:53045/api/v1/';
  private branchUrl = 'your_branch_api_base_url';
  constructor(private _http: HttpClient) {}
  
  public getHeadOfficeData(){
    return this._http.get('assets/headoffice.json')
};

public getBrachOfficeData(){
  return this._http.get('assets/branch.json')
};

public getDoctorDetails(){
  return this._http.get('assets/doctor.json')
}

public getPatientData(){
  return this._http.get('assets/patient.json')
}
  public getVersion(){
    return this._http.get(`${environment.baseUrl}/serverversion`)
  }

public getAllHeadOffices() {
  return this._http.get(`${this.headOfficeUrl}HeadOffice/GetAllHeadOffices`)
}

public addHeadOffice(headOfficeData: any) {
  return this._http.post(`${this.headOfficeUrl}HeadOffice/AddHeadOffice`, headOfficeData);
}

public deleteHeadOffice(headOfficeId: number) {
  return this._http.delete(`${this.headOfficeUrl}HeadOffice/DeleteHeadOffice?headOfficeId=${headOfficeId}`);
}
public UpdateHeadOffice(headOfficeData: any) {
  return this._http.post(`${this.headOfficeUrl}HeadOffice/UpdateHeadoffice`,headOfficeData);
}



public getAllBranch(){
  return this._http.get(`${this.branchUrl}Branch/GetAllBranches`)

}
public addAllBranch(headOfficeData: any) {
  return this._http.post(`${this.headOfficeUrl}HeadOffice/AddHeadOffice`, headOfficeData);
}

public deleteAllBranch(headOfficeId: number) {
  return this._http.delete(`${this.headOfficeUrl}HeadOffice/DeleteHeadOffice?headOfficeId=${headOfficeId}`);
}
public updateAllBranch(headOfficeData: any) {
  return this._http.post(`${this.headOfficeUrl}HeadOffice/UpdateHeadoffice`,headOfficeData);
}


}