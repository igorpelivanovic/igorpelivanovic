import { animate, style, transition, trigger } from "@angular/animations";

export const fadeInOutFromRight = trigger('fadeInOutFromRight', [
    transition(':enter', [
        style({
            transform: 'translateX(100%)',
        }),
        animate('.2s', style({
            transform: 'translateX(0%)'
        }))
    ]),
    transition(':leave', [
        style({
            transform: 'translateX(0%)',
        }),
        animate('.2s', style({
            transform: 'translateX(100%)'
        }))
    ])
])