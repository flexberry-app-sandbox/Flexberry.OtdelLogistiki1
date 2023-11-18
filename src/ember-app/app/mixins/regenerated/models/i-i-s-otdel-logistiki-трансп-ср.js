import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  госЗнак: DS.attr('string'),
  марка: DS.attr('string'),
  модель: DS.attr('string'),
  журналУчета: DS.belongsTo('i-i-s-otdel-logistiki-журнал-учета', { inverse: null, async: false }),
  персонал: DS.belongsTo('i-i-s-otdel-logistiki-персонал', { inverse: null, async: false }),
  путевойЛист: DS.belongsTo('i-i-s-otdel-logistiki-путевой-лист', { inverse: null, async: false })
});

export let ValidationRules = {
  госЗнак: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-трансп-ср.validations.госЗнак.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  марка: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-трансп-ср.validations.марка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  модель: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-трансп-ср.validations.модель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  журналУчета: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-трансп-ср.validations.журналУчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  персонал: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-трансп-ср.validations.персонал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  путевойЛист: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-трансп-ср.validations.путевойЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТранспСрE', 'i-i-s-otdel-logistiki-трансп-ср', {
    марка: attr('Марка', { index: 0 }),
    госЗнак: attr('Гос знак', { index: 1 }),
    модель: attr('Модель', { index: 2 }),
    персонал: belongsTo('i-i-s-otdel-logistiki-персонал', 'Персонал', {
      контакты: attr('Контакты', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'контакты' }),
    журналУчета: belongsTo('i-i-s-otdel-logistiki-журнал-учета', 'Журнал учета', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    путевойЛист: belongsTo('i-i-s-otdel-logistiki-путевой-лист', 'Путевой лист', {
      сопровожЛица: attr('Сопровож лица', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'сопровожЛица' })
  });

  modelClass.defineProjection('ТранспСрL', 'i-i-s-otdel-logistiki-трансп-ср', {
    марка: attr('Марка', { index: 0 }),
    госЗнак: attr('Гос знак', { index: 1 }),
    модель: attr('Модель', { index: 2 }),
    персонал: belongsTo('i-i-s-otdel-logistiki-персонал', 'Контакты', {
      контакты: attr('Контакты', { index: 3 })
    }, { index: -1, hidden: true }),
    журналУчета: belongsTo('i-i-s-otdel-logistiki-журнал-учета', 'ФИО', {
      фИО: attr('ФИО', { index: 4 })
    }, { index: -1, hidden: true }),
    путевойЛист: belongsTo('i-i-s-otdel-logistiki-путевой-лист', 'Сопровож лица', {
      сопровожЛица: attr('Сопровож лица', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
