import format from 'date-fns/format'

export function formatDate(date) {
  return format(new Date(date), 'LLL d, yyyy')
}
