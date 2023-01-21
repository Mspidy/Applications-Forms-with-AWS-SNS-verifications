import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    let url = `${environment.base_URL}/alluser`;
    return this.http.get(url);
  }

  getOTP(obj:any): Observable<any> {
    let url = `${environment.base_URL}/otp`;
    return this.http.post(url,obj);
  }

  addNewApplication(obj:any): Observable<any> {
    let url = `${environment.base_URL}/createapplication`;
    return this.http.post(url,obj);
  }

  getApplication(): Observable<any>{
    let url = `${environment.base_URL}/getapplication`;
    return this.http.get(url);
  }
}
