import _ from "lodash"
import { SHEET_NAMES } from '@/scripts/consts'

export function mergeData(validFiles) {
  const data = validFiles.map(item => item.data)


  // data[0].角色活动祈愿.forEach(element => {
  // console.log(element)
  // })
  /** console.log(data)
   * [
   *  {
   *   常驻祈愿: Array(...)
   *   新手祈愿: Array(...)
   *   武器活动祈愿: Array(...)
   *   角色活动祈愿: Array(...)
   *  },
   *  {...}
   * ]
   */

  // const a1 = []
  // const a2 = []
  // a1.push(data[0].新手祈愿[0])
  // a1.push(data[0].新手祈愿[1])
  // a1.push(data[0].新手祈愿[2])

  // a2.push(data[1].新手祈愿[1])
  // a2.push(data[1].新手祈愿[2])
  // a2.push(data[1].新手祈愿[3])

  // console.log(a1)
  // console.log(a2)

  // console.log('union', _.unionWith(a1, a2, _.isEqual))



  const mergedData = {}
  SHEET_NAMES.forEach(wishType => {
    const sameType = []
    data.forEach(file => {
      // console.log(Object.values(file), 'sdf')
      const sheet = file[wishType]
      // console.log(wishType, sheet)
      sameType.push(...sheet)
    })
    // console.log(wishType,sameType)

  })

  console.log('mergedData', mergedData)
  // for (let i = 0; i < 1; i++) {
  //   const e = data[0].角色活动祈愿[i]
  //   console.log(e)
  // }
  // for (let i = 0; i < 1; i++) {
  //   const e = data[1].角色活动祈愿[i]
  //   console.log(e)
  // }
}


SHEET_NAMES
_
