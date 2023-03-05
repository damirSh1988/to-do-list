
import { useState } from 'react';
import vect from './vector.png';





function ItemList({items, setItems}){
    const [checked, setChecked] = useState(false);
    const [isModalShown, setModalShown] = useState(false);
   
    function handleChange(index){
        setChecked();
        console.log(index);
    }
    
    function imgHandle(index){
        setModalShown(!isModalShown)
        console.log(index);
    }

    function handleDelete(index){
        console.log(`delete ${index}`);
    }
    
    
    return(

      items.map(item=>(
        <div key={item.id} className="d-flex">
            <button onClick={()=> imgHandle(item.id)} style={{width: 30, border: 'none', background: 'transparent'}}>
                <img  className="" src={vect} style={{width: 2.5, height: 10, }} alt=""/>
            </button>
            <input type="checkbox" checked={checked} onChange = {()=>handleChange(item.id)} />
            <div className="m-2">{item.todoName}</div>
            {isModalShown && <div  style = {{ width: 268,
                                            height: 35, 
                                            backgroundColor: "#E4E6E7", 
                                            borderRadius: 12, 
                                            position: "absolute", 
                                            top: 'auto', 
                                            left: '30%', 
                                            outline: 'none',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: 5 }}>
            
            <button onClick={()=>handleDelete(item.id)} style={{backgroundColor:'transparent', 
                                                    color: 'black', 
                                                    border: 'none'}}>
                Move to Trash
            </button>
        </div>}
        </div>
      ))
        
        
    )
}

export default ItemList;