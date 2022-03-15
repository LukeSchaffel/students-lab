import Score from "./Score";

const Student = (props) => {
  return ( 
    <>
      <div> 
       <h1>{props.student.name}</h1>
       <p>{props.student.bio}</p>
      {props.student.scores.map(object=>
        <Score object={object}/>
        )}
      </div>
      
    </>
    
   );
}
 
export default Student;

