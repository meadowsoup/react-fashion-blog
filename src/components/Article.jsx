import React from "react";


function Article({ date, title, image, content }) {     
     return (
          <article>
               <h1>{title}</h1>
               <h2>{date}</h2>

               <img src={image} alt={title}  />

               <p>{content}</p>
               <a href="#" className="continues">Continues ...</a>
          </article>
     );
}

export default Article;