import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {IUser} from 'src/app/fe/interfaces/user';


@Injectable()
export class FirebaseService{

    private userList: AngularFireList<any>;

 constructor(private http:HttpClient,private firebase:AngularFireDatabase){
    this.userList = this.firebase.list('users');
 }
 


 getUsersFromFirebase(){

    return this.userList;
}

 addAUserToFirebase(user:IUser){
     this.userList.push(user);
 }




/*saveData(orderdetails:any[]){
    return this.http.post("https://months-b9894.firebaseio.com/",orderdetails);
}*/







}

