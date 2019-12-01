import {Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Port} from '../../../environments/config';
import { Ilogin} from '../model/register';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class LoginServices {
    private loginEndPoint: string = Port + "auth";
    private LoggedInEndPoint: string = Port + "me";
    public headers: HttpHeaders;
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
     }
    
    Login(item:Ilogin):Observable<Ilogin> {
        return this.http.post<Ilogin>(this.loginEndPoint, JSON.stringify(item), { headers: this.headers })
            .pipe(map((data: any) => {
                if (data && data.token) {
                     localStorage.setItem("currentuser", JSON.stringify(data.token))
                } else {
                    return data;
                 }
            }))
    };
    LoggedInUser() {
        let token = JSON.parse(localStorage.getItem("currentuser"));
        return this.http.get(this.LoggedInEndPoint, { headers: this.headers.append('x-auth-token', token) });
    };

    LogoutUser() {
        localStorage.removeItem("currentuser");
    
    }


}