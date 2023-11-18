import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOtdelLogistikiДоговорLForm from './forms/i-i-s-otdel-logistiki-договор-l';
import IISOtdelLogistikiДолжностиLForm from './forms/i-i-s-otdel-logistiki-должности-l';
import IISOtdelLogistikiЖурналУчетаLForm from './forms/i-i-s-otdel-logistiki-журнал-учета-l';
import IISOtdelLogistikiКонтрагентLForm from './forms/i-i-s-otdel-logistiki-контрагент-l';
import IISOtdelLogistikiОрганизацияLForm from './forms/i-i-s-otdel-logistiki-организация-l';
import IISOtdelLogistikiПерсоналLForm from './forms/i-i-s-otdel-logistiki-персонал-l';
import IISOtdelLogistikiПутевойЛистLForm from './forms/i-i-s-otdel-logistiki-путевой-лист-l';
import IISOtdelLogistikiРукОтдЛогLForm from './forms/i-i-s-otdel-logistiki-рук-отд-лог-l';
import IISOtdelLogistikiТЧВодительLForm from './forms/i-i-s-otdel-logistiki-т-ч-водитель-l';
import IISOtdelLogistikiТЧЗаданВодLForm from './forms/i-i-s-otdel-logistiki-т-ч-задан-вод-l';
import IISOtdelLogistikiТранспСрLForm from './forms/i-i-s-otdel-logistiki-трансп-ср-l';
import IISOtdelLogistikiТчДвижГСМLForm from './forms/i-i-s-otdel-logistiki-тч-движ-г-с-м-l';
import IISOtdelLogistikiТчРабВодАвтоLForm from './forms/i-i-s-otdel-logistiki-тч-раб-вод-авто-l';
import IISOtdelLogistikiДоговорEForm from './forms/i-i-s-otdel-logistiki-договор-e';
import IISOtdelLogistikiДолжностиEForm from './forms/i-i-s-otdel-logistiki-должности-e';
import IISOtdelLogistikiЖурналУчетаEForm from './forms/i-i-s-otdel-logistiki-журнал-учета-e';
import IISOtdelLogistikiКонтрагентEForm from './forms/i-i-s-otdel-logistiki-контрагент-e';
import IISOtdelLogistikiОрганизацияEForm from './forms/i-i-s-otdel-logistiki-организация-e';
import IISOtdelLogistikiПерсоналEForm from './forms/i-i-s-otdel-logistiki-персонал-e';
import IISOtdelLogistikiПутевойЛистEForm from './forms/i-i-s-otdel-logistiki-путевой-лист-e';
import IISOtdelLogistikiРукОтдЛогEForm from './forms/i-i-s-otdel-logistiki-рук-отд-лог-e';
import IISOtdelLogistikiТЧВодительEForm from './forms/i-i-s-otdel-logistiki-т-ч-водитель-e';
import IISOtdelLogistikiТЧЗаданВодEForm from './forms/i-i-s-otdel-logistiki-т-ч-задан-вод-e';
import IISOtdelLogistikiТранспСрEForm from './forms/i-i-s-otdel-logistiki-трансп-ср-e';
import IISOtdelLogistikiТчДвижГСМEForm from './forms/i-i-s-otdel-logistiki-тч-движ-г-с-м-e';
import IISOtdelLogistikiТчРабВодАвтоEForm from './forms/i-i-s-otdel-logistiki-тч-раб-вод-авто-e';
import IISOtdelLogistikiДоговорModel from './models/i-i-s-otdel-logistiki-договор';
import IISOtdelLogistikiДолжностиModel from './models/i-i-s-otdel-logistiki-должности';
import IISOtdelLogistikiЖурналУчетаModel from './models/i-i-s-otdel-logistiki-журнал-учета';
import IISOtdelLogistikiКонтрагентModel from './models/i-i-s-otdel-logistiki-контрагент';
import IISOtdelLogistikiОрганизацияModel from './models/i-i-s-otdel-logistiki-организация';
import IISOtdelLogistikiПерсоналModel from './models/i-i-s-otdel-logistiki-персонал';
import IISOtdelLogistikiПутевойЛистModel from './models/i-i-s-otdel-logistiki-путевой-лист';
import IISOtdelLogistikiРукОтдЛогModel from './models/i-i-s-otdel-logistiki-рук-отд-лог';
import IISOtdelLogistikiТЧВодительModel from './models/i-i-s-otdel-logistiki-т-ч-водитель';
import IISOtdelLogistikiТЧЗаданВодModel from './models/i-i-s-otdel-logistiki-т-ч-задан-вод';
import IISOtdelLogistikiТранспСрModel from './models/i-i-s-otdel-logistiki-трансп-ср';
import IISOtdelLogistikiТчДвижГСМModel from './models/i-i-s-otdel-logistiki-тч-движ-г-с-м';
import IISOtdelLogistikiТчРабВодАвтоModel from './models/i-i-s-otdel-logistiki-тч-раб-вод-авто';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-otdel-logistiki-договор': IISOtdelLogistikiДоговорModel,
    'i-i-s-otdel-logistiki-должности': IISOtdelLogistikiДолжностиModel,
    'i-i-s-otdel-logistiki-журнал-учета': IISOtdelLogistikiЖурналУчетаModel,
    'i-i-s-otdel-logistiki-контрагент': IISOtdelLogistikiКонтрагентModel,
    'i-i-s-otdel-logistiki-организация': IISOtdelLogistikiОрганизацияModel,
    'i-i-s-otdel-logistiki-персонал': IISOtdelLogistikiПерсоналModel,
    'i-i-s-otdel-logistiki-путевой-лист': IISOtdelLogistikiПутевойЛистModel,
    'i-i-s-otdel-logistiki-рук-отд-лог': IISOtdelLogistikiРукОтдЛогModel,
    'i-i-s-otdel-logistiki-т-ч-водитель': IISOtdelLogistikiТЧВодительModel,
    'i-i-s-otdel-logistiki-т-ч-задан-вод': IISOtdelLogistikiТЧЗаданВодModel,
    'i-i-s-otdel-logistiki-трансп-ср': IISOtdelLogistikiТранспСрModel,
    'i-i-s-otdel-logistiki-тч-движ-г-с-м': IISOtdelLogistikiТчДвижГСМModel,
    'i-i-s-otdel-logistiki-тч-раб-вод-авто': IISOtdelLogistikiТчРабВодАвтоModel
  },

  'application-name': 'Otdel logistiki',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Otdel logistiki',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otdel logistiki',
          title: 'Otdel logistiki'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'otdel-logistiki': {
          caption: 'OtdelLogistiki',
          title: 'OtdelLogistiki',
          'i-i-s-otdel-logistiki-т-ч-водитель-l': {
            caption: 'Т ч водитель',
            title: ''
          },
          'i-i-s-otdel-logistiki-тч-движ-г-с-м-l': {
            caption: 'Тч движ ГСМ',
            title: ''
          },
          'i-i-s-otdel-logistiki-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-otdel-logistiki-путевой-лист-l': {
            caption: 'Путевой лист',
            title: ''
          },
          'i-i-s-otdel-logistiki-журнал-учета-l': {
            caption: 'Журнал учета',
            title: ''
          },
          'i-i-s-otdel-logistiki-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-otdel-logistiki-рук-отд-лог-l': {
            caption: 'Рук отд лог',
            title: ''
          },
          'i-i-s-otdel-logistiki-персонал-l': {
            caption: 'Персонал',
            title: ''
          },
          'i-i-s-otdel-logistiki-тч-раб-вод-авто-l': {
            caption: 'Тч раб вод авто',
            title: ''
          },
          'i-i-s-otdel-logistiki-трансп-ср-l': {
            caption: 'Трансп ср',
            title: ''
          },
          'i-i-s-otdel-logistiki-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-otdel-logistiki-т-ч-задан-вод-l': {
            caption: 'Т ч задан вод',
            title: ''
          },
          'i-i-s-otdel-logistiki-организация-l': {
            caption: 'Организация',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-otdel-logistiki-договор-l': IISOtdelLogistikiДоговорLForm,
    'i-i-s-otdel-logistiki-должности-l': IISOtdelLogistikiДолжностиLForm,
    'i-i-s-otdel-logistiki-журнал-учета-l': IISOtdelLogistikiЖурналУчетаLForm,
    'i-i-s-otdel-logistiki-контрагент-l': IISOtdelLogistikiКонтрагентLForm,
    'i-i-s-otdel-logistiki-организация-l': IISOtdelLogistikiОрганизацияLForm,
    'i-i-s-otdel-logistiki-персонал-l': IISOtdelLogistikiПерсоналLForm,
    'i-i-s-otdel-logistiki-путевой-лист-l': IISOtdelLogistikiПутевойЛистLForm,
    'i-i-s-otdel-logistiki-рук-отд-лог-l': IISOtdelLogistikiРукОтдЛогLForm,
    'i-i-s-otdel-logistiki-т-ч-водитель-l': IISOtdelLogistikiТЧВодительLForm,
    'i-i-s-otdel-logistiki-т-ч-задан-вод-l': IISOtdelLogistikiТЧЗаданВодLForm,
    'i-i-s-otdel-logistiki-трансп-ср-l': IISOtdelLogistikiТранспСрLForm,
    'i-i-s-otdel-logistiki-тч-движ-г-с-м-l': IISOtdelLogistikiТчДвижГСМLForm,
    'i-i-s-otdel-logistiki-тч-раб-вод-авто-l': IISOtdelLogistikiТчРабВодАвтоLForm,
    'i-i-s-otdel-logistiki-договор-e': IISOtdelLogistikiДоговорEForm,
    'i-i-s-otdel-logistiki-должности-e': IISOtdelLogistikiДолжностиEForm,
    'i-i-s-otdel-logistiki-журнал-учета-e': IISOtdelLogistikiЖурналУчетаEForm,
    'i-i-s-otdel-logistiki-контрагент-e': IISOtdelLogistikiКонтрагентEForm,
    'i-i-s-otdel-logistiki-организация-e': IISOtdelLogistikiОрганизацияEForm,
    'i-i-s-otdel-logistiki-персонал-e': IISOtdelLogistikiПерсоналEForm,
    'i-i-s-otdel-logistiki-путевой-лист-e': IISOtdelLogistikiПутевойЛистEForm,
    'i-i-s-otdel-logistiki-рук-отд-лог-e': IISOtdelLogistikiРукОтдЛогEForm,
    'i-i-s-otdel-logistiki-т-ч-водитель-e': IISOtdelLogistikiТЧВодительEForm,
    'i-i-s-otdel-logistiki-т-ч-задан-вод-e': IISOtdelLogistikiТЧЗаданВодEForm,
    'i-i-s-otdel-logistiki-трансп-ср-e': IISOtdelLogistikiТранспСрEForm,
    'i-i-s-otdel-logistiki-тч-движ-г-с-м-e': IISOtdelLogistikiТчДвижГСМEForm,
    'i-i-s-otdel-logistiki-тч-раб-вод-авто-e': IISOtdelLogistikiТчРабВодАвтоEForm
  },

});

export default translations;
