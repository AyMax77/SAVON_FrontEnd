import { Component, OnInit } from '@angular/core';
import { Ingredient } from './../../models/Ingredient';
import { SimulateurServiceService } from '../../services/Ingredient.service';



@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.css'
})


export class IngredientsComponent implements OnInit {
    ingredients: Ingredient[] = []; // Liste des ingrédients mis à disposition par l'API
    isLoading: boolean = true; // Flag marquant la récupération des données
    errorMessage: string = ""; // Éventuel message d'erreur

    constructor(private ingredientService: SimulateurServiceService) {}

    // Appel de la méthode fetchIngredients de façon optimisée (évite l'appel dans le constructeur)
    ngOnInit(): void {
        this.fetchIngredients();
    }

    /**
     * Récupère la liste des ingrédients depuis l'API
     */
    fetchIngredients(): void {
      this.ingredientService.getAllIngredient().subscribe({
      next: (data: Ingredient[]) => {
      //console.log(data)
      this.ingredients = data;
      this.isLoading = false;
      },
      error: (error:Error) => {
      this.errorMessage = "Erreur lors du chargement des ingrédients.";
      console.error("Erreur API:", error);
      this.isLoading = false;
      }
      });
      }
}
