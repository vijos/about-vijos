import { config } from 'config';

export function prefixLink(link) {
  if (
    typeof __PREFIX_LINKS__ !== 'undefined' &&
    __PREFIX_LINKS__ &&
    config.prefix !== null
  ) {
    return `${config.prefix}${link}`;
  } else {
    return link;
  }
}
