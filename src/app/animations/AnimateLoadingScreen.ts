import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const animateLoadingScreen = trigger('AnimateLoadingScreen', [
    transition(':leave', [
        group([
            query('.loadScreenContainer', animate('.9s ease-in-out', style({
                backgroundColor: 'transparent'
            })), ),
            query('.loadLogoContainer', animate('1s linear', style({
                top: '{{yCord}}px',
                left: '{{xCord}}px',
                width: '{{width}}px',
                transform: 'translate(0, 0)'
            }))),
            query('.cls-1', animate('.5s .5s linear', style({
                fill: '#363cdd'
            }))) ,
            query('.cls-2', animate('.5s .5s linear', style({
                fill: '#5155e1'
            }))) 
        ])
    ])
])