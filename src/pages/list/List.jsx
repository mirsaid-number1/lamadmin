import React from 'react'
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable';
function List({addWhat}) {
  return (
    <div className='list'>
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable addWhat={addWhat}/>
      </div>
    </div>
  )
}

export default List