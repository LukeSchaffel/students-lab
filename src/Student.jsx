import Score from "./Score";

const Student = (props) => {
  return ( 
    <>
      <div> 
       <h1>{props.student.name}</h1>
       <p>{props.student.bio}</p>
      </div>
      
    </>
    
   );
}
 
export default Student;

// props.students.scores.map(container)