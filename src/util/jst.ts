import dayjs from 'dayjs'

const toFormattedJst = (utc: string) => {
  const date = new Date(utc)
  // jst
  return dayjs(date).format("YYYY年MM月DD日")
}

export default toFormattedJst