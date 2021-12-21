export const aUploadProps = {
  name: 'file',
  multiple: true,
  showUploadList: false,
  accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, .xlsx',
  // 不加这行会报错 POST http://localhost:3000/ 404 (Not Found)
  customRequest: () => { }
}
