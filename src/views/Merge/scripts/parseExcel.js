// import parseToDate from './parseToDate';
import { WISHS_NAMETOTYPE } from '@/scripts/constants';
import parseToDate from './parseToDate';

export default function parseExcel(XLSX, workbook) {
  const sheetsName = workbook.SheetNames;
  const sheets = workbook.Sheets;
  const result = {};
  sheetsName.forEach((sheetName) => {
    if (sheetName in WISHS_NAMETOTYPE) {
      const type = (WISHS_NAMETOTYPE)[sheetName];
      const sheet = sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);
      json.forEach((item, index) => {
        item.祈愿 = sheetName;
        item.时戳 = +parseToDate(item.时间);
        item.总次数 = index + 1;
        ['星级', '保底内'].forEach(key => {
          if (typeof item[key] !== 'number') {
            item[key] = parseInt(item[key]);
          }
        });
      });
      result[type] = json;
    } else {
      throw new Error(`cannot parse sheetName ${sheetName}`);
    }
  });
  return result;
}

