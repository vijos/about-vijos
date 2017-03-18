import _ from 'lodash';
import sub from 'string-sub';
import { config } from 'config';

export function i18n(prefix, key, ...props) {
  const accessor = `${prefix}.${key}`;
  const value = _.get(config.i18n, accessor) || accessor;
  return sub(value, ...props);
}
