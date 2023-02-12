const arr = [1, 2, 4, 4, 7, 8, 5, 9, 1, 2, 4, 5, 6, 8, 5, 2, 40];



const splice = (arr) => {
    // удалить два элемента начиная с индекса 2
    // также удаленные элементы возвращаются с этого метода
    let res = arr.splice(2, 2);
    console.log(res); // вывод 4,4

    // удалить 1 элемент с индекса 0 и добавать в это место 4317
    arr.splice(0, 1, 4317);
    console.log(arr);
    // если использовать отрицательный индекс индексация начнется с конца массива
}
// splice(arr);



const slice = (arr) => {
    // arr.slice([начало][конец])

    let subArray = arr.slice(0, 2);
    console.log(subArray);
}

// slice(arr);

const concat = (arr) => {
    arr.concat([77, 88, 99]);
    // в существующий массив добавляется переданные параметры
    console.log(arr);

}

// concat(arr);

const forEach = (arr) => {
    arr.forEach(it => console.log(it)); // вывод всех элементов
}

// forEach(arr);


const index = (arr) => {
    // indexOf -> первое вхождение
    // lastIndexOf ->  последнее вхождение
    // includes -> проверка наличии

    let f = arr.indexOf(5);
    let l = arr.lastIndexOf(2);
    let i = arr.includes(24);

    conaole.log(f, l, i);
}

// index();


function filt(item) {
    return item % 2 === 0;
}

const filter = (arr, filt) => {
    let res = arr.filter(filt); // res = arr.filter(item => item %2 ===0);
    console.log(res);
}

// filter(arr, filt);


let words = ['Daneker', 'Java', 'Astana', 'IT'];

const map = (words) => {
    let lens = words.map(word => word.length); // здесь мы преобразуем каждый элемент в его длину:
    let upper = words.map(word => word.toUpperCase()); // конвертация в верхний регистр
    console.log(lens);
    console.log(upper);
}

// map(words);

const sort = (arr, words) => {
    let sortedWords = words.sort((a, b) => a > b ? 1 : -1);
    console.log(sortedWords);

    let sortedNums = arr.sort((a, b) => a - b);
    console.log(sortedNums);

}

// sort(arr , words);







