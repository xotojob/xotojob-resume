import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
	selector: "[appAutoheight]",
})
export class AutoheightDirective implements OnInit {
	inputElement: HTMLInputElement;

	@Input() activeAutoHeight: boolean;

	constructor(private el: ElementRef) {
		this.inputElement = el.nativeElement;
	}

	ngOnInit(): void {
		if (this.activeAutoHeight) {
			this.resize();
		}
	}

	private resize() {
		if (this.inputElement.value.length > 0) {
			this.inputElement.style.height = `${this.inputElement.scrollHeight}px`;
		} else {
			this.inputElement.style.height = `0px`;
		}
	}
}
