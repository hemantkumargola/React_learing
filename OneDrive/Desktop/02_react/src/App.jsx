
import { useState } from "react";
import Bio from "./Bio";


// function App() {



//   let works = true

//   let objs = {
//     name:"hemant",
//     age: 20
//   }
//   let fruit = ["apple" ,"banana","mango",];


//   function add(x,y){
//     return x+y;
//   }
//   function show(){
//     return alert(" function or event ne kam kiya hai ")
//   }

//   const shows= (md)=>{
//     alert("my name is hemant kumar gola or "+ md)
//   }
//   return (
//     <>
// <h1>hii my name is hemant kumar gola</h1>
// <h1>condition example </h1>
// <p>{works? " true  " : "false hai "}</p>
// <p>{works && "helow bhai "}</p> 
// <h1>object exaple</h1>  
// <p>{objs.name} age is {objs.age}</p>
// <h1>Array used</h1>
// <p>{fruit[0]} and {fruit[2]} hai </p>

// <h1>function used </h1>
// <p>{add(10,20)}</p>
// <h1>event used </h1>
// <button onClick={()=> alert("this is used event ")}>clike</button>
// <button onClick={show}>clike</button>

// { /* funtion parameter pass karana haiu */ }
// <h1>parameter walah function used </h1>
// <button onClick={()=>shows('i live in agra')}>parameter</button>
// </>
//   )
// }

// export default App


    















// state used  


// function App() {

//   const [name, setName] = useState("hemant kumar gola");

//   const nameChange = () => {
//     setName("pawan kumar gola");
//     console.log(name);
//   };

//   return (
//     <>
//       <h1>{name}</h1>
//       <button onClick={nameChange}>Change Name</button>
//     </>
//   );
// }

// export default App;





//  togal import { useState } from "react";


function App() {

  const [show, setHide] = useState(true);

  return (
    <>
      <h1>Hemant</h1>

      <button onClick={() => setHide(!show)}>
        Toggle {show ? "Hide" : "Show"}
      </button>

      {show && <Bio />}
    </>
  );
}

export default App;