import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-pokemon-pagination",
	templateUrl: "./pokemon-pagination.component.html",
	styleUrls: ["./pokemon-pagination.component.scss"],
})
export class PokemonPaginationComponent {
	@Input() pokemonPage: number = 1;
	@Input() pokemonTotales: number = 0;

	@Output() nextChangePage: EventEmitter<number> = new EventEmitter<number>();
	@Output() previousChangePage: EventEmitter<number> =
		new EventEmitter<number>();
	@Output() currentPagination: EventEmitter<number> =
		new EventEmitter<number>();

	ngOnInit(): void {}

	handleOnKeyUp(value: number): void {
		this.pokemonPage = Number(value);

		this.currentPagination.emit(this.pokemonPage);

		if (
			this.pokemonPage < 1 ||
			this.pokemonPage > Math.ceil(this.pokemonTotales)
		) {
			this.pokemonPage = 1;
			this.currentPagination.emit(this.pokemonPage);
		}
	}

	handleNextPage(): void {
		this.pokemonPage++;
		if (this.pokemonPage === this.pokemonTotales + 1) {
			this.pokemonPage = 1;
		}
		this.nextChangePage.emit(this.pokemonPage);
	}

	handlePreviousPage(): void {
		this.pokemonPage--;

		if (this.pokemonPage === 0) {
			this.pokemonPage = this.pokemonTotales;
		}

		this.previousChangePage.emit(this.pokemonPage);
	}
}
