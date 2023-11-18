import {
  defineNamespace,
  defineProjections,
  Model as ЖурналУчетаMixin
} from '../mixins/regenerated/models/i-i-s-otdel-logistiki-журнал-учета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЖурналУчетаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
