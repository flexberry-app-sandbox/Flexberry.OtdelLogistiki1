import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otdel-logistiki-тч-движ-г-с-м', 'Unit | Model | i-i-s-otdel-logistiki-тч-движ-г-с-м', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-otdel-logistiki-договор',
    'model:i-i-s-otdel-logistiki-должности',
    'model:i-i-s-otdel-logistiki-журнал-учета',
    'model:i-i-s-otdel-logistiki-контрагент',
    'model:i-i-s-otdel-logistiki-организация',
    'model:i-i-s-otdel-logistiki-персонал',
    'model:i-i-s-otdel-logistiki-путевой-лист',
    'model:i-i-s-otdel-logistiki-рук-отд-лог',
    'model:i-i-s-otdel-logistiki-т-ч-водитель',
    'model:i-i-s-otdel-logistiki-т-ч-задан-вод',
    'model:i-i-s-otdel-logistiki-трансп-ср',
    'model:i-i-s-otdel-logistiki-тч-движ-г-с-м',
    'model:i-i-s-otdel-logistiki-тч-раб-вод-авто',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
