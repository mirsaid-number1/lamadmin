import React, {  useState,useEffect } from 'react'
import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns,userRows}  from  '../../datatablesource';
import {getDocs,collection,doc,deleteDoc, onSnapshot} from 'firebase/firestore';
import {db} from '../../hooks/firebase'
import {Link} from 'react-router-dom'
import { useQuery } from 'react-query';


function Datatable({addWhat}) {
    let users_collection = collection(db,'users');
    let [users,setUsers] = useState([]);

    useEffect(() => {
      const refetch = () => {
        onSnapshot(users_collection,(snapshot) => {
          let arr = [];
          snapshot.docs.forEach(doc => {
            arr.push({id:doc.id,...doc.data()})
          })
           setUsers(arr);
        })
      }
      return () => {
        refetch();
      }
    },[])
       

   console.log(users) 

    function deleteUser(e) {
      users = users.filter(doc => doc.id !== e);
      let dc = doc(db,'users',e);
      deleteDoc(dc);
    }
    const actionColumn = [
        {field:'action',
        headerName:'Action',
        width:200,
        renderCell:(params) => {
            return (
                <div className='cellAction'>
                    <div className="viewButton">Veiw</div>
                    <div className="deleteButton" onClick={() => deleteUser(params.row.id)}>Delete</div>
                </div>
            )
        }}
    ]

  return (
    <div className='datatable'>
      <div className='addUser'>
        <span className='header'>Users List</span>
        <Link to={addWhat.includes('User') ?  '/users/new' : '/products/new'} style={{textDecoration:'none'}} className='addNew'>
          {addWhat}
        </Link>
      </div>
        <DataGrid
        className='datagrid'
        rows={users}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable