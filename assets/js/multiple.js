/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */
function multiple(a, b) {
    
        var c = a; 
        for(i=1; i<b; i++)  { 
        a = a + c; 
} 
 return a; 
}
console.log(multiple(4, 4));

