import { Component, Input } from "@angular/core";

import { ACCORDION } from "@core/api/AccordionData";

@Component({
	selector: "app-accordion-item",
	templateUrl: "./accordion-item.component.html",
	styleUrls: ["./accordion-item.component.scss"],
})
export class AccordionItemComponent {
	@Input() item!: ACCORDION;
	@Input() active!: number | null;
	@Input() handleToggle!: Function;

	ngOnInit(): void {}
}
