import { useEffect } from "react"
import { useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, SetEstaCarregando] = useState(true)

    useEffect(() => {
        SetEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`) //requisição js
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    SetEstaCarregando(false)
                    setRepos(resJson)
                }, 3000)


            })
    }, [nomeUsuario])

    return (
        <div className='container'>
            {/* quando esta no css global não usa '{}' */}
            {estaCarregando ? (

                <h1>Carregando...</h1>

            ) : (



                <ul className={styles.list}>
                    {repos.map(repositorio => (
                        < li className={styles.listItem} key={repositorio.id} >
                            <div className={styles.listName}>
                                <b>Nome:</b>{repositorio.name}

                            </div>
                            <div className={styles.itemLanguage}>
                                < b > Linguagem:</b>{repositorio.language}

                            </div>


                            <a className={styles.itemLink} target="_blank" href={repositorio.html_url}> Visitar no GitHub</a>

                        </li>
                    ))}
                </ul >
            )}

        </div>

    )
}


export default ReposList