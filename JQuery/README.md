# JQUERY

- JQuery is a set of helpful addons to the javascript.
- jQuery is much better at giving you immediate, visual results than regular JavaScript.
- We need **<script>** tag to link our html code to our js code.
```<script type="text/javascript" src="example.js"></script> ```
- Functions are the basic unit of doing work in jQuery.
- It looks like this :
```
	$(document).ready(function(){

	});
```
- .slideDown() will slide the div in a way we want such as slow or fast. We can enter slow or inside the the bracket.
- .mouseenter() does what you might expect: it produces a change when your mouse enters a given HTML element.
- .fadeTo() takes 2 arguments between parentheses separated by comma: the speed at which to fade and the opacity to fade to.
- Similar to mouseenter .mouseleave() will perform action as you leave given HTML element.
- One of the nice things about jQuery is that you can give a function just about anything as an input—even another function! That's why .ready() can take function between its parentheses; it's taking a function as input.
- We can call classes and id's in jquery. If we wnat to use any class then .before the classname and if want to use id then # beefore the ID inside the parentheses $().
- We can use many classes inside the parentheses separated by comma.
- Example :
```  $('.red, .pink').fadeTo('slow',0); ```
- The this keyword refers to the jQuery object you're currently doing something with. Its complete rules are a little tricky, but the important thing to understand is if you use an event handler on an element—that's the fancy name for actions like .click() and .mouseenter(), since they handle jQuery events—you can call the actual event that occurs (such as fadeOut()) on $(this), and the event will only affect the element you're currently doing something with (for example, clicking on or mousing over).
- We can slide the div by using .slideToggle() and we can give speed to our slide animation.
- We can insert HTML elements inside our jasascript. We can use before and after to the class or id so the HTML element will appear as per condition.
- We might want to cause a jQuery effect when a user double clicks on an element, rather than just single-clicking. We can do this with the .dblclick() event handler.
- The .keydown() event is triggered whenever a key on the keyboard is pressed. It only works on whatever page element has focus, so you'll need to click on the window containing your div before pressing a key in order for you to see its effects.
- jQuery UI includes a number of ultra-fancy animations you can use to make your websites do incredible things. Such as explode, bounce, slide etc.
- JQuery UI includes a .draggable() function that can make any HTML element draggable—you can click on it and move it anywhere on the page.
- We can reorder the list using .sortable() function.
- Accordion is a menu when clicking on it will show the structure as build.
    