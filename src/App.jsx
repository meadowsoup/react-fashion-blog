import './App.css';
import Article from './components/Article';
import Learner from './components/Learner';

import learnerData from './data/learners';

import image from "./assets/blog-image-1.jpg";
import image2 from "./assets/blog-image-2.jpg";


function App() {
  const str = "lorem"

  return (
    <div>
      <h1>Fashion Blog</h1>

      {
        learnerData.map((item, index) => (
          <Learner
          key={index} 
          name={item.name}
          age={item.age}
          lastLogin={item.lastLogin}
          />
        ))
      }

      <Learner
        name="Sunny"
        age={30}
        lastLogin="2/12/23"
      />

      <Learner
        name={learnerData[0].name}
        age={learnerData[0].age}
        lastLogin={learnerData[0].lastLogin}
      />

      <Learner
        name={learnerData[0].name}
        age={learnerData[0].age}
        lastLogin={learnerData[0].lastLogin}
      />



      <Article
      title="First Blog"
      content="lorem"
      date="2/23/34"
      img={image}
      />

      <Article
      title="Second Blog"
      content="lorem"
      date="4/12/23"
      img={image2}
      />

      
    </div>
  )
}

export default App
