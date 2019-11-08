'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: 'Returns anything unchanged'
 * 
 * @param {Anything} value: Any value
 * 
 * @return {Anything} value: Any value
 * 
 * Examples:
 * identity(14) === 14
 * identity({alpha: "beta"}) === {alpha: "beta"}
*/
function identity(value) {
    return value;
}


/**
 * typeOf: Return the type of any value as a string
 * 
 * @param {Anything} value: Any value
 * 
 * @return {String}: The type of any value as a string.
 * 
 * Examples:
 * typeOf(42) -> "number"
 * typeOf("memes") -> "string"
 * typeOf([1,2,3,4]) -> "array"
*/
function typeOf(value){
    if(typeof value !== 'object'){
        return typeof value;
    } else if(Array.isArray(value)){
        return 'array';
    } else if(value === null){
        return 'null';
    } else if(value instanceof Date){
        return 'date';
    } else {
        return 'object';
    }
}


/**
 * first: Designed to loop over an array and in turn return the first <number> items of <array>
 * If <array> is not an array, return []
 * If <number> is not given or not a number, return just the first element in <array>.
 * 
 * @param {Array} array: The collection over which we are iterating.
 * @param {Number} number: The number of items in which to return
 * 
 * @return {Array or Value(in an array)}: The first {Number} of values in an array. 
 * An empty array if {Array} is not an array. 
 * First {Value} if number is undefined or {Value} is not a number.
 * 
 * Examples:
 * first("horses", 2) -> []
 * first(["a", "b", "c"], "horses") -> "a"
 * first(["a", "b", "c"], 1) -> "a"
 * first(["a", "b", "c"], 2) -> ["a", "b"]
*/
function first(array, number){
    let arr = [];
    
    if(!Array.isArray(array) || number < 0){
        return arr;
    }

    if(!number || isNaN(number)){
        return array[0];
    }
  
    if(number > array.length){
        return array;
    }
    
    for(let i = 0; i < number; i++){
        arr.push(array[i]);
    }
    
    return arr;
}


/**
 * first: Designed to loop over an array and in turn return the last {Number} items of <array>
 * If <array> is not an array, return []
 * If <number> is not given or not a number, return just the first element in <array>.
 * 
 * @param {Array} array: The collection over which we are iterating.
 * @param {Number} number: The number of items in which to return
 * 
 * @return {Array or Value(in an array)}: The last {Number} of values in an array. 
 * An empty array if {Array} is not an array. 
 * Last {Value} if {Number} is undefined or {Value} is not a number.
 * 
 * Examples:
 * last("horses", 4) -> []
 * last(["a", "b", "c"], "horses") -> "c"
 * last(["a", "b", "c"], 1) -> "c"
 * last(["a", "b", "c"], 2) -> ["b", "c"]
*/
function last(array, number){
    let arr = [];
    
    if(!Array.isArray(array) || number < 0){
        return [];
    }
  
    if(!number || isNaN(number)){
        return array[array.length - 1];
    }
  
    if(number > array.length){
        return array;
    }
    for(let i = array.length - number; i < array.length; i++){
        arr.push(array[i]);
    }
    
    return arr;
}


/**
 * indexof: Designed to return the index of an <array> that is the first occurrance of a <value>.
 * Return -1 if that <value> is not in the <array>.
 * 
 * @param {Array} array: The collection in which is being passed in.
 * @param {Value} value: The value in this function represents the index that we are locating.
 * 
 * @return {Number}: The number/index at which a {Value} lies within an {Array}.
 * 
 * Examples:
 * indexOf(["a","b","c"], "c") -> 2
 * indexOf(["a","b","c"], "d") -> -1
*/
function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        }
    }
    return -1;
}


/**
 * contains: Designed to return true if an array contains a specified value.
 * Return false otherwise.
 * 
 * @param {Array} array: The collection that will be passed into the function
 * @param {Value} value: The value that we are searching for.
 * 
 * @return {Boolean}: Returns a {Boolean} value bases on whether or not {Array} contains {Value}
 * 
 * Examples:
 * contains([1,"two", 3.14], "two") -> true
*/
function contains(array, value){
    let match = false;
    each(array, function(e,i,a){
        if(e === value){
            match = true;
        }
    });
    return match;
}

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}


/**
 * unique: Designed to remove elements from an <array>
 * Return a new array with all duplicates removed.
 * Both the indexOf() and filter() function are implemented in this function.
 * 
 * @param {Array} array: The collection over which we are iterating.
 * 
 * @return {Array}: A new array with all duplicates removed.
 * 
 * Examples:
 * unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/
function unique(array){
    return filter(array, (element, index) => indexOf(array, element) === index);
}


/**
 * filter: Designed to loop over an <array>.
 * Filter out elements in an <array> that pass a test.
 * Push those elements to a new array.
 * The each() function from above is implemented in this function.
 * 
 * @param {Array} array: The collection over which we are iterating.
 * @param {Function} test: The Function to be applied to each value
 * in the collection
 * 
 * @return {Array}: An array with all values that pass a test filtered out from the original array.
 * 
 * Examples:
 * filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
*/
function filter(array, test){
    let newArray = [];
    each(array, function(element, index, array){
        if(test(element, index, array)){
            newArray.push(element);
        }
    });

    return newArray;
}


/**
 * reject: Logical inverse of filter().
 * Designed to loop over an <array> and apply a <function> to each element.
 * Return a new array of elements for which the calling <function> returned false.
 * The filter() function from above is implemented in this function.
 * 
 * @param {Array} arr: The collection over which we are iterating.
 * @param {Function} funct: The Function to be applied to each value
 * in the collection.
 * 
 * @return {Array}: An array with all values that don't pass a test filtered out from the original array.
 * 
 * Examples:
 * reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
function reject(array, test){
   return filter(array, (element, index, array) => !test(element, index, array));
}


/**
 * partition: Designed to call a <function> for each element in an <array>.
 * Passing in the arguments: element, key, <array>
 * Return an array that is made up of 2 sub arrays:
 * An array that contains all truthy values from the function.
 * An array that contains all falsy values from the function.
 * 
 * @param {Array} arr: The collection over which we are iterating.
 * @param {Function] funct: The Function to be applied to each value
 * 
 * @return {Array}: An array containing 2 sub arrays: one containing truthy values and one containing the falsy values
 * 
 * Examples:
 * partition([1,2,3,4,5], function(element,index,arr){
 *      return element % 2 === 0;
 *    }); -> [[2,4],[1,3,5]]
 * }
*/
function partition(array, test){
    let part = [];
    
    part.push(filter(array, (element, index, array) => test(element, index, array)));
    
    part.push(reject(array, (element, index, array) => test(element, index, array)));
    
    return part;
}


/**
 * map: Designed to call a function for each element in a collection passing the arguments:
 * if <collection> is an array:
 *     the element, it's index, collection
 * if <collection> is an object:
 *     the value, it's key, collection
 * Save the return value of each function call in a new array.
 * Return the new array.
 * 
 * @param {Array or Object} collection: The collection over which we are iterating.
 * @param {Function} iterator: The Function to be applied to each value
 * 
 * @return {Array}: A new array that contains all the values that the {Function} applied.
 * 
 * Examples:
 * map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
function map(collection, iterator){
    let arr = [];
    
    each(collection, function(element, iteratee, collection) {
      arr.push(iterator(element, iteratee, collection));
    });
    
    return arr; 
}


/**
 * pluck: Return an array containing the value of an objects property for every element in an array
 * 
 * @param {Array} array: An array of objects.
 * @param {Anything} key: The key(s) of the object(s) that are potentially in this array.
 * 
 * @return {Array}: A new array 
 * 
 * Examples:
 * pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
function pluck(array, key){
    return map(array, object => object[key]);
}



/**
 * every: Designed to call a function for each element in a collection passing the arguments:
 * if <collection> is an array:
 *     the element, it's index, collection
 * if <collection> is an object:
 *     the value, it's key, collection
 * If the return value of calling <function> for every element is true, return true
 * If even one of them returns false, return false
 * If <function> is not provided, return true if every element is truthy, otherwise return false
 * The typeOf(), contains(), and filter() function from above are implemented in this function.
 * 
 * @param {Array or Object} collection: The collection that will be passed into the function
 * @param {Function} test: The Function to be applied to each value
 * 
 * @return {Boolean}: Returns true if every element passes a test 
 * or if every element contains a truthy value.
 * 
 * Examples:
 * every([2,4,6], function(e){return e % 2 === 0}) -> true
 * every([1,2,4], function(e){return e % 2 === 0}) -> false
*/
function every(collection, test){
    let arr = [];
    
    if(!test){
        return contains(filter(collection, Boolean), true);
    }
    
    each(collection, function(element,iteratee,collection){
        arr.push(test(element,iteratee,collection));
    });
    
    return !contains(arr, false);
}


