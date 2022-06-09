import React, { useState } from 'react';
import {IList as Props} from '../App';

interface Iprops {
  people: Props["people"],
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}


const AddList:React.FC<Iprops> = ({people, setPeople})  => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    notes: ""
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
     setInput({
       ...input, 
       [e.target.name] : e.target.value
     });
  }

  const handleClick = ():void => {
     if(!input.name || !input.age || !input.url) {
       return
     }
     setPeople([
       ...people,
       {
         name: input.name,
         age: parseInt(input.age),
         url: input.url,
         notes: input.notes
       }
     ]);  
     setInput({
      name: "",
      age: "",
      url: "",
      notes: ""
    })
  }

  return (
    <div className='list'>
        <input className='addList'
          type='text'
          placeholder='Name'
          value={input.name}
          onChange={handleChange}
          name="name"
        />
        <input 
          type='number'
          placeholder='Age'
          value={input.age}
          onChange={handleChange}
          name = 'age'
        />
        <input 
          type='text'
          placeholder='Image Url'
          value={input.url}
          onChange={handleChange}
          name='url'
        />
        <textarea 
          placeholder='Notes'
          value={input.notes}
          onChange={handleChange}
          name='note'
        ></textarea>
        <button onClick={handleClick}>
          Add to List
        </button>
    </div>
  )
}

export default AddList;