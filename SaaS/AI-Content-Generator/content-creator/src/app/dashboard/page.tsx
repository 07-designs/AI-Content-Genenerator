'use client'
import React from 'react'
import {SearchDashboard} from './components/search'
import {TemplateList} from './components/template-list'
import { useState } from 'react'
const Dashboard = () => {
  const [searchTemplate, setSearchTemplate] = useState<string>()
  return (
    <div>
      <SearchDashboard onSearchInput={setSearchTemplate}/>
      <TemplateList searchInput={searchTemplate as string}/>
    </div>
  )
}

export default Dashboard