import React, {useState} from 'react'
import '../styles/App.css'

const arr=["Siblings","Friends","Love","Affection","Marriage","Enemy"];

const App = () => {
    const [fname,setFname]=useState("");
    const [lname, setLname]=useState("");
    const [relation, setRelation]= useState("");
    const [flag, setFlag]= useState(true);

    function calculateRelation(e){
        e.preventDefault();
        let str1 = fname.split("");
        let str2= lname.split("");

        // remove common char
        str1=str1.filter(char=>{
            const indexInStr2 = str2.indexOf(char);
            if(indexInStr2 !== -1){
                str2.splice(indexInStr2,1);
                return false  // remove from str1
            }
            return true; //keep in str1
        });
        const remainingLength = str1.length + str2.length;
        if(remainingLength === 0){
            setFlag(false)
        }
        else{
            setRelation(arr[remainingLength % 6]);
            setFlag(true);
        }
    }

    function resetAll(){
        setFname("");
        setLname("");
        setRelation("");
    }
  return (
    <div id="main">
    <form>
        <input type='text' data-testid="input1" placeholder='Enter first name' value={fname} name='name1' onChange={(e)=>setFname(e.target.value)}/>
        <input type='text' data-testid="input2" placeholder='Enter Second name' value={lname} name='name2' onChange={(e)=>setLname(e.target.value)}/>
        <button data-testid="calculate_relationship" type='Submit' onClick={calculateRelation}>Calculate Relationship Future</button>

<button data-testid="clear" type='reset' onClick={resetAll}>Clear</button>
{ flag ? <h3 data-testid="answer">{relation}</h3>: <h3 data-testid="answer">Please Enter a valid value</h3>}
    </form>
    </div>
  )
}

export default App