// number utility to get a range of numbers

export function getRange({ range, indexSeed, valueSeed }) {
  return Array(range)
    .fill()
    .map((_, index) => valueSeed + index + indexSeed)
}
