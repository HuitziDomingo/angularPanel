import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-heavy-loaders',
    standalone: true,
    imports: [CommonModule],
    template: `<p>slow</p>`
})
export class HeavyLoadersSlowComponent {

}
