export default function UploadItem(data) {
  console.log(data);
  const { from, to, count } = Object.values(data).reduce(
    (acc, cur) => {
      acc.count += cur.length;
      if (cur.length === 0) return acc;
      const start = cur[0];
      const end = cur[cur.length - 1];
      if (!acc.from) {
        acc.from = start.时戳;
      }
      else {
        acc.from = Math.min(acc.from, start.时戳);
      }
      if (!acc.to) {
        acc.to = end.时戳;
      }
      else {
        acc.to = Math.max(acc.to, end.时戳);
      }
      return acc;
    },
    {
      from: 0,
      to: 0,
      count: 0,
    },
  );
  const format = (时戳) => {
    if (!时戳) return '未知时间范围';
    return new Date(时戳).toLocaleDateString();
  };
  return `时间范围: ${format(from)} —— ${format(to)}(共 ${count} 抽)`;
}
