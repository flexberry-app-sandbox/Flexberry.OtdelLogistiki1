import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  организация: DS.attr('string'),
  ответсЛицо: DS.attr('string'),
  договор: DS.belongsTo('i-i-s-otdel-logistiki-договор', { inverse: null, async: false }),
  рукОтдЛог: DS.belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', { inverse: null, async: false }),
  тЧЗаданВод: DS.belongsTo('i-i-s-otdel-logistiki-т-ч-задан-вод', { inverse: null, async: false })
});

export let ValidationRules = {
  организация: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-контрагент.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ответсЛицо: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-контрагент.validations.ответсЛицо.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-контрагент.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рукОтдЛог: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-контрагент.validations.рукОтдЛог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧЗаданВод: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-контрагент.validations.тЧЗаданВод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрагентE', 'i-i-s-otdel-logistiki-контрагент', {
    организация: attr('Организация', { index: 0 }),
    ответсЛицо: attr('Ответс лицо', { index: 1 }),
    рукОтдЛог: belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', 'Рук отд лог', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' }),
    договор: belongsTo('i-i-s-otdel-logistiki-договор', 'Договор', {
      обязанПосред: attr('Обязан посред', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'обязанПосред' }),
    тЧЗаданВод: belongsTo('i-i-s-otdel-logistiki-т-ч-задан-вод', 'Т ч задан вод', {
      пунктНазнач: attr('Пункт назнач', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'пунктНазнач' })
  });

  modelClass.defineProjection('КонтрагентL', 'i-i-s-otdel-logistiki-контрагент', {
    организация: attr('Организация', { index: 0 }),
    ответсЛицо: attr('Ответс лицо', { index: 1 }),
    рукОтдЛог: belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true }),
    договор: belongsTo('i-i-s-otdel-logistiki-договор', 'Обязан посред', {
      обязанПосред: attr('Обязан посред', { index: 3 })
    }, { index: -1, hidden: true }),
    тЧЗаданВод: belongsTo('i-i-s-otdel-logistiki-т-ч-задан-вод', 'Пункт назнач', {
      пунктНазнач: attr('Пункт назнач', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
