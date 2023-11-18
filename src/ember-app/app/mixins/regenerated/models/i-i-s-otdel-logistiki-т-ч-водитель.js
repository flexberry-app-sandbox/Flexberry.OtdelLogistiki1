import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  допущен: DS.attr('boolean'),
  табелНомер: DS.attr('number')
});

export let ValidationRules = {
  допущен: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-т-ч-водитель.validations.допущен.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табелНомер: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-т-ч-водитель.validations.табелНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧВодительE', 'i-i-s-otdel-logistiki-т-ч-водитель', {
    табелНомер: attr('Табел номер', { index: 0 }),
    допущен: attr('Допущен', { index: 1 })
  });

  modelClass.defineProjection('ТЧВодительL', 'i-i-s-otdel-logistiki-т-ч-водитель', {
    табелНомер: attr('Табел номер', { index: 0 }),
    допущен: attr('Допущен', { index: 1 })
  });
};
