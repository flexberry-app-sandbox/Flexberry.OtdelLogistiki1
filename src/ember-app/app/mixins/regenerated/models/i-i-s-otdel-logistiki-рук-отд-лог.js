import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string')
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-рук-отд-лог.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РукОтдЛогE', 'i-i-s-otdel-logistiki-рук-отд-лог', {
    фИО: attr('ФИО', { index: 0 })
  });

  modelClass.defineProjection('РукОтдЛогL', 'i-i-s-otdel-logistiki-рук-отд-лог', {
    фИО: attr('ФИО', { index: 0 })
  });
};
