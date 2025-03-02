// import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer'
import Article from './components/Article';

import image1 from './assets/blog-image-1.jpg'
import image2 from './assets/blog-image-2.jpg'

function App() {

  return (
    <>
    <div>
      <Header />
      <main>
        <Article 
          date="11/12/20"
          title="One the Street in Brooklyn"
          image={image1}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          saepe et possimus quia ex ipsa! Quas vero omnis illo dolore,
          quibusdam, sint quis amet labore ab, hic odio exercitationem quod!"
          />

          <Article 
          date="11/11/20"
          title="Vintage in Vogue"
          image2={image2}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          saepe et possimus quia ex ipsa! Quas vero omnis illo dolore,
          quibusdam, sint quis amet labore ab, hic odio exercitationem quod!"
          />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
