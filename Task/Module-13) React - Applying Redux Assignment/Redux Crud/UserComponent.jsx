import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delData, insData, updData } from './reduxcrud/UserAction'
import './UserComponent.css'

const UserComponent = () => {
    const allData = useSelector((state)=>state.data)
    const dispatch = useDispatch()
    const [data,setData] = useState({
        name:"",
        age:""
    })
    const [id,setId] = useState('')
    const handleChange = (e)=>{
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }

    const saveData = (e)=>{
        e.preventDefault()
        if(id!=''){
            dispatch(updData(id,data))
        }else{
            dispatch(insData(data))
        }
        
        setData({
            name:'',
            age:''
        })
        setId('')
    }

    const editData = (id)=>{
        let res = allData.find((i,index)=>{
            return index==id
        })
        setData(res)
        setId(id)
    }
  return (
    <div>
      <h1 className='tital'>User Crud - React</h1>

      <form action="#" method='post' name='frm' onSubmit={saveData}>
        <label htmlFor="" className='name'>Name:</label>
        <input type="text" name="name" id="name"  onChange={handleChange} value={data.name} />
        <br /><br />
        <label htmlFor="" className='name'>Age:</label>
        <input type="number" name="age" id="age" onChange={handleChange} value={data.age} />
        <br /><br />
        <input type="submit" value="Save" className='submit' /><br /><br />
      </form>
      <br /><br />

      <table border={'2'} align='center'>
        <thead className='table'>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody className='user'>
            {
                allData.map((i,index)=>{
                    return(
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                                <button onClick={()=>editData(index)} className='edit'>Edit</button>
                                <button onClick={()=>dispatch(delData(index))} className='del'>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default UserComponent
