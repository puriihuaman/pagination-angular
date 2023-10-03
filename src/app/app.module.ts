import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { FormsModule } from "@angular/forms";
import { PokemonPaginationComponent } from "./components/pokemon-pagination/pokemon-pagination.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";

@NgModule({
	declarations: [
		AppComponent,
		PaginationComponent,
		PokemonPaginationComponent,
		PokemonComponent,
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
