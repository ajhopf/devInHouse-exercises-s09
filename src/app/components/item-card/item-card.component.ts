import { Component } from '@angular/core';
import { CHARACTERS } from 'src/app/constants/item-card/characters';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  characters = CHARACTERS;
}
