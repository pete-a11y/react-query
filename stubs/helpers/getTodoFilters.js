const { parseToBooleanFromString } = require('../helpers/parseToBooleanFromString');

const defaultParamNames = ['description', 'done', 'title', 'priority'];

const paramsNames = {
  byDate: ['date', ...defaultParamNames],
  all: defaultParamNames,
};

const format = {
  title: value => (value ? new RegExp(value, 'i') : null),
  description: value => (value ? new RegExp(value, 'i') : null),
  done: value => (typeof value === 'string' ? parseToBooleanFromString(value) : value),
  priority: value => (value === 'all' ? null : value),
  date: value => value,
};

const getTodoFilters = query =>
  (paramsNames[query.variant] || []).reduce(
    (acc, cur) =>
      format[cur] && format[cur](query[cur]) ? { ...acc, [cur]: format[cur](query[cur]) } : acc,
    {}
  );

const getTodoSort = query => ({
  [query.sortProperty || 'title']: (query.sortVariant || 'DESC') === 'DESC' ? -1 : 1,
});

const getFiltersAndSortParams = query => ({
  filters: getTodoFilters(query),
  sort: getTodoSort(query),
});

module.exports = { getFiltersAndSortParams };
