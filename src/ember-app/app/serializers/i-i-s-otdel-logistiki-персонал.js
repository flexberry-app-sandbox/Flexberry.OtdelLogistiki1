import { Serializer as ПерсоналSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otdel-logistiki-персонал';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПерсоналSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
