import React, { useEffect } from 'react'
import hero from '../images/hero.jpg';
import { backgroundImageDataAttribute, spacerDataAttribute } from '../custom';

function Home() {

  useEffect(() => {
    backgroundImageDataAttribute();
    spacerDataAttribute();
  }, [])


  return (
    <section class="hero background parallax shadow-dark d-flex align-items-center" data-image-src={hero}>
      <span class="hash-anchor" id="home"></span>
      <div class="cta mx-auto mt-2">
        <h1 class="mt-0 mb-4">Hello world!</h1>
        <h1 class="mt-0 mb-4">I’m Benjamin<span class="dot"></span></h1>
        <p class="mb-4">In the current time when technology is growing so fast, I'm giving my best of myself to be part of it by helping to deploy and develop things that will make people's lives easier. Be free to continue and read more <a href="#about" link=""> about me.</a></p>
        <a href="#" class="btn btn-default btn-lg mr-3"><i class="icon-grid"></i>View Portfolio</a>
        <div class="spacer d-md-none d-lg-none d-sm-none" data-height="10"></div>
        <a href="#" class="btn btn-border-light btn-lg"><i class="icon-envelope"></i>Contact me</a>
      </div>
      <div class="overlay"></div>
    </section>
  )
}

export default Home
