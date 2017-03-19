import _ from 'lodash';

export function resolveDocs(allPages, path) {
  return _(allPages)
    .filter(page => page.path.indexOf(path) === 0)
    .orderBy([
      page => page.data.order || 0,
      page => page.data.title,
    ], [
      'asc',
      'asc',
    ])
    .value();
}

export function resolveFirstDoc(allPages, path) {
  return resolveDocs(allPages, path)[0];
}
