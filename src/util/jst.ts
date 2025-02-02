import dayjs from 'dayjs'

const toFormattedJst = (date: string) => {
  // jst
  return dayjs(date).format("YYYY年MM月DD日")
}

export default toFormattedJst