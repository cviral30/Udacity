# JAVASCRIPT

- Javascript has 3 data types those are string, numbers and booleans. To declare or use a string we need to use inverted comma but for numbers its declare without it.
- Alert will alert you that what you have choose result in follwing.
- Confirm will ask you for confirmation in 2 options either ok or cancel.
- Variables defined outside a function are accessible anywhere once they have been declared. They are called global variables and their scope is global. Variables defined inside a function are local variables. They cannot be accessed outside of that function.

### If/else :

- If statement will help you out to make decision on basis of condition.
- Syntax of if is: 
```
	if (x % 2 == 0) {
        	console.log("it is even!");
    	} else {
        	console.log("it is odd!");
    	}
```

### Functions :

- A function is a code that is designed to perform some task.
- Function can be used many times with different arguments.
- Functions are performed when something invokes it or calls it.
- Syntax :
```
	var add = function(a, b) {
        return a + b;
    };
```

### For loop :

- For loop is used to repeat some part of code till the condition is true.
- Syntax :
```
	for (var counter = 1; counter < 11; counter++) {
		console.log(counter);
	}
	
	or
	
	var a = ['a', 'b', 'c', 'd', 'e', 'f'];

    	for (var x in a) {
        	console.log(a[x]);
    	}
```

### While and Do while :

- While loops execute until their condition is false.
- Do while is same as while but in while if condition is true then and then only it executes and in do whlile atleast one time it executes and then check for condition.
- Syntax :
```
	while (x < 10) {
        	console.log(x);
        	x++;
    	}

	Do while:
	
	var loopCondition = false;

	do {
		console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
	} while (loopCondition);
```

### Switch case :

- Switch allows you to preset a number of options (called cases), then check an expression to see if it matches any of them. If there's a match, the program will perform the action for the matching case; if there's no match, it can execute a default option.
- Syntax :
```
	switch (/*Some expression*/) {
    	case 'option1':
        	// Do something
        	break;
    	case 'option2':
        	// Do something else
        	break;
    	default:
       		// Do yet another thing
	}
```

### Objects :

- Objects are variables only but with many values.
- There are 2 ways to create an object those are object literal notation and object constructor.
- In object literal notaion object is created by given syntax :
```
	var info = {
        	name: "VC",
        	email: "viral@ajackus.com",
        	age: 22
    	};
```
- In object constructor object is created by given syntax :
```
	var me = new Object();
	me["name"] = "Viral";
	me["age"] = 22;
```
- We can access and update the values inside objects.

### this keyword:

- The keyword this acts as a placeholder, and will refer to whichever object called that method when the method is actually used.
- Syntax :
```
	var setAge = function (newAge) {
  		this.age = newAge;
	};
```



  