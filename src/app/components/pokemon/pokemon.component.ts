import { Component, Input } from "@angular/core";
import { Pokemon } from "@core/interfaces/Pokemon";

@Component({
	selector: "app-pokemon",
	templateUrl: "./pokemon.component.html",
	styleUrls: ["./pokemon.component.scss"],
})
export class PokemonComponent {
	@Input() pokemon?: Pokemon;

	ngOnInit(): void {}
}
