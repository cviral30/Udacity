# JavaScript Basics

---

## Variables and data

###Variables

- Variables are the containers for storing data values.
- The syntax for storing data in a variable looks like this:
```
    var name;
    name = "Ty Kelley";
    
    var age = 19;
    age = 20;
    console.log(age); 
```
    
- `var` keyword for all variables: unlike Python, which requires no special keyword for declaring variables, and unlike Java or C, which require you to state the type (int, char, boolean, etc) of the variable, JavaScript uses "var" no matter what. Now, that doesn't mean JS doesn't have types; here's a list explaining types in JavaScript:
    * Primary Data Types:
        * String
        * Boolean
        * Number (all numbers are 64-bit floating point)
    * Composite Data Types:
        * Object
        * Array
    * Special Data Types:
        * Undefined
        * Null
- You can declare a variable with out assigning it right away. It is legal to say `var age;` and then assign it to a value in a separate statement.


###Strings

- A string is a chain of zero or more Unicode characters, enclosed by single or double quotes. We use strings to represent text in JavaScript. Here are some examples of strings:

```
    "Hello, World"
    'a'
    ""
    "I've been working on the railroad"
```

- There are some useful built-in functions for strings that we can use. One we will talk about is **replace**. This function takes two arguments a string to find and a string to replace it with.
  For example:

```
    var s = "I am a cool ice cream."; 
    s = s.replace("ice cream", "person");
    
    console.log(s); //prints "I am a cool person."
```    

### "Truthy" and "Falsy"

- There are values that evaluate to true/false, but may not necessarily equal the boolean values of true or false.

- We call these values "truthy" and "falsy":

- Truthy values:

	* true
	* any non-zero number
	* non-empty strings
	* objects
	* arrays
	* functions

- Falsy values:

	* false
	* 0
	* ""
	* undefined
	* null
	* Nan (not a number, like 1/0)

## Arrays

- In JavaScript, arrays are just lists of values. 

- JS arrays are indexed so we can easily access items.

- Just like in most languages, arrays are zero-indexed, meaning that 0 is the index of the first value.

```
	var myArray = [22, "hello", false];
    	
	var b = myArray[2];
    
   	console.log(b);
    
    	>>> false
```
    
**Length**

- Arrays also have some properties associated with them. Length is one:

```
    var n = myArray.length;
    console.log(n);
    
    >>> 3
```
    
## Push and Pop

- **push** and **pop** allow us to use JavaScript arrays so we can add and remove elements at the end of the array.

```
    var a = [0, 1, 2];
    
    var lastElement = a.pop(); //removes and returns the last element of a
    console.log(lastElement);
    
    >>> 2
    
    console.log(a);
    
    >>> [0, 1]
    
    a.push("hello");
    console.log(a);
    
    >>> [0, 1, "hello"]
```

## Objects

- In JS everything is object.
- Objects are variables only but with many values.
- Example on how to declare object:

``` 
    var info = {
        name: "VC",
        email: "viral@ajackus.com",
        age: 22
    };
```    
- We can then access the information in the object like this:

```
    console.log(info.name);
    
    >>> VC
    
    var email = info.email;
    console.log(email);
    
    >>> viral@ajackus.com
```
    
- We can also update the values, or add new keys!

```
    info.name = "Bob";
    
    info.job = "Web Developer";
    
    console.log(info);
    
    >>> Object {name: "Bob", email: "me@example.com", age: 19, job: "Web Developer"}
```    


## Dot and Bracket notation

- We have already seen one way of accessing values in Objects and that is "**dot** notation":

    **myObject.someProperty**
    
- There's another syntax that uses brackets instead, but leads to the same effect:

    **myObject["someProperty"]**

## JSON

- JSON stands for JavaScript Object Notation.

- JSON is a popular and simple format for storing and transferring nested or hierarchal data. 

## Control Flow

### If statements

- If statements help us make decisions, depending on a condition. They work in this way.

- We can also look for some other conditions by using the `else if` syntax.

- You can have as many `else-if`'s as you want. 

- Example:
```
    var x = 24;
    
    if (x % 2 == 0) {
        console.log("it is even!");
    } else {
        console.log("it is odd!");
    }
```

### While loops

- While loops execute until their condition is false.

```    
    var x = 0;
    
    while (x < 10) {
        console.log(x);
        x++;
    }
```
    


### For loops

- The JavaScript for statement loops through the properties of an object:

```
   var a = ['a', 'b', 'c', 'd', 'e', 'f'];
    
    for (var x in a) {
        console.log(a[x]);
    }
```

## Functions

- A JavaScript function is a block of code designed to perform a particular task.

- A JavaScript function is executed when "something" invokes it (calls it).

- You can use the same code many times with different arguments to produce different results.

- There are two ways to represent function:

```
   //first way
    var add = function(a, b) {
        return a + b;
    };
    
    //second way
    function add(a, b) {
        return a + b;
    }
```    
   
### Anonymous functions

- Functions can take other functions as arguments, but we don't even need to define those functions first.
    
- Anonymous functions are functions that don't have a name and are often returned by other functions and objects. 



