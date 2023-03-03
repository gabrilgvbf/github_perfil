import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0) //Para usar o valor de campo, exemplo addEventListener ou querySelector
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(() => { // executado quando  o estado sofre mudança
        console.log('O estado mudou iniciou')
        //ciclo de vido componente react inicia=mount  atualizado=update  finaliza=onmount                              
        return () => {          // e executando depois quando finalizar    
            console.log('o componente finalizou')
        }
    }, [])



    useEffect(() => { // executado quando  o estado sofre mudança
        console.log('O estado mudou')
    }, [nome])

    useEffect(() => { // executado quando  o estado sofre mudança
        console.log('Materia A mudou para ' + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value)
        setNome(estadoAnterior => {
            estadoAnterior

            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3


        if (media >= 7) {
            return (
                <p>Olá {nome},você foi aprovado</p>)

        } else {
            return (
                <p>Que pena {nome},você não foi aprovado</p>)
        }


    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (

                    <li key={item}>{item}</li>

                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder='Nota materia A' onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder='Nota materia B' onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder='Nota materia C' onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}

        </form>
    )
}


export default Formulario