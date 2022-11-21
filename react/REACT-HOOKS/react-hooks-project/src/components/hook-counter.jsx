import React, {useState} from "react";

const HookCounter = () =>  {
    const [count,setCount] = useState(0);  
    const [list, setList] = useState(['bye']);
    
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

    const handleClick = () => {
        setCount(count+1);
    }

    return (
        <>
           <p>Clicks: {count}  </p> 
           <p>List: {list}</p>
            <button onClick={handleClick}>Clickeame</button>
        </>
    );
    
};
 export default HookCounter;
