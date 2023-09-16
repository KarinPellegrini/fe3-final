import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCharStates } from '../Components/utils/Context'

const Detail = () => {
    const {state, dispatch} = useCharStates()
    const {id} = useParams()
    const {name, email, phone, website} = state.char
    console.log(id)
    const url = 'https://jsonplaceholder.typicode.com/users/' + id
  
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'GET_CHAR', payload: data})
        })
    }, [])
  
    return (
      <>
        <h1>Detail Dentist id </h1>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{website}</td>
            </tr>
          </tbody>
        </table>
      </>
    )
}

export default Detail