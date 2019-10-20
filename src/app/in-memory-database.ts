import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Specie } from './pages/species/shared/specie.model';
import { Animal } from './pages/animals/shared/animal.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {

    const species: Specie[] = [
      { id: 1, name: 'Leão' },
      { id: 2, name: 'Cavalo' },
      { id: 3, name: 'Arara' },
      { id: 4, name: 'Orangotango' },
      { id: 5, name: 'Girafa' }
    ];

    const animals: Animal[] = [
      {
        id: 1, name: 'Nigel', specieId: species[2].id, specie: species[2], gender: 'male', birthday: '2010-11-01',
        fatherId: null, father: null, motherId: null, mother: null
      } as Animal,
      {
        id: 2, name: 'Linda', specieId: species[2].id, specie: species[2], gender: 'female', birthday: '2010-12-01',
        fatherId: null, father: null, motherId: null, mother: null
      } as Animal,
      {
        id: 3, name: 'Blue', specieId: species[2].id, specie: species[2], gender: 'male', birthday: '2014-01-01',
        fatherId: null, father: null, motherId: null, mother: null
      } as Animal,
      {
        id: 4, name: 'Jade', specieId: species[2].id, specie: species[2], gender: 'female', birthday: '2014-03-01',
        fatherId: null, father: null, motherId: null, mother: null
      } as Animal,
    ];

    // referência aos pais
    animals.push({
        id: 5, name: 'Jé Carica', specieId: species[2].id, specie: species[2], gender: 'male', birthday: '2017-01-01',
        fatherId: animals[0].id, father: animals[0], motherId: animals[1].id, mother: animals[1]
      } as Animal);
      animals.push({
        id: 6, name: 'Lady', specieId: species[2].id, specie: species[2], gender: 'female', birthday: '2017-03-01',
        fatherId: animals[2].id, father: animals[2], motherId: animals[3].id, mother: animals[3]
      } as Animal);
    animals.push({
        id: 7, name: 'Loro Zé', specieId: species[2].id, specie: species[2], gender: 'male', birthday: '2019-01-01',
        fatherId: animals[4].id, father: animals[4], motherId: animals[5].id, mother: animals[5]
      } as Animal);

    return { species, animals };
  }
}
