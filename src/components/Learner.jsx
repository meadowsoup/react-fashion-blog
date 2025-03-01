


function Learner() {
     return (
          <div>
               <h2>{props.name}</h2>

               <h3>{props.age}</h3>

               <h4>Last Login{props.lastLogin}</h4>

               <hr />
          </div>
     )
}

export default Learner