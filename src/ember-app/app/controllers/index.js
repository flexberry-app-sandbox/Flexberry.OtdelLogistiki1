import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.otdel-logistiki.caption'),
          title: i18n.t('forms.application.sitemap.otdel-logistiki.title'),
          children: [{
            link: 'i-i-s-otdel-logistiki-т-ч-водитель-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-т-ч-водитель-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-т-ч-водитель-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-тч-движ-г-с-м-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-тч-движ-г-с-м-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-тч-движ-г-с-м-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-договор-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-договор-l.title'),
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-путевой-лист-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-путевой-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-путевой-лист-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-журнал-учета-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-журнал-учета-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-журнал-учета-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-контрагент-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-контрагент-l.title'),
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-рук-отд-лог-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-рук-отд-лог-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-рук-отд-лог-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-персонал-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-персонал-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-персонал-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-тч-раб-вод-авто-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-тч-раб-вод-авто-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-тч-раб-вод-авто-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-трансп-ср-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-трансп-ср-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-трансп-ср-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-должности-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-должности-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-т-ч-задан-вод-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-т-ч-задан-вод-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-т-ч-задан-вод-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-otdel-logistiki-организация-l',
            caption: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.otdel-logistiki.i-i-s-otdel-logistiki-организация-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})