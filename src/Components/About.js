import React from 'react';
import useWebAnimations , {backInLeft }from "@wellyshen/use-web-animations";


function About() {

  const { ref , playState} = useWebAnimations ({...backInLeft});


  return (
    <div>
   
   <h1 style = {{background:"orange", color : "gray", fontFamily:"monospace", fontSize:"34px"}}> Welcome to About Page</h1>
      
    <div ref = {ref} style = {{background:"purple", color : "darkgray", fontFamily:"inherit", fontSize:"25px"}}> Welcome to About Page : Project 5 is developed in React JavaScript and useWebAnimations Hook, There are animation effects like.
    Let’s talk about the Web Animations API This is an introduction to a tutorial series on the Web Animations API coming to browsers. I've updated the series content in June 2016, as Chrome and Firefox have both rolled out major updates (and some small spec changes). If you have thoughts/questions or see that I’ve misinterpreted the spec, please reach out to me on Twitter, @dancwilson.
In Summer 2014, Google announced Material design with a representation in web through Polymer… using a polyfill for the upcoming standard Web Animations API.
I hadn’t heard of this API, but I was intrigued, especially since it talked about a MotionPath effect. That wasn’t implemented yet (you’ll find out what happened in Part 5), but its goal of providing a way to unite the CSS, JS, and SVG ways to animate kept me interested. A year later and Chrome and Firefox have started implementations, the polyfill’s progress is steady, and it’s time to take a look at it in earnest.
But so few people are talking about the WAAPI! My hope is to start a series of posts highlighting the features that are in browsers (and the polyfill) now, exploring why we want this API, and figuring out the nuances. Hopefully we will also get more people discussing, and working with, this API.

What is the Web Animations API?
We’ll start this exploration by figuring out what it is and what it is trying to accomplish.

Animation has progressed nicely in the last half decade, with great CSS support and new additions to improve JavaScript. But each approach to animation still has a slew of cons to all the pros they provide.

CSS has hardware acceleration for smooth transitions and support is built into the browser, but rules are declared in CSS and require jumping through JavaScript hoops to get values dynamically changed.
requestAnimationFrame has good support and lets the browser optimize when to animate, but it can still hang up if there is a lot of other JavaScript running. It also often requires more math to get timing down.
setInterval introduced many developers to animations, but it is imprecise and can lead to stuttering animations.
jQuery.animate() introduced several other developers to animations, but often has performance issues.
Libraries such as Velocity and GreenSock (GSAP) improve JavaScript performance and have been tested in many situations to be the best they can be. They still, however, require maintaining and loading external libraries.
In general, we like it when browsers support as much as they can, and they take over the optimizations. Browsers now have document.querySelector because we saw the value jQuery provided to select DOM elements. So utilities in libraries moved into the browser natively. Ideally, we could pack as much animation control at the browser level. These libraries can then focus on providing newer features, and the cycle can continue.

The Web Animations API tries to do this. It aims to bring the power of CSS performance, add the benefits and flexibility of JavaScript (and SVG animation, which we will talk about in a future post), and leave it to the browsers to make it work well.
    bounce, backInLeft
</div>
</div>
  );
}

export default About;
