import { transition, trigger, style, animate, state, query, group } from "@angular/animations";
export const slideInAnimation = trigger("slideInAnimation", [transition("* <=> *", [style({ opacity: 0 }), animate(800, style({ opacity: 1 }))])]);
