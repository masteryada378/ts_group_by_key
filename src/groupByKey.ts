type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  return items.reduce((result, item) => {
    // Отримуємо значення ключа, перетворюючи його на рядок
    const groupValue = String(item[key]);

    // Якщо такої групи ще немає, створюємо порожній масив
    if (!result[groupValue]) {
      result[groupValue] = [];
    }

    // Додаємо елемент до відповідної групи
    result[groupValue].push(item);

    return result;
  }, {} as GroupsMap<T>);
}
