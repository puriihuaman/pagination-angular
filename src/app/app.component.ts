import { Component } from "@angular/core";
import { POKEMONS } from "@core/api/Pokemos";
import { POKEMON } from "@core/interfaces/Pokemon";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "pagination";

	private pokemons: POKEMON[] = POKEMONS;
	private start: number = 0;
	private end: number = 3;
	private porPagina: number = 3;

	public pagina: number = 1;
	public total: number = Math.ceil(this.pokemons.length / this.porPagina);
	public pokemonsToShow: POKEMON[] = [];

	ngOnInit(): void {
		this.pokemonsToShow = this.pokemons.slice(this.start, this.end);
	}

	paginatePages(value: number): void {
		this.start = (value - 1) * this.porPagina;
		this.end = (value - 1) * this.porPagina + this.porPagina;

		this.pokemonsToShow = this.pokemons.slice(this.start, this.end);
	}
}
