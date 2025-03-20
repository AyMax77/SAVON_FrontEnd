import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { RecettesComponent } from './pages/recettes/recettes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AProposComponent } from './pages/apropos/apropos.component';
import { HttpClientModule } from '@angular/common/http';
import { IngredientsComponent } from './pages/ingredients/ingredients.component';
import { AjouterIngredientComponent } from './pages/ingredient-create/ingredient-create.component';
import { RadarChartComponent } from './components/radar-chart/radar-chat.component';
import { RecettesCreateComponent } from './pages/recettes-create/recettes-create.component';
import { IngredientListComponent } from './shared/ingredient-list/ingredient-list.component';
import { IngredientFormComponent } from './shared/ingredient-form/ingredient-form.component';
import { IngredientImportExportComponent } from './shared/ingredient-import-export/ingredient-import-export.component';
import { IngredientManagerPageComponent } from './shared/ingredient-manager-page/ingredient-manager-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    IngredientsComponent,
    RecettesComponent,
    ContactComponent,
    AProposComponent,
    AjouterIngredientComponent,
    RadarChartComponent,
    RecettesCreateComponent,
    IngredientListComponent,
    IngredientFormComponent,
    IngredientImportExportComponent,
    IngredientManagerPageComponent,]
    ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
