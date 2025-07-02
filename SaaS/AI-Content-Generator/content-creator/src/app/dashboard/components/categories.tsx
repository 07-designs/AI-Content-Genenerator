import React from 'react'
import {CategoryItem} from './category-item'
export interface CategoryProps{
    name: string;
    value: string;
}
const Categories = ({items}:{items:CategoryProps[]}) => {
  return (
    <div className='flex gap-3 flex-wrap'>
        {items.map((category) => (
           <CategoryItem key={category.value} name={category.name} value={category.value} />
        ))}
    </div>
  )
}

export default Categories