import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяВозвр: DS.attr('date'),
  времяВыезда: DS.attr('date'),
  дата: DS.attr('date'),
  показСпидом: DS.attr('decimal'),
  примечания: DS.attr('string'),
  пробег: DS.attr('decimal'),
  фИО: DS.attr('string'),
  рукОтдЛог: DS.belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', { inverse: null, async: false })
});

export let ValidationRules = {
  времяВозвр: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-журнал-учета.validations.времяВозвр.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  времяВыезда: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-журнал-учета.validations.времяВыезда.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-журнал-учета.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  показСпидом: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-журнал-учета.validations.показСпидом.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  примечания: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-журнал-учета.validations.примечания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пробег: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-журнал-учета.validations.пробег.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-журнал-учета.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  рукОтдЛог: {
    descriptionKey: 'models.i-i-s-otdel-logistiki-журнал-учета.validations.рукОтдЛог.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЖурналУчетаE', 'i-i-s-otdel-logistiki-журнал-учета', {
    пробег: attr('Пробег', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    времяВыезда: attr('Время выезда', { index: 2 }),
    показСпидом: attr('Показ спидом', { index: 3 }),
    времяВозвр: attr('Время возвр', { index: 4 }),
    примечания: attr('Примечания', { index: 5 }),
    дата: attr('Дата', { index: 6 }),
    рукОтдЛог: belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', 'Рук отд лог', {
      фИО: attr('ФИО', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ЖурналУчетаL', 'i-i-s-otdel-logistiki-журнал-учета', {
    пробег: attr('Пробег', { index: 0 }),
    фИО: attr('ФИО', { index: 1 }),
    времяВыезда: attr('Время выезда', { index: 2 }),
    показСпидом: attr('Показ спидом', { index: 3 }),
    времяВозвр: attr('Время возвр', { index: 4 }),
    примечания: attr('Примечания', { index: 5 }),
    дата: attr('Дата', { index: 6 }),
    рукОтдЛог: belongsTo('i-i-s-otdel-logistiki-рук-отд-лог', 'ФИО', {
      фИО: attr('ФИО', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
