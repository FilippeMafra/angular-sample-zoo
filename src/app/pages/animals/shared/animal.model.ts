import { BaseResourceModel } from '../../../shared/models/base-resource.model';
import { Specie } from '../../species/shared/specie.model';

export class Animal extends BaseResourceModel {
  constructor(
    public id?: number,
    public name?: string,
    public birthday?: string,

    public gender?: string,
    public specieId?: number,
    public specie?: Specie,
    public fatherId?: number,
    public father?: Animal,
    public motherId?: number,
    public mother?: Animal,
  ) {
    super();
  }

  static gender = {
    male: 'Macho',
    female: 'Fêmea'
  };

  static fromJson(jsonData: any): Animal {
    return Object.assign(new Animal(), jsonData);
  }

}
