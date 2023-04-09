import { AfterContentChecked, Directive, ElementRef } from "@angular/core";

@Directive({
	selector: "[appAutowidth]",
})
export class AutowidthDirective implements AfterContentChecked {
	inputElement: HTMLInputElement;

	constructor(private el: ElementRef) {
		this.el = el;
	}

	ngAfterContentChecked(): void {
		this.resize();
	}

	/* Méthode qui permet de donner une width égale à l'élément le plus grand de l'input (consultation) */
	private resize() {
		const hostElem = this.el.nativeElement;
		const elementList = hostElem.childNodes;
		this.inputElement = elementList[0];
		const sizeInputContent = this.inputElement.value.length;
		const marginRight = 4;

		let sizeLabel: number;
		let maxSize: number;

		for (const element of elementList) {
			if (element.className.match("c-input__label")) {
				sizeLabel = element.offsetWidth;
			}
		}
		maxSize = Math.max(sizeLabel, sizeInputContent);

		hostElem.style.width = maxSize / 16 + marginRight + "rem";
	}
}
