import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";
import { SvgIconComponent } from "@components/svg-icon/svg-icon.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PaginationComponent } from "./components/pagination/pagination.component";
import { PokemonPaginationComponent } from "./components/pokemon-pagination/pokemon-pagination.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";

@NgModule({
	declarations: [
		AppComponent,
		PaginationComponent,
		PokemonPaginationComponent,
		PokemonComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		SvgIconComponent,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
