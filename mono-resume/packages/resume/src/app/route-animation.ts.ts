import { transition, trigger, style, animate, state, query, group } from "@angular/animations";

// export const slideInAnimation = trigger('slideInAnimation', [
	
	
// 	       transition('* => *', [
			   
//               query(':enter, :leave', 
//                   style({ position: 'absolute', width: '100%' }), 
//                   { optional: true }),
				  
				  
//               group([
//                   query(':enter', [
//                       style({ transform: 'translateY(100%)' }),
//                       animate('0.5s ease-in-out', 
//                       style({ transform: 'translateY(0%)' }))
//                   ], { optional: true }),
//                   query(':leave', [
//                       style({ transform: 'translateY(0%)' }),
//                       animate('0.5s ease-in-out', 
//                       style({ transform: 'translateY(-100%)' }))
//                   ], { optional: true }),
//               ])
//         ]),
//         ])
	


export const slideInAnimation = trigger("slideInAnimation", [transition("* <=> *", [style({ opacity: 0 }), animate(800, style({ opacity: 1 }))])]);


// export const slideInAnimation = trigger("slideInAnimation", [
//     transition(':enter', [
//         style({ transform: 'translateX(-100%)' }),
//         animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
//     ]),
//     transition(':leave', [
//         animate('200ms ease-in', style({ transform: 'translateX(-100%)' }))
//     ])
// ])