export const Practices = ()=>{
   const students =[];
   return(
    <div>
        <p>
            {!students.length && "No student Found"}
        </p>
        <p>
            Number of Students : {students.length}
        </p>
    </div>
   )
}