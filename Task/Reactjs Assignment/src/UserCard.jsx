import React from 'react'

const UserCard = ({name,age,location}) => {
    return (
        <div className='container'>
            <div className='UserCard'>
                <h1 className='welcome'>Name: {name}</h1>
                <h2 className='name'>Age: {age}</h2>
                <h2 className='name'>Location: {location}</h2>
            </div>
        </div>
    )
}

export default UserCard
