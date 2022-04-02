const enum FilterType {
  EQUAL = 'equal',
  NOT_EQUAL = 'not_equal',
  LESS_THAN = 'less_than',
  LESS_THAN_OR_EQUAL = 'less_than_or_equal',
  GREATER_THAN = 'greater_than',
  GREATER_THAN_OR_EQUAL = 'greater_than_or_equal',
  IN = 'in',
  NOT_IN = 'not_in',
  CONTAINS = 'contains',
  NOT_CONTAINS = 'not_contains',
  STARTS_WITH = 'starts_with',
  NOT_STARTS_WITH = 'not_starts_with',
  ENDS_WITH = 'ends_with',
  NOT_ENDS_WITH = 'not_ends_with'
}

type Filter = {
  key: string
  value: any
  type?: FilterType
}

/**
 * Hook to filter a list of objects
 * const data = useFilter(words, [{key: 'name',value: 'perro'},{key: 'name',value: 'gato'}],'OR')
 */
export default function useFilter<T>(data: T[], filters: Filter[], mode = 'OR'): T[] {
  return data.filter((item: T) => {
    switch (mode) {
      case 'OR':
        return filters.some(
          (filter: Filter) =>
            JSON.stringify(item[filter.key as keyof T]) === JSON.stringify(filter.value)
        )
      case 'OR_NOT':
        return filters.some(
          (filter: Filter) =>
            JSON.stringify(item[filter.key as keyof T]) !== JSON.stringify(filter.value)
        )
      case 'AND':
        return filters.every(
          (filter: Filter) =>
            JSON.stringify(item[filter.key as keyof T]) === JSON.stringify(filter.value)
        )
      case 'AND_NOT':
        return filters.every(
          (filter: Filter) =>
            JSON.stringify(item[filter.key as keyof T]) !== JSON.stringify(filter.value)
        )
    }
  })
}
