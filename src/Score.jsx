const Score = (props) => {
  return ( 
    <>
    <div>
      {props.scores.map((score, idx)=>
        <>{score[idx].score}</>
        
        
        )}

</div>
    </>
   );
}
 
export default Score;