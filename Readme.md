# Slider

## Practical information

* Repository: `jQuery slider`
* Deadline: 1.5 days
* Delivery: Github page (published)

## Learning objectives

* Use the learned JavaScript & jQuery;
* The repeated calling of functions;
* Learning to split a "problem" into "sub-problems".

## Order

You have to make a slider yourself. This slider, which is also called _carousel_, should contain a number of basic functions:

* It should have two buttons, one to display the previous image, the other to display the next image;
* He will be able to scroll alone, i.e. the images will scroll without us having to intervene;
* It can be very flexible since it will be possible to place as many images as you want.

_Tip:
Start easily! You can still add improvements later.
It must not be a work of art. In this case the functionality comes first._

## Calling a function repeatedly

A native method of **JavaScript** helps you to automatically browse through the images. This is `setTimeout ()`, which requires two arguments: the name of the function to be executed and the time interval (in milliseconds) to wait. The trick is to restart the function in itself to create an infinite loop:

```JavaScript
var myLoop = function () {
    setTimeout (function () {
        alert ("Hello!"); // will display "Hello!" every second
        myLoop (); // restarts the function
    }, 1000);
};

myLoop (); // don't forget to launch the function for the first time
```

The images used here come from [lorempixel.com](http://lorempixel.com/) and not all images are copyright free.

You now have all the keys to make this slider!

Don't forget to use the **jQuery** documentation if you need it, and use the "debugger" to locate a problem in your code.

## Improvements

We have just presented a very simple slider. Most of the things you encounter on the web are much more sophisticated, but don't forget that they all work in almost the same way! So what about improving yours? Here are some tips:

* Scrolling images is not very aesthetic: instead of the display system, try to create nice animation effects instead!
At the moment the checks are very simple: it is not possible to go to a specific image by clicking only once. What about making a list of buttons that each represent a slide?
* In the same way, it is possible to make thumbnails of the images and display them under the slider for much better navigation!

The possibilities are endless, you can always find new ideas, whether they are good or not.
