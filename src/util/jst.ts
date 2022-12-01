import dayjs from 'dayjs'

const toFormattedJst = (utc: string) => {
  const date = new Date(utc)
  const jst = dayjs(date).add(9, 'h')
  return dayjs(jst).format("YYYY年MM月DD日")
}

export default toFormattedJst