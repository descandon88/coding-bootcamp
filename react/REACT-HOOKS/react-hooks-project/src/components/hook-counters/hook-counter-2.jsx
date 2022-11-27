import React, {useState} from 'react';


export default function hookcounter2() {
    const [count, setCount] = useState(0);
    const[list,setList] = useState([]);

    // setList([...list, {name: ''}]);
    const updateList = () => {
        const nameToUpdate = 'john';
        const newName = 'Joe';
        const newList = list.map(lista =>{
            if (lista.name === nameToUpdate){
                return {...lista, name:newName};
            }
            return lista;
        });
        setList(newList);
    };

    const handleClick = () => setCount(count+1);

  return (
    <> 
        <p>Clicks: {count}</p>
        <button onClick={handleClick}>Clickeame</button>
    </>
  );
};
