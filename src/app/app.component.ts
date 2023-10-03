import { Component, inject } from "@angular/core";
import { Pokemon } from "@core/interfaces/Pokemon";
import { PokemonService } from "./service/pokemon.service";
import { Observable, forkJoin, switchMap } from "rxjs";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	private pokemonService: PokemonService = inject(PokemonService);
	private API_URL: string = "https://pokeapi.co/api/v2/pokemon/";
	private pokemons: Pokemon[] = [];
	public elementLimit: number = 6;
	private start: number = 0;
	private end: number = this.elementLimit;
	private byPage: number = this.elementLimit; // Indica la cantidad de elementos a visualizarse

	public title: string = "Paginación";
	public pokemonPage: number = 1;
	public pokemonTotales: number = 0;
	public pokemonsToShow: Pokemon[] = [];

	public nextLink: string = "";
	public previousLink: string = "";

	ngOnInit(): void {
		this.getPokemons(this.API_URL);
	}

	getPokemons(url: string): void {
		this.pokemonService
			.getAllPokemons(url)
			.pipe(
				switchMap((data: TypeResponse | any): Observable<Object | any> => {
					const results = data?.results;
					this.nextLink = data?.next;
					this.previousLink = data?.previous;

					const pokemonObservables = results.map(
						(poke: any): Observable<Object> =>
							this.pokemonService.getPokemon(poke.url)
					);

					return forkJoin(pokemonObservables);
				})
			)
			.subscribe((resp: any): void => {
				this.pokemons = resp;

				this.pokemonsToShow = this.pokemons.slice(this.start, this.end);
				this.pokemonTotales = Math.ceil(this.pokemons.length / this.byPage);
			});
	}

	// Paginar páginas
	paginatePages(value: string): void {
		// this.pokemonPage = 1;
		this.paginatePokemons(this.pokemonPage);
		this.getPokemons(value);
	}

	// Páginar pokemons
	paginatePokemons(value: number): void {
		this.start = (value - 1) * this.byPage;
		this.end = (value - 1) * this.byPage + this.byPage;

		this.pokemonsToShow = this.pokemons.slice(this.start, this.end);
	}
}

interface TypeResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: any[];
}
