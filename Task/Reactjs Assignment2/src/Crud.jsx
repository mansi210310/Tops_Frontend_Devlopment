import React, { useState } from 'react'

const Crud = () => {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [gender, setGender] = useState("");
    const [id,setId] = useState("")
    const [data,setData] = useState([])

    const handlChange = (e)=>{
        // console.log("age is "+e.target.value)
        setAge(e.target.value)
    }

    const saveData = (e)=>{
        e.preventDefault()
        if(id != ''){
            let res = data.map((i,index)=>{
                if(index==id){
                    i.name = name
                    i.age = age
                    i.gender = gender 
                }
                return i
            })
            setData(res)
        }else{
            setData([
                ...data,
                {
                    name: name,
                    age: age,
                    gender: gender
                }
            ])
        }
        
        // let obj = {
        //     name:name,
        //     age:age,
        //     gender:gender
        // }

        // data.push(obj)
        console.log(data);
        // saveData(data)

        setName("")
        setAge("")
        setGender("")
        setId(id)
    }

    const delData = (id)=>{
        let res = data.filter((i,index)=>{
            return index!=id
        })
        setData(res)
    }

    const editData = (id)=>{
        let res = data.find((i,index)=>{
            return index==id
        })
        setName(res.name)
        setAge(res.age)
        setGender(res.gender)
        setId(id)
    }

return (
    <div>
        <h1 className='head'>LocalStorage Curd Example...</h1>
        <form action="#" name='frm' method='post' onSubmit={saveData}>
            <label htmlFor="" className='ftital'>Name: </label>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} /><br /><br />
            <label htmlFor="" className='ftital'>Age: </label>
            <input type="number" name="age" id="age" value={age} onChange={handlChange} /><br /><br />
            <label htmlFor="">Gender:</label>
            <input type="radio" name="gender" id="male" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)}  />Male
            <input type="radio" name="gender" id="female" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)}  />Female <br /><br />
            <input type="submit" name="save" id="save" value="Save" className='button' /><br /><br />
        </form>

        <table border={'2'} align='center'>
            <thead>
                <tr className='heading'>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Action</td>
                </tr>
            </thead>
            
            <tbody>
                {
                    data.map((i,index)=>{
                        return(
                            <tr className='ftital'>
                                <td>{index+1}</td>
                                <td>{i.name}</td>
                                <td>{i.age}</td>
                                <td>{i.gender}</td>
                                <td>
                                    <button onClick={()=>delData(index)} className='button1'>Delete</button>
                                    <button onClick={()=>editData(index)} className='button2'>Edit</button>
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

export default Crud
