import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "app-pagination",
	templateUrl: "./pagination.component.html",
	styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent {
	@Input() nextLink: string = "";
	@Input() previousLink: string = "";

	@Output() nextChangePage: EventEmitter<string> = new EventEmitter<string>();
	@Output() previousChangePage: EventEmitter<string> =
		new EventEmitter<string>();

	ngOnInit(): void {}

	handleNextPage(): void {
		this.nextChangePage.emit(this.nextLink);
	}

	handlePreviousPage(): void {
		this.previousChangePage.emit(this.previousLink);
	}
}
