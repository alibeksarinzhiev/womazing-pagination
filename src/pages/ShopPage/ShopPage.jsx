
import React, { useContext, useState } from 'react';

import Card from '../../components/Card/Card';
import './shoppage.css'
import { Pagination } from 'antd';

import { CustomContext } from '../../utils/Context';

const ShopPage = () => {

    const {clothes} = useContext(CustomContext)
    const [status,setStatus]=useState('all')
    const [page,setPage] = useState(1)
   

    return (
        <div className='shop__wrapper'>


            <ul className='shop__lists'>
                <li className={`${status === 'all' && 'active'}`} onClick={()=>{
                    setStatus('all')
                } }>Все</li>
                <li className={`${status === 'Пальто' && 'active'}`} onClick={()=>{
                    setStatus('Пальто')
                    setPage(1) }}>Пальто</li>
                <li className={`${status === 'Свитшоты' && 'active'}`} onClick={()=>{
                    setStatus('Свитшоты')
                     setPage(1) }}>Свитшоты</li>
                <li className={`${status === 'Кардиганы' && 'active'}`} onClick={()=>{
                    setStatus('Кардиганы')
                     setPage(1)}}>Кардиганы</li>
                <li className={`${status === 'Толстовка' && 'active'}`} onClick={()=>{
                    setStatus('Толстовка')
                    setPage(1)}}>Толстовки</li>
            </ul>
            <p>Показано: {clothes.filter((item)=>status ==='all'? item:item.category === status)
                .filter((item,idx)=>{
                    return idx + 1 <= page * 9 && idx >=page * 9 - 9
                })
                .length + ''}
                 из {clothes.filter((item)=>status ==='all'?item:item.category===status).length}

                товаров</p>
            <div className="cards">
                {clothes.filter((item)=>{
                    if(status==='all'){
                        return item
                    } else{
                        return item.category === status
                    }
                    
                }).filter((item,idx)=>{
                    return idx + 1 <= page * 9 && idx >=page * 9 - 9
                })
                    .map(item =>
                (
                <Card item={item} key={item.id} />
                )
                )}
            </div>
            <Pagination simple defaultPageSize={9} onChange={setPage} current={clothes.length <9? '':page} total={clothes.length} />
        </div>
    );
};

export default ShopPage;