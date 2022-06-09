import React from 'react';
import {IList as IProps} from '../App';

const List:React.FC<IProps> = ({people}) => {

    const list = ():JSX.Element[] => {
        return people.map(val => {
         return  (
           <>
               <li>{val.name}</li>
                <li>{val.age}</li>
                <li><img src={val.url} alt={val.name}></img></li>
            </>
          )
        })
    }
 
  return (
    <div>
        <ul>
            {list()}
        </ul>
    </div>
  )
}

export default List;