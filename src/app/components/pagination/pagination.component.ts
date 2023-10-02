import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-pagination",
	templateUrl: "./pagination.component.html",
	styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent {
	@Input() pagina: number = 0;
	@Input() total: number = 0;

	@Output() nextChangePage = new EventEmitter<number>();
	@Output() previousChangePage = new EventEmitter<number>();

	current: number = 1;

	nextPage() {
		this.current += 1;
		this.pagina += 1;
		this.nextChangePage.emit(this.pagina);
	}

	previousPage() {
		this.current -= 1;
		this.pagina -= 1;
		this.previousChangePage.emit(this.pagina);
	}
}
