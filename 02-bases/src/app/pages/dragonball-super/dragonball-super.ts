import { Component, inject } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super.html',
  imports: [CharacterList, CharacterAdd]
})
export class DragonballSuper {

  public dragonballService = inject(DragonballService);
  // characters = signal<Character[]>([
  //   {
  //     id: 1,
  //     name: 'Goku',
  //     power: 9001,
  //   },
  //   {
  //     id: 2,
  //     name: 'Vegeta',
  //     power: 8000,
  //   }
  // ]);

  // AddCharacter(character: Character) {
  //   this.characters.update((list) => [...list, character]);
  // }
}
