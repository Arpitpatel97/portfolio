import React from 'react'
import PageHeader from '../../components/pageHeader'
import {BsInfoCircleFill} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id="contact" className='contacts'>
          <PageHeader 

          headerText="Contact Me"
          icon={<BsInfoCircleFill  size={40}/>}
          />

    </section>
  )
}

export default Contact
