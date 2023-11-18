import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  выдатьТоплива: DS.attr('number'),
  гаражНомер: DS.attr('number'),
  номер: DS.attr('number'),
  сопровожЛица: DS.attr('string'),
  рукОтдЛог: DS.belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', { inverse: null, async: false })
});

export let ValidationRules = {
  выдатьТоплива: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-путевой-лист.validations.выдатьТоплива.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  гаражНомер: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-путевой-лист.validations.гаражНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-путевой-лист.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сопровожЛица: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-путевой-лист.validations.сопровожЛица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  рукОтдЛог: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-путевой-лист.validations.рукОтдЛог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПутевойЛистE', 'i-i-s-otdel-logistiki-путевой-лист', {
    выдатьТоплива: attr('Выдать топлива', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    сопровожЛица: attr('Сопровож лица', { index: 2 }),
    гаражНомер: attr('Гараж номер', { index: 3 }),
    рукОтдЛог: belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', 'Рук отд лог', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ПутевойЛистL', 'i-i-s-otdel-logistiki-путевой-лист', {
    выдатьТоплива: attr('Выдать топлива', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    сопровожЛица: attr('Сопровож лица', { index: 2 }),
    гаражНомер: attr('Гараж номер', { index: 3 }),
    рукОтдЛог: belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
