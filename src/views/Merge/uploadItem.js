import dateFormat from 'dateformat'

export default function createUploadItem(file) {
  return new Promise((resolve, reject) => {
    const uploadItem = {
      file: file,
      type: MESSAGE_TYPE[0],
      data: null,
      message: null,
    }
    // 判断后缀
    if (file.name.endsWith('.xlsx')) {
      // 读取文件数据
      const reader = new FileReader()
      reader.readAsArrayBuffer(file)
      reader.onload = () => {
        import('xlsx').then((XLSX) => {
          try {
            const fileData = reader.result
            const workbook = XLSX.read(fileData, { type: 'array' })
            // 格式化数据
            const formattedData = formatData(XLSX, workbook)
            // 获取时间范围
            const range = findRange(formattedData)
            uploadItem.data = formattedData
            uploadItem.range = range
            uploadItem.message = createMessage(range)
            uploadItem.type = MESSAGE_TYPE[1]
            resolve(uploadItem)
          } catch (e) {
            uploadItem.message = e.message
            reject(uploadItem)
          }
        })
      }
    } else {
      uploadItem.message = '文件类型错误，请上传 .xlsx 文件'
      reject(uploadItem)
    }
  })
}

// 格式化 sheet_to_json
function formatData(XLSX, workbook) {
  const sheetsName = workbook.SheetNames
  const sheets = workbook.Sheets
  /** console.log(sheets)
   * 常驻祈愿: {!ref: "A1:F330", A1: {…}, B1: {…}, C1: {…}, D1: {…}, …}
   * 新手祈愿: {!ref: "A1:F21", A1: {…}, B1: {…}, C1: {…}, D1: {…}, …}
   * 武器活动祈愿: {!ref: "A1:F33", A1: {…}, B1: {…}, C1: {…}, D1: {…}, …}
   * 角色活动祈愿: {!ref: "A1:F539", A1: {…}, B1: {…}, C1: {…}, D1: {…}, …}
   */
  const formattedData = new Object()
  sheetsName.forEach((sheetName) => {
    if (SHEET_NAMES.includes(sheetName)) {
      const sheet = sheets[sheetName]
      const json = XLSX.utils.sheet_to_json(sheet)
      formattedData[sheetName] = json
    } else {
      throw new Error(`cannot parse sheetName ${sheetName}`)
    }
  })
  /** console.log(formattedData)
   * 常驻祈愿: (xx) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
   * 新手祈愿: (xx) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
   * 武器活动祈愿: (xx) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
   * 角色活动祈愿: (xx) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
   */
  return formattedData
}

// 获取数据范围
function findRange(formattedData) {
  const data = formattedData
  const dates = []
  for (const sheetNames in data) {
    if (Object.hasOwnProperty.call(data, sheetNames)) {
      const sheet = data[sheetNames]
      const date = sheet.map(item => new Date(item.时间))
      dates.push(...date)
    }
  }
  return {
    from: Math.min.apply(null, dates),
    to: Math.max.apply(null, dates),
    count: dates.length,
  }
}

// 生成字符串 
function createMessage(range) {
  const { from, to, count } = range
  const timeFrom = dateFormat(from, 'yyyy-mm-dd')
  const timeTo = dateFormat(to, 'yyyy-mm-dd')
  return `时间范围：${timeFrom} 至 ${timeTo} (共 ${count} 次祈愿)`
}

const SHEET_NAMES = [
  '新手祈愿',
  '常驻祈愿',
  '角色活动祈愿',
  '武器活动祈愿',
]

const MESSAGE_TYPE = [
  { name: 'error', no: 0 },
  { name: 'success', no: 1 },
]
