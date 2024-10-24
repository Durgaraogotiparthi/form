function Footer(props){
    let date = new Date().toLocaleDateString();
    return((props.foot ? <p>Hi</p> : <h1>Hello Durgarao Today date is {date}</h1>))
    // if(props.foot){
    // return(
    //     <>  
    //     <p>Copy@ This is the Footer page on this website {date}</p>
    //     </>
    // )}
    // else{
    //     return(
    //     <p>Object Not Found</p>
    //     )
    // }
}
export default Footer