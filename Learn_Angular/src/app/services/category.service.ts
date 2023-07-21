import { Injectable } from '@angular/core';
import { General } from '../models/general';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   obj:General<string>={
    data:'567'
   };
  constructor() { }
}
