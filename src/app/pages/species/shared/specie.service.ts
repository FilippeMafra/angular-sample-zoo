import { Injectable, Injector } from '@angular/core';
import { Specie } from './specie.model';

import { BaseResourceService } from '../../../shared/services/base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class SpecieService extends BaseResourceService<Specie> {

  constructor(protected injector: Injector) {
    super('api/species', injector, Specie.fromJson);
  }

}
