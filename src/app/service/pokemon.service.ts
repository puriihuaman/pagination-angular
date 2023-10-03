import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class PokemonService {
	private httpClient = inject(HttpClient);

	constructor() {}

	getAllPokemons(apiurl: string): Observable<Object> {
		return this.httpClient.get(apiurl);
	}

	getPokemon(url: string): Observable<Object> {
		return this.httpClient.get(url);
	}
}

interface TypeResponse {
	count: number;
	next: string;
	previous: string;
	results: [];
}
