import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РукОтдЛогMixin
} from '../mixins/regenerated/models/i-i-s-otdel-logistiki-рук-отд-лог';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РукОтдЛогMixin, Validations, {
});

defineProjections(Model);

export default Model;
