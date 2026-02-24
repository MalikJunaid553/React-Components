const Footer = ({userName , setUser})=>{
     const changeName = (e)=>{
    e.preventDefault();
    setUser("Awan")
  }
    return(
        <>
         <h1>Hello , {userName} Thanks for sendinng this Footer data. </h1>
        <div>This Output is coming from the Footer Component </div>
        <button onClick={changeName}>Click to change name</button>
        </>
    );
}
export default Footer;