const myMap = new Map();
myMap.set('apple', 'яблоко');
myMap.set('banana', 'банан');
myMap.set('orange', 'апельсин');

const keys = myMap.keys();

for (const key of keys) {
    const value = myMap.get(key);
    console.log(`Ключ — ${key}, значение — ${value}`);
}