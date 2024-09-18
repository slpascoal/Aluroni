import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';

export default function Inicio(){
    const pratosRecomendados = [...cardapio];
    pratosRecomendados.sort(() => 0.5 - Math.random()).splice(3);

    return(
        <section>
            <h3 className={styles.titulo}>
                Recomendações da Cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.titulo}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recomendado__botao}>
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}