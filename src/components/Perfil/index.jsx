import styles from './Perfil.module.css'





const Perfil = ({ nomeUsuario }) => {


    return (
        <header className={styles.header}>

            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil

/* export default()=>{ exemplo colocando a partir ed const usuario ...}  ou  
   export defautl function (){          } */