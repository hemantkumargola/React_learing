// import Childcom from "./Childcom"

// import { useRef, useState } from "react"

// function App(){
//   return(
//     <>
//     <h1>hemant kumar gola</h1>
//     <h2>learn recat </h2>
//     <Childcom name="props beja hai " time={10} />
//     </>
//   )
// }

// export default App








// onchange event in react 

// function App(){
//   const [name, setname] = useState("")
//   return(
//     <>
//     <h1>hemant kumar gola </h1>
//     <input type="text" value={name}   onChange={(event)=> setname(event.target.value)} placeholder="enter your name " />
//     <button onClick={()=> setname("")}>clear </button>
//     <p>live preview:  {name}</p>
//     </>
//   )
// }

// export default App








// un control component 


// function App() {

//   const nameref = useRef("");
//   const emailref = useRef("");
//   const numref = useRef("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const name = nameref.current.value;
//     const email = emailref.current.value;
//     const number = numref.current.value;

//     alert(`Name: ${name}, Email: ${email}, Number: ${number}`);
//   };

//   const hadlereset = () =>{
//     nameref.current.value = "";
//      emailref.current.value =""
//     conumref.current.value =""
//   }

//   return (
//     <>
//       <h1>Uncontrolled Component in React</h1>

//       <form onSubmit={handleSubmit}>
//         <input type="text" ref={nameref} placeholder="Enter your name" />
//         <br /><br />

//         <input type="email" ref={emailref} placeholder="Enter your email" />
//         <br /><br />

//         <input type="number" ref={numref} placeholder="Enter your number" />
//         <br /><br />

//         <button type="submit">Submit</button>
//         <button type="reset" onClick={hadlereset}>resert</button>
//       </form>
//     </>
//   );
// }

// export default App;





// controle component 


import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}, Number: ${number}`);
  };

  return (
    <>
      <h1>Controlled Component in React</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Enter your number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App; 