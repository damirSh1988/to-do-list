import { useState } from 'react';
import './Pager.css'
import { v4 as uuid } from "uuid";



function Pager({items, setItems}){
    const [isModalShown, setIsModalShown] = useState(false);
    const [value, setValue] = useState("");
   
    


    const itemButtons = [
        {
            label: 'To Do'
        },
        {
            label: 'Done'
        },
        {
            label: 'Trash'
        }
    ]

    const openModal = ()=> {
        setIsModalShown(!isModalShown);
    }

    const handleItemAdd = (e) =>{
        setValue(e.target.value);
    }

    const handleSubmit = ()=>{
        const newItem = {
            id: uuid(),
            todoName: value,
            status: 'todo'
        }

        setItems([...items, newItem]);
    }

    return(
        <div className='m-3 d-flex justify-content-between' >
            <div className="Pager d-flex justify-content-between">
                {itemButtons.map((item)=>(
                    <button className='itemBtn'>{item.label}</button>
                ))}
            </div>
            <div className='d-flex'>
            <button onClick={openModal} style={{border: 'none', backgroundColor: 'black',color:'white', fontSize: 25, textAlign: 'center', marginRight: 10, width: 40, height: 40, borderRadius: 100}}>
                +
            </button>
            {isModalShown && <div style = {{ width: 268,
                                            height: 234, 
                                            backgroundColor: "#E4E6E7", 
                                            borderRadius: 12, 
                                            position: "absolute", 
                                            top: 50, 
                                            right: '10%', 
                                            outline: 'none',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            padding: 20 }}>
            <p>Add New To Do</p>
            <input value = {value} onChange = {handleItemAdd} style={{
                                                            height: 120, 
                                                            marginBottom: 10}} 
                                                            placeholder="Your text"/>
            <button onClick={handleSubmit} style={{backgroundColor:'black', 
                                                    color: 'white', 
                                                    borderRadius:100}}>
                Add
            </button>

           
           </div>}
        </div>
        </div>
    );
}

export default Pager;