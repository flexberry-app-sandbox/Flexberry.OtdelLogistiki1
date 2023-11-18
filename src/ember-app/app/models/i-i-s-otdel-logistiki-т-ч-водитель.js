import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧВодительMixin
} from '../mixins/regenerated/models/i-i-s-otdel-logistiki-т-ч-водитель';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧВодительMixin, Validations, {
});

defineProjections(Model);

export default Model;
