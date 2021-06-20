import parseExcel from './parseExcel';

export default function parseFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      import('xlsx')
        .then((module) => {
          try {
            const XLSX = module;
            const data = new Uint8Array(reader.result);
            const workbook = XLSX.read(data, { type: 'array' });
            resolve(parseExcel(XLSX, workbook));
          } catch (e) {
            console.error(e);
            reject(e.message);
          }
        })
        .catch((e) => {
          console.log(e);
          reject('XLSX解析文件加载失败，请重新上传');
        });
    };
    reader.onerror = () => {
      reject('读取文件失败，请重新上传');
    };
  });
}
