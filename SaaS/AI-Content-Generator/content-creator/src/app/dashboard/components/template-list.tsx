import React from 'react'
import { contentTemplates } from '@/lib/content-template'
const TemplateList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5'>
      {contentTemplates.map((template) => (
        <div>x</div>
      ))}
    </div>
  )
}

export default TemplateList