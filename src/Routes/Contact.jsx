import React from 'react'
import Form from '../Components/Form'
import { useState } from 'react'

const Contact = () => {

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(nuevoNombre, nuevoEmail) {
    setNombre(nuevoNombre)
    setEmail(nuevoEmail)
  }

  if (nombre == '' && email == '') {

    return (
      <div >
        <div >
          <h2>¿NECESITAS MÁS INFORMACION?</h2>
          <p>Dejanos tus datos y te contactaremos</p>
          <Form agregar={handleSubmit} />
        </div>
      </div>

    )

  }

  else {

    return (
      <div >
        {(nombre && email) ? <p> ¡Muchas Gracias {nombre}! <br /> Nos pondremos en contacto a la brevedad </p> : null}
      </div>
    )

  }



}

export default Contact