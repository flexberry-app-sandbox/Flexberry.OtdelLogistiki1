import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  контакты: DS.attr('string'),
  фИО: DS.attr('string'),
  рукОтдЛог: DS.belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', { inverse: null, async: false }),
  тЧВодитель: DS.belongsTo('i-i-s-otdel-logistiki-т-ч-водитель', { inverse: null, async: false })
});

export let ValidationRules = {
  контакты: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-персонал.validations.контакты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-персонал.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  рукОтдЛог: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-персонал.validations.рукОтдЛог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧВодитель: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-персонал.validations.тЧВодитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПерсоналE', 'i-i-s-otdel-logistiki-персонал', {
    контакты: attr('Контакты', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    рукОтдЛог: belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', 'Рук отд лог', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' }),
    тЧВодитель: belongsTo('i-i-s-otdel-logistiki-т-ч-водитель', 'Т ч водитель', {
      табелНомер: attr('Табел номер', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'табелНомер' })
  });

  modelClass.defineProjection('ПерсоналL', 'i-i-s-otdel-logistiki-персонал', {
    контакты: attr('Контакты', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    рукОтдЛог: belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true }),
    тЧВодитель: belongsTo('i-i-s-otdel-logistiki-т-ч-водитель', 'Табел номер', {
      табелНомер: attr('Табел номер', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
