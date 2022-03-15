import Student from "./Student";

const StudentList = (props) => {
  return ( 
    <div>
      {props.students.map((student, idx) =>
       <Student student={student}/>   
          
          )}
    </div>
   );
}
 
export default StudentList;