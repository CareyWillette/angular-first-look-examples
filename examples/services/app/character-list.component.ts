import { Component } from 'angular2/core';
import { Character, CharacterService } from './character.service';
import { CharacterComponent } from './character.component';

@Component({
  selector: 'my-character-list',
  templateUrl: 'app/character-list.component.html',
  styles: ['li {cursor: pointer;}'],
  directives: [CharacterComponent],
  providers: [CharacterService]
})
export class CharacterListComponent {
  selectedCharacter: Character;
  characters = [
    new Character(1, 'Han Solo', 'light'),
    new Character(2, 'Luke Skywalker', 'light'),
    new Character(3, 'Kylo', 'dark'),
    new Character(4, 'Rey', 'light')
  ];
  messages: string[] = [];

  constructor(private _characterService: CharacterService) {
    this.characters = this._characterService.getCharacters();
  }

  select(character: Character) {
    this.selectedCharacter = character;
  }
}

