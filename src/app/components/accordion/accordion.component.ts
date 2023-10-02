import { Component } from "@angular/core";
import { ACCORDION, accordionData } from "@core/api/AccordionData";

@Component({
	selector: "app-accordion",
	templateUrl: "./accordion.component.html",
	styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent {
	accordionData: ACCORDION[] = [];
	active: number | null = null;

	ngOnInit(): void {
		this.accordionData = accordionData;
	}

	handleToggle(index: number): void {
		this.active = this.active === index ? null : index;
	}
}
