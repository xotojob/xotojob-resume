import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from "@angular/core";

@Directive({
	selector: "[appDragDrop]",
})
export class DragDropDirective {
	classDragover = "sc-drag-drop__container--dragover";

	@Output() fileDropped = new EventEmitter<any>();

	constructor(private readonly renderer: Renderer2, private readonly el: ElementRef) {}

	// Dragover listener
	@HostListener("dragover", ["$event"]) onDragOver(evt: Event): void {
		this.renderer.addClass(this.el.nativeElement, this.classDragover);
		evt.preventDefault();
		evt.stopPropagation();
	}

	// Dragleave listener
	@HostListener("dragleave", ["$event"])
	public onDragLeave(evt: Event): void {
		this.renderer.removeClass(this.el.nativeElement, this.classDragover);
		evt.preventDefault();
		evt.stopPropagation();
	}

	// Drop listener
	@HostListener("drop", ["$event"])
	public ondrop(evt: DragEvent): void {
		this.renderer.removeClass(this.el.nativeElement, this.classDragover);
		evt.preventDefault();
		evt.stopPropagation();
		const files = evt.dataTransfer.files;
		if (files.length > 0) {
			this.fileDropped.emit(files);
		}
	}
}
