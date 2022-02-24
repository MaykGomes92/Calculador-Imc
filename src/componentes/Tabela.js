import React from 'react'

const Tabela = ({tabelaTexto,texto2}) => {
  return (
    <section className='tb'>
        <p className='tbTexto'>{tabelaTexto}<span>{texto2}</span></p>
    </section>
  )
}

export default Tabela