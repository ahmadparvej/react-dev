
import Card from "./Card";

let data ={
    image:"https://pixlok.com/wp-content/uploads/2021/02/profile-Icon-SVG.jpg",
    name:"parvej",
    coarse:"ftweb",
    code:"fw16_664"
}
const EmployeeDetail = ()=>{
    return (
        <>
        <Card {...data}/>
        </>
    )
}

export default EmployeeDetail