import axios from "axios";
import { ActionType } from "../redux/actionType";


export class ContactServerResponse{
    public constructor(
        public name: string ,
        public email: string,
        public phoneNumber: string,
        public messege:string
    
    ){}
}



