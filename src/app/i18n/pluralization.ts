export const slavicPluralization = (n: number, variantsCount: number) => {
  const rem10 = Math.abs(n % 10)
  const rem100 = Math.abs(n % 100)
  const isTeen = rem100 > 10 && rem100 < 21
  const isOne = !isTeen && rem10 === 1
  const isFew = !isTeen && rem10 > 0 && rem10 < 5

  if (variantsCount === 3) {
    return isOne ? 0 : isFew ? 1 : 2
  }

  if (variantsCount === 4) {
    return n === 0 ? 0 : isOne ? 1 : isFew ? 2 : 3
  }

  throw new Error('Russian pluralization supports 3 or 4 variants')
}
