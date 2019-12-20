import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['../app.component.css']
})


export class HeaderComponent {
    text = 'simple text usando interpolacion';
}
