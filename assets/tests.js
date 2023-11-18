'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki договор l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-договор-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-договор-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki должности l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-должности-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-должности-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki журнал учета l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-журнал-учета-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-журнал-учета-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki контрагент l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-контрагент-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-контрагент-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki организация l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-организация-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-организация-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki персонал l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-персонал-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-персонал-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki путевой лист l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-путевой-лист-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-путевой-лист-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki рук отд лог l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-рук-отд-лог-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-рук-отд-лог-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki т ч водитель l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-т-ч-водитель-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-т-ч-водитель-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki т ч задан вод l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-т-ч-задан-вод-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-т-ч-задан-вод-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki трансп ср l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-трансп-ср-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-трансп-ср-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki тч движ г с м l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-тч-движ-г-с-м-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-тч-движ-г-с-м-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s otdel logistiki тч раб вод авто l');

  (0, _qunit.test)('testing i-i-s-otdel-logistiki-тч-раб-вод-авто-l', function (assert) {
    var _this = this;

    visit('/i-i-s-otdel-logistiki-тч-раб-вод-авто-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-договор-e', 'Unit | Controller | i-i-s-otdel-logistiki-договор-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-договор-l', 'Unit | Controller | i-i-s-otdel-logistiki-договор-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-должности-e', 'Unit | Controller | i-i-s-otdel-logistiki-должности-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-должности-l', 'Unit | Controller | i-i-s-otdel-logistiki-должности-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-журнал-учета-e', 'Unit | Controller | i-i-s-otdel-logistiki-журнал-учета-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-журнал-учета-l', 'Unit | Controller | i-i-s-otdel-logistiki-журнал-учета-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-контрагент-e', 'Unit | Controller | i-i-s-otdel-logistiki-контрагент-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-контрагент-l', 'Unit | Controller | i-i-s-otdel-logistiki-контрагент-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-организация-e', 'Unit | Controller | i-i-s-otdel-logistiki-организация-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-организация-l', 'Unit | Controller | i-i-s-otdel-logistiki-организация-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-персонал-e', 'Unit | Controller | i-i-s-otdel-logistiki-персонал-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-персонал-l', 'Unit | Controller | i-i-s-otdel-logistiki-персонал-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-путевой-лист-e', 'Unit | Controller | i-i-s-otdel-logistiki-путевой-лист-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-путевой-лист-l', 'Unit | Controller | i-i-s-otdel-logistiki-путевой-лист-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-рук-отд-лог-e', 'Unit | Controller | i-i-s-otdel-logistiki-рук-отд-лог-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-рук-отд-лог-l', 'Unit | Controller | i-i-s-otdel-logistiki-рук-отд-лог-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-т-ч-водитель-e', 'Unit | Controller | i-i-s-otdel-logistiki-т-ч-водитель-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-т-ч-водитель-l', 'Unit | Controller | i-i-s-otdel-logistiki-т-ч-водитель-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-т-ч-задан-вод-e', 'Unit | Controller | i-i-s-otdel-logistiki-т-ч-задан-вод-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-т-ч-задан-вод-l', 'Unit | Controller | i-i-s-otdel-logistiki-т-ч-задан-вод-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-трансп-ср-e', 'Unit | Controller | i-i-s-otdel-logistiki-трансп-ср-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-трансп-ср-l', 'Unit | Controller | i-i-s-otdel-logistiki-трансп-ср-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-тч-движ-г-с-м-e', 'Unit | Controller | i-i-s-otdel-logistiki-тч-движ-г-с-м-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-тч-движ-г-с-м-l', 'Unit | Controller | i-i-s-otdel-logistiki-тч-движ-г-с-м-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-тч-раб-вод-авто-e', 'Unit | Controller | i-i-s-otdel-logistiki-тч-раб-вод-авто-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-otdel-logistiki-тч-раб-вод-авто-l', 'Unit | Controller | i-i-s-otdel-logistiki-тч-раб-вод-авто-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-договор', 'Unit | Model | i-i-s-otdel-logistiki-договор', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-должности', 'Unit | Model | i-i-s-otdel-logistiki-должности', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-журнал-учета', 'Unit | Model | i-i-s-otdel-logistiki-журнал-учета', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-контрагент', 'Unit | Model | i-i-s-otdel-logistiki-контрагент', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-организация', 'Unit | Model | i-i-s-otdel-logistiki-организация', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-персонал', 'Unit | Model | i-i-s-otdel-logistiki-персонал', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-путевой-лист', 'Unit | Model | i-i-s-otdel-logistiki-путевой-лист', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-рук-отд-лог', 'Unit | Model | i-i-s-otdel-logistiki-рук-отд-лог', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-т-ч-водитель', 'Unit | Model | i-i-s-otdel-logistiki-т-ч-водитель', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-т-ч-задан-вод', 'Unit | Model | i-i-s-otdel-logistiki-т-ч-задан-вод', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-трансп-ср', 'Unit | Model | i-i-s-otdel-logistiki-трансп-ср', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-тч-движ-г-с-м', 'Unit | Model | i-i-s-otdel-logistiki-тч-движ-г-с-м', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-тч-раб-вод-авто', 'Unit | Model | i-i-s-otdel-logistiki-тч-раб-вод-авто', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-договор-e', 'Unit | Route | i-i-s-otdel-logistiki-договор-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-договор-l', 'Unit | Route | i-i-s-otdel-logistiki-договор-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-должности-e', 'Unit | Route | i-i-s-otdel-logistiki-должности-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-должности-l', 'Unit | Route | i-i-s-otdel-logistiki-должности-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-журнал-учета-e', 'Unit | Route | i-i-s-otdel-logistiki-журнал-учета-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-журнал-учета-l', 'Unit | Route | i-i-s-otdel-logistiki-журнал-учета-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-контрагент-e', 'Unit | Route | i-i-s-otdel-logistiki-контрагент-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-контрагент-l', 'Unit | Route | i-i-s-otdel-logistiki-контрагент-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-организация-e', 'Unit | Route | i-i-s-otdel-logistiki-организация-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-организация-l', 'Unit | Route | i-i-s-otdel-logistiki-организация-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-персонал-e', 'Unit | Route | i-i-s-otdel-logistiki-персонал-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-персонал-l', 'Unit | Route | i-i-s-otdel-logistiki-персонал-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-путевой-лист-e', 'Unit | Route | i-i-s-otdel-logistiki-путевой-лист-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-путевой-лист-l', 'Unit | Route | i-i-s-otdel-logistiki-путевой-лист-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-рук-отд-лог-e', 'Unit | Route | i-i-s-otdel-logistiki-рук-отд-лог-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-рук-отд-лог-l', 'Unit | Route | i-i-s-otdel-logistiki-рук-отд-лог-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-т-ч-водитель-e', 'Unit | Route | i-i-s-otdel-logistiki-т-ч-водитель-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-т-ч-водитель-l', 'Unit | Route | i-i-s-otdel-logistiki-т-ч-водитель-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-т-ч-задан-вод-e', 'Unit | Route | i-i-s-otdel-logistiki-т-ч-задан-вод-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-т-ч-задан-вод-l', 'Unit | Route | i-i-s-otdel-logistiki-т-ч-задан-вод-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-трансп-ср-e', 'Unit | Route | i-i-s-otdel-logistiki-трансп-ср-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-трансп-ср-l', 'Unit | Route | i-i-s-otdel-logistiki-трансп-ср-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-тч-движ-г-с-м-e', 'Unit | Route | i-i-s-otdel-logistiki-тч-движ-г-с-м-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-тч-движ-г-с-м-l', 'Unit | Route | i-i-s-otdel-logistiki-тч-движ-г-с-м-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-тч-раб-вод-авто-e', 'Unit | Route | i-i-s-otdel-logistiki-тч-раб-вод-авто-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-otdel-logistiki-тч-раб-вод-авто-l', 'Unit | Route | i-i-s-otdel-logistiki-тч-раб-вод-авто-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u0433\u043E\u0432\u043E\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-договор', 'Unit | Serializer | i-i-s-otdel-logistiki-договор', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-договор', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-должности', 'Unit | Serializer | i-i-s-otdel-logistiki-должности', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-должности', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u0436\u0443\u0440\u043D\u0430\u043B-\u0443\u0447\u0435\u0442\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-журнал-учета', 'Unit | Serializer | i-i-s-otdel-logistiki-журнал-учета', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-журнал-учета', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-контрагент', 'Unit | Serializer | i-i-s-otdel-logistiki-контрагент', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-контрагент', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-организация', 'Unit | Serializer | i-i-s-otdel-logistiki-организация', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-организация', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-персонал', 'Unit | Serializer | i-i-s-otdel-logistiki-персонал', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-персонал', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u043F\u0443\u0442\u0435\u0432\u043E\u0439-\u043B\u0438\u0441\u0442-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-путевой-лист', 'Unit | Serializer | i-i-s-otdel-logistiki-путевой-лист', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-путевой-лист', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u0440\u0443\u043A-\u043E\u0442\u0434-\u043B\u043E\u0433-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-рук-отд-лог', 'Unit | Serializer | i-i-s-otdel-logistiki-рук-отд-лог', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-рук-отд-лог', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-т-ч-водитель', 'Unit | Serializer | i-i-s-otdel-logistiki-т-ч-водитель', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-т-ч-водитель', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u0442-\u0447-\u0437\u0430\u0434\u0430\u043D-\u0432\u043E\u0434-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-т-ч-задан-вод', 'Unit | Serializer | i-i-s-otdel-logistiki-т-ч-задан-вод', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-т-ч-задан-вод', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u0442\u0440\u0430\u043D\u0441\u043F-\u0441\u0440-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-трансп-ср', 'Unit | Serializer | i-i-s-otdel-logistiki-трансп-ср', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-трансп-ср', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0434\u0432\u0438\u0436-\u0433-\u0441-\u043C-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-тч-движ-г-с-м', 'Unit | Serializer | i-i-s-otdel-logistiki-тч-движ-г-с-м', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-otdel-logistiki-\u0442\u0447-\u0440\u0430\u0431-\u0432\u043E\u0434-\u0430\u0432\u0442\u043E-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-otdel-logistiki-тч-раб-вод-авто', 'Unit | Serializer | i-i-s-otdel-logistiki-тч-раб-вод-авто', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-otdel-logistiki-договор', 'model:i-i-s-otdel-logistiki-должности', 'model:i-i-s-otdel-logistiki-журнал-учета', 'model:i-i-s-otdel-logistiki-контрагент', 'model:i-i-s-otdel-logistiki-организация', 'model:i-i-s-otdel-logistiki-персонал', 'model:i-i-s-otdel-logistiki-путевой-лист', 'model:i-i-s-otdel-logistiki-рук-отд-лог', 'model:i-i-s-otdel-logistiki-т-ч-водитель', 'model:i-i-s-otdel-logistiki-т-ч-задан-вод', 'model:i-i-s-otdel-logistiki-трансп-ср', 'model:i-i-s-otdel-logistiki-тч-движ-г-с-м', 'model:i-i-s-otdel-logistiki-тч-раб-вод-авто', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
