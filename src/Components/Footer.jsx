import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src="/src/public/images/DH.png" alt='DH-logo' className='logo' />

      <div className='redes'>
        <img src="/src/public/images/ico-facebook.png" alt="Facebook" />
        <img src="/src/public/images/ico-instagram.png" alt="Instagram" />
        <img src="/src/public/images/ico-tiktok.png" alt="TikTok" />
        <img src="/src/public/images/ico-whatsapp.png" alt="WhatsApp" />
      </div>
    </footer>
  )
}

export default Footer
