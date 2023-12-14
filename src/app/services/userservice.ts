import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";
@Injectable()
export class userservice{
    public url: string
    constructor (
        private _http:HttpClient){
            this.url=Global.url
        }
    getUser():Observable<any>{
        var user='api/user/all'
        return this._http.get(this.url+user)
    }
}
