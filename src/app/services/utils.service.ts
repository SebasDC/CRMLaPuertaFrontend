import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }


  public whatTimeIs(): string{
    return new Date().toDateString(); 
  }

  
}