/**
 * some: The inverse of every
 * Designed to call a <function> for each element in a collection.
 * This takes the same arguments as every
 * If the return value of calling <function> for every element is false, return false
 * If even one of them returns true, return true
 * If <function> is not provided, return true if at least one element is truthy, otherwise return false
 * 
 * @param {Array or Object} collection: The collection that will be passed into the function
 * @param {Function} test: The Function to be applied to each value
 * 
 * @return {Boolean}: Returns true if every element passes a test 
 * or if every element contains a truthy value.
 * 
 * Examples:
 * some([1,3,6], function(e){return e % 2 === 0}) -> true
 * every([1,3,5], function(e){return e % 2 === 0}) -> false
*/
function some(collection, test){
    let arr = [];
    
    if(!test){
        return contains(filter(collection, Boolean), true);
    }
    each(collection, function(element,iteratee,collection){
        arr.push(test(element,iteratee,collection));
    });
    
    return contains(arr, true);
}


/**
 * reduce: Designed to boil down a list of values into a single value.
 * Call <function> for every element in an <array> passing the arguments:
 *      previous result, element, index
 * Uses the return value of <function> as the "previous result" for the next iteration.
 * On the very first iteration, uses <seed> as the "previous result"
 * If no <seed> was given, use the first element/value of <array> as <seed>
 * After the last iteration, return the return value of the final <function> call
 * 
 * @param {Array} array: The collection over which we are iterating.
 * @param {Function} iterator: The Function to be applied to each value
 * @param {Seed} accumulator:
 * 
 * @return {Anything}: 
 * 
 * Examples:
 * reduce([1,2,3,4], function(previousSum, currentValue){ return previousSum + currentValue }, 0) -> 10
*/
function reduce(array, iterator, accumulator){
    if(accumulator === undefined){
        accumulator = array[0];
        for (let i = 1; i < array.length; i++){
            accumulator = iterator(accumulator, array[i], i);
        } 
    } else {
        for (let i = 0; i < array.length; i++){
            accumulator = iterator(accumulator, array[i], i);
        }
    }
    return accumulator;
}


/**
 * extend: Designed to copy properties from <object 2> to <object 1>
 * If more objects are passed in, copy their properties to <object 1> as well...
 * In the order they are passed in.
 * Return the update <object 1>
 * 
 * @param {Object(s)}: A variable # of objects.
 * 
 * @return {Object}: A single object that has the same properties of all the objects passed into the function.
 * 
 * extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 * extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
function extend(){
    for (let i = 1; i < arguments.length; i++){
        for (let key in arguments[i]){
            if (arguments[i].hasOwnProperty(key)){
                arguments[0][key] = arguments[i][key];
            }
        }
    }
    return arguments[0];
}

//Modules below//
module.exports.identity = identity;
module.exports.typeOf = typeOf;
module.exports.first = first;
module.exports.last = last;
module.exports.indexOf = indexOf;
module.exports.contains = contains;
module.exports.each = each;
module.exports.unique = unique;
module.exports.filter = filter;
module.exports.reject = reject;
module.exports.partition = partition;
module.exports.map = map;
module.exports.pluck = pluck;
module.exports.every = every;
module.exports.some = some;
module.exports.reduce = reduce;
module.exports.extend = extend;
