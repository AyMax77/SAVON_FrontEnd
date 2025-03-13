import { Observable } from "rxjs";
import { Ingredient } from "../models/Ingredient";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SimulateurServiceService {
    apiURL="http://localhost:8080/api-savon/v1"
      constructor(private http:HttpClient) {}

      getAllIngredient():Observable<Ingredient[]>{
        return this.http.get<Ingredient[]>(`${this.apiURL}/ingredient`);
      }
      postIngredient(ingredient: Ingredient): Observable<Ingredient> {
        return this.http.post<Ingredient>(`${this.apiURL}/ingredient`, ingredient);
    }
    }

  
      