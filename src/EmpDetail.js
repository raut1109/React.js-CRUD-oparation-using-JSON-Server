import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

 

    const EmpDetail = () => {
        const { empid } = useParams();
    console.log(empid);
        const [empdata, empdatachange] = useState({});
    
        useEffect(() => {
            fetch("http://localhost:8000/employee/" + empid).then((res) => {
                return res.json();
            }).then((resp) => {
                empdatachange(resp);
            }).catch((err) => {
                console.log(err.message);
            })
        }, []);
   return (
     <div>


        <h1>EmpDetail</h1>
       {empdata &&
        <h1> the employee name is : {empdata.name} and {empdata.id}</h1>
       }
     </div>
   )
 }
 
 export default EmpDetail
 