import React, {useState} from "react";

const HookCounter = () =>  {
    const [count,setCount] = useState(0);  
    const [list, setList] = useState(['bye']);

    const [obj, setObj] = useState({
        name: '',
        age: '',
    });

    // setObj({...obj, newValue: 'new value'});

    const updateObj =()=>{

        // setObj({...obj, name: 'John doe'});
        setObj({...obj, Ciudad:'Montevideo'});
        console.log(obj);

    };

    // setList([...list,'hello']);
    
    const handleClick = () => {
        setCount(count+1);
    }

    return (
        <>
           <p>Clicks: {count}  </p> 
           <p>List: {list}</p>
            <button onClick={()=>{handleClick}}>Clickeame</button>
            <br/>
            <button onClick={updateObj}>Click update Object</button>
        </>
    );
    
};
 export default HookCounter;


     // setList([...list,'hello']);
    
    // const updateIndex = 1; 
    // const newList = list.map((element,index)=>{ 
    //     if(index===updateIndex) {
    //         return 'newValue'
    //         }
    //         return element;
    //     }
    // );

    // setList(newList);
    // const indexToRemove = 1; 
    // const listCleaned = list.filter((element,index)=>index !==indexToRemove);
    // const listCleaned = list.filter((element,index)=>{
    //    if(index=== indexToRemove) {
    //        return false;
    //    }
    //     return true;
    //    }
    //  );   

    // setList(listCleaned);
