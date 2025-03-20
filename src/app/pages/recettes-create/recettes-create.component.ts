import { Component, OnInit } from '@angular/core';
import { SimulateurServiceService } from '../../services/Ingredient.service';
import { LigneIngredient } from '../../models/LigneIngredient'; // Assurez-vous d'importer le modèle LigneIngredient
import { RecetteDTO } from '../../models/recetteDTO';
import { RecetteService } from '../../services/recette.service';

@Component({
  selector: 'app-recettes-create',
  templateUrl: './recettes-create.component.html',
  styleUrls: ['./recettes-create.component.css']
})
export class RecettesCreateComponent implements OnInit {
  // Propriétés de la recette
  id: number | null = null;
  titre: string = '';
  description: string = '';
  surgraissage: number = 0;
  avecSoude: boolean = false;
  concentrationAlcalin: number = 0;
  qteAlcalin: number = 0;
  ligneIngredients: LigneIngredient[] = [];

  constructor(private recetteService: RecetteService) {}

  ngOnInit(): void {}

  /**
   * Soumet le formulaire pour créer une nouvelle recette.
   */
  onSubmit(): void {
    const nouvelleRecette = {
      id: this.id,
      titre: this.titre,
      description: this.description,
      surgraissage: this.surgraissage,
      avecSoude: this.avecSoude,
      concentrationAlcalin: this.concentrationAlcalin,
      qteAlcalin: this.qteAlcalin,
      ligneIngredients: this.ligneIngredients
    };

    this.recetteService.postRecette(nouvelleRecette).subscribe({
      next: (response) => {
        console.log('Recette enregistrée avec succès:', response);
        alert('Recette enregistrée avec succès !');
        this.resetForm(); // Réinitialiser le formulaire après succès
      },
      error: (error:Error) => {
        console.error('Erreur lors de l\'enregistrement de la recette:', error);
        alert('Erreur lors de l\'enregistrement de la recette.');
      }
    });
  }

  /**
   * Réinitialise le formulaire après soumission.
   */
  resetForm(): void {
    this.id = null;
    this.titre = '';
    this.description = '';
    this.surgraissage = 0;
    this.avecSoude = false;
    this.concentrationAlcalin = 0;
    this.qteAlcalin = 0;
    this.ligneIngredients = [];
  }

 
}