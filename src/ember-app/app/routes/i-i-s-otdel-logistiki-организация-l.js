import ListFormRoute from 'ember-flexberry/routes/list-form';
import { computed } from '@ember/object';
export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'ОрганизацияL'
  */
  modelProjection: 'ОрганизацияL',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'i-i-s-otdel-logistiki-организация'
  */
  modelName: 'i-i-s-otdel-logistiki-организация',

  /**
    Defined user settings developer.
    For default userSetting use empty name ('').
    Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.

    ```javascript
    {
      <componentName>: {
        <settingName>: {
          colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
          sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
          colsWidths: [ <colName>:<colWidth>, ... ],
        },
        ...
      },
      ...
    }
    ```

    @property developerUserSettings
    @type Object
  */
  developerUserSettings: computed(function() {
    return { IISOtdelLogistikiОрганизацияL: {} }
  }),
});
