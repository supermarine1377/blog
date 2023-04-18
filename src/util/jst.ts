import dayjs from 'dayjs'

const toFormattedJst = (utc: string) => {
  // jst
  return dayjs(utc).format("YYYY年MM月DD日")
}

export default toFormattedJst