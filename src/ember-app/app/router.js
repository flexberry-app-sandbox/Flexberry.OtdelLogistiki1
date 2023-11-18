import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-otdel-logistiki-договор-l');
  this.route('i-i-s-otdel-logistiki-договор-e',
  { path: 'i-i-s-otdel-logistiki-договор-e/:id' });
  this.route('i-i-s-otdel-logistiki-договор-e.new',
  { path: 'i-i-s-otdel-logistiki-договор-e/new' });
  this.route('i-i-s-otdel-logistiki-должности-l');
  this.route('i-i-s-otdel-logistiki-должности-e',
  { path: 'i-i-s-otdel-logistiki-должности-e/:id' });
  this.route('i-i-s-otdel-logistiki-должности-e.new',
  { path: 'i-i-s-otdel-logistiki-должности-e/new' });
  this.route('i-i-s-otdel-logistiki-журнал-учета-l');
  this.route('i-i-s-otdel-logistiki-журнал-учета-e',
  { path: 'i-i-s-otdel-logistiki-журнал-учета-e/:id' });
  this.route('i-i-s-otdel-logistiki-журнал-учета-e.new',
  { path: 'i-i-s-otdel-logistiki-журнал-учета-e/new' });
  this.route('i-i-s-otdel-logistiki-контрагент-l');
  this.route('i-i-s-otdel-logistiki-контрагент-e',
  { path: 'i-i-s-otdel-logistiki-контрагент-e/:id' });
  this.route('i-i-s-otdel-logistiki-контрагент-e.new',
  { path: 'i-i-s-otdel-logistiki-контрагент-e/new' });
  this.route('i-i-s-otdel-logistiki-организация-l');
  this.route('i-i-s-otdel-logistiki-организация-e',
  { path: 'i-i-s-otdel-logistiki-организация-e/:id' });
  this.route('i-i-s-otdel-logistiki-организация-e.new',
  { path: 'i-i-s-otdel-logistiki-организация-e/new' });
  this.route('i-i-s-otdel-logistiki-персонал-l');
  this.route('i-i-s-otdel-logistiki-персонал-e',
  { path: 'i-i-s-otdel-logistiki-персонал-e/:id' });
  this.route('i-i-s-otdel-logistiki-персонал-e.new',
  { path: 'i-i-s-otdel-logistiki-персонал-e/new' });
  this.route('i-i-s-otdel-logistiki-путевой-лист-l');
  this.route('i-i-s-otdel-logistiki-путевой-лист-e',
  { path: 'i-i-s-otdel-logistiki-путевой-лист-e/:id' });
  this.route('i-i-s-otdel-logistiki-путевой-лист-e.new',
  { path: 'i-i-s-otdel-logistiki-путевой-лист-e/new' });
  this.route('i-i-s-otdel-logistiki-рук-отд-лог-l');
  this.route('i-i-s-otdel-logistiki-рук-отд-лог-e',
  { path: 'i-i-s-otdel-logistiki-рук-отд-лог-e/:id' });
  this.route('i-i-s-otdel-logistiki-рук-отд-лог-e.new',
  { path: 'i-i-s-otdel-logistiki-рук-отд-лог-e/new' });
  this.route('i-i-s-otdel-logistiki-т-ч-водитель-l');
  this.route('i-i-s-otdel-logistiki-т-ч-водитель-e',
  { path: 'i-i-s-otdel-logistiki-т-ч-водитель-e/:id' });
  this.route('i-i-s-otdel-logistiki-т-ч-водитель-e.new',
  { path: 'i-i-s-otdel-logistiki-т-ч-водитель-e/new' });
  this.route('i-i-s-otdel-logistiki-т-ч-задан-вод-l');
  this.route('i-i-s-otdel-logistiki-т-ч-задан-вод-e',
  { path: 'i-i-s-otdel-logistiki-т-ч-задан-вод-e/:id' });
  this.route('i-i-s-otdel-logistiki-т-ч-задан-вод-e.new',
  { path: 'i-i-s-otdel-logistiki-т-ч-задан-вод-e/new' });
  this.route('i-i-s-otdel-logistiki-трансп-ср-l');
  this.route('i-i-s-otdel-logistiki-трансп-ср-e',
  { path: 'i-i-s-otdel-logistiki-трансп-ср-e/:id' });
  this.route('i-i-s-otdel-logistiki-трансп-ср-e.new',
  { path: 'i-i-s-otdel-logistiki-трансп-ср-e/new' });
  this.route('i-i-s-otdel-logistiki-тч-движ-г-с-м-l');
  this.route('i-i-s-otdel-logistiki-тч-движ-г-с-м-e',
  { path: 'i-i-s-otdel-logistiki-тч-движ-г-с-м-e/:id' });
  this.route('i-i-s-otdel-logistiki-тч-движ-г-с-м-e.new',
  { path: 'i-i-s-otdel-logistiki-тч-движ-г-с-м-e/new' });
  this.route('i-i-s-otdel-logistiki-тч-раб-вод-авто-l');
  this.route('i-i-s-otdel-logistiki-тч-раб-вод-авто-e',
  { path: 'i-i-s-otdel-logistiki-тч-раб-вод-авто-e/:id' });
  this.route('i-i-s-otdel-logistiki-тч-раб-вод-авто-e.new',
  { path: 'i-i-s-otdel-logistiki-тч-раб-вод-авто-e/new' });
});

export default Router;
