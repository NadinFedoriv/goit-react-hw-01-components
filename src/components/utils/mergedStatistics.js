export function mergeItems(arr) {
  const mergedItems = [];
  arr.forEach(item => {
    const existingItem = mergedItems.find(el => el.label === item.label);
    if (existingItem) {
      existingItem.percentage += item.percentage;
    } else {
      mergedItems.push({ ...item });
    }
  });
  return mergedItems;
}
