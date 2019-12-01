import {Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Port} from '../../../environments/config';
import { Iregister } from '../model/register';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class RegisterServices {
    private registerEndPoint: string = Port + "newUser";
    public headers: HttpHeaders;
    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
     }
    
    Reigster(item:Iregister):Observable<Iregister> {
        return this.http.post<Iregister>(this.registerEndPoint, JSON.stringify(item), {headers: this.headers})
    };


}