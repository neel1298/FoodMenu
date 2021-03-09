import React ,{userState,useEffect, useState}from 'react'
import items from './data';
import { useParams } from 'react-router-dom';

const ItemDetail = ()=>{
    const {id} = useParams();
    //console.log(id);
    const [item,setItem] = useState([]);
    useEffect(() => {
    const newitem = items.filter((item)=> item.id === parseInt(id));
    setItem(newitem);
    },[]);
    console.log(item);
    return (
        <div>
    {item.map((i)=>{
        const {id,img,title,price,desc} = i;
        return <article key={id} className='menu-item' style={{marginBottom:"25px"}}>
        <img src={img} alt={title} className='photo' />
        <div className='item-info'>
          <header>
            <h4>{title}</h4>
            <h4 className='price'>${price}</h4>
          </header>
          <p className='item-text'>{desc}</p>

        </div>
      </article>


    })}
    </div>
    )
};


export default ItemDetail;