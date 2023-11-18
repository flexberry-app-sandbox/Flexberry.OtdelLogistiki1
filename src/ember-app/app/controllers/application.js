import Controller from '@ember/controller';
import $ from 'jquery';
import { computed, observer } from '@ember/object';
import { isNone } from '@ember/utils';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';



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

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: undefined,

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = $('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');
      sidebar.toggleClass('sidebar-mini');

      $('.full.height').toggleClass('content-opened');

      $('.sidebar.icon .text_menu').toggleClass('hidden');
      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.bgw-opacity').toggleClass('hidden');

      // For reinit overflowed tabs.
      $(window).trigger('resize');
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      $('.ui.sidebar.main.menu').sidebar('toggle');

      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.sidebar.icon').toggleClass('hidden-text');
      $('.bgw-opacity').toggleClass('hidden');

      if (!this.get('_hideEventIsAttached')) {
        $('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
        this.set('_hideEventIsAttached', true);
      }
    }
  }
});
