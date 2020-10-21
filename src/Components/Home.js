import React from 'react';
import useWebAnimations , {backInLeft, bounce} from "@wellyshen/use-web-animations";



function Home() {
  const { ref , playState} = useWebAnimations ({...bounce});


  
  return (
    
      <div>
      <h1> PIAIC Boot Camp 2020 : Class 11 - React Router V6</h1>
      <h2> Student : Muhammad Javaid </h2>
      <h2> Project 05 : Use of Animation Shoe Store </h2>
      <div ref = {ref} style = {{background:"Blue", color : "white", width: "100px", height: "100px"}}>Web Animation</div>
      <div ref = {ref} style = {{background:"orange", color : "gray", fontFamily:"monospace", fontSize:"34px"}}> Project 5 is developed in React JavaScript and useWebAnimations Hook, There are animation effects like
            bounce, backInLeft. “Our eyes are hardwired to notice movement. Historically, it’s helped to keep us alive. And, in 2020, web designers are capitalizing on this default human setting. Animated illustrations are one of the newest trends being used to direct viewer attention within web designs. You’ll see these petite animations on sites all over the web. Some animated illustrations are merely still graphics that jiggle, while other illustrated animations are more thoughtful and complex. When used to their fullest capacity, animated illustrations can tell stories, explain concepts, or help viewers navigate a website.” The 8 Biggest Web Design Trends of 2020
      </div>
    </div>

  );
}

export default Home;
