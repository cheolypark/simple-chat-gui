export function capitalize(string) {
  string = string.split(' ')
  return string.map(str => capitalizeWord(str)).join(' ')
}

export function capitalizeWord(word) {
  return word
    .toLowerCase()
    .replace(/\w/, firstLetter => firstLetter.toUpperCase())
}
