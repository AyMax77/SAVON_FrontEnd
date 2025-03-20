import { Observable } from "rxjs";
import { Ingredient } from "../models/Ingredient";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SimulateurServiceService {
  apiURL = "http://localhost:8080/api-savon/v1";

  constructor(private http: HttpClient) {}

  /**
   * Récupère tous les ingrédients via l'API.
   * @returns Un Observable contenant la liste des ingrédients.
   */
  getAllIngredient():Observable<Ingredient[]>{
    return this.http.get<Ingredient[]>(`${this.apiURL}/ingredient`);
  }
  postIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${this.apiURL}/ingredient`, ingredient);
}

  /**
   * Ajoute un nouvel ingrédient via l'API.
   * @param ingredient - L'ingrédient à ajouter.
   * @returns Un Observable contenant l'ingrédient ajouté.
   */
  addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${this.apiURL}/ingredient`, ingredient);
  }

  /**
   * Met à jour un ingrédient existant via l'API.
   * @param id - L'identifiant de l'ingrédient à mettre à jour.
   * @param ingredient - Les nouvelles données de l'ingrédient.
   * @returns Un Observable contenant l'ingrédient mis à jour.
   */
  updateIngredient(id: number, ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(`${this.apiURL}/ingredient/${id}`, ingredient);
  }

  /**
   * Supprime un ingrédient via l'API.
   * @param id - L'identifiant de l'ingrédient à supprimer.
   * @returns Un Observable vide.
   */
  deleteIngredient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/ingredient/${id}`);
  }

  /**
   * Supprime tous les ingrédients via l'API.
   * @returns Un Observable vide.
   */
  deleteAllIngredients(): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/ingredient/all`);
  }

  /**
   * Importe des ingrédients à partir d'un fichier CSV via l'API.
   * @param file - Le fichier CSV à importer.
   * @returns Un Observable contenant la liste des ingrédients importés.
   */
  importFromCSV(file: File): Observable<Ingredient[]> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Ingredient[]>(`${this.apiURL}/ingredient/import`, formData);
  }

  /**
   * Exporte tous les ingrédients vers un fichier CSV via l'API.
   * @returns Un Observable contenant le fichier CSV.
   */
  exportToCSV(): Observable<Blob> {
    return this.http.get(`${this.apiURL}/ingredient/export`, { responseType: 'blob' });
  }
}