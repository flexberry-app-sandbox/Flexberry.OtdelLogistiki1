import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDДолжности: DS.attr('number'),
  наименование: DS.attr('string'),
  персонал: DS.belongsTo('i-i-s-otdel-logistiki-персонал', { inverse: null, async: false })
});

export let ValidationRules = {
  iDДолжности: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-должности.validations.iDДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-должности.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-должности.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-otdel-logistiki-должности', {
    наименование: attr('Наименование', { index: 0 }),
    iDДолжности: attr('I d должности', { index: 1 }),
    персонал: belongsTo('i-i-s-otdel-logistiki-персонал', 'Персонал', {
      контакты: attr('Контакты', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'контакты' })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-otdel-logistiki-должности', {
    наименование: attr('Наименование', { index: 0 }),
    iDДолжности: attr('I d должности', { index: 1 }),
    персонал: belongsTo('i-i-s-otdel-logistiki-персонал', 'Контакты', {
      контакты: attr('Контакты', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
