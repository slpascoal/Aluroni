import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

export default function Inicio(){
    const pratosRecomendados = [...cardapio];
    pratosRecomendados.sort(() => 0.5 - Math.random()).splice(3);
    const navigate = useNavigate();

    function redirecionarParaDetalhes(prato: typeof cardapio[0]){
        navigate(`/prato/${prato.id}`, {state: {...prato}, replace: true});
    }
    return(
        <section>
            <h3 className={stylesTema.titulo}>
                Recomendações da Cozinha
            </h3>
            <div className={styles.recomendados}>
                {pratosRecomendados.map(item => (
                    <div key={item.id} className={styles.titulo}>
                        <div className={styles.recomendado__imagem}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button 
                            className={styles.recomendado__botao}
                            onClick={() => redirecionarParaDetalhes(item)}
                        >
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTema.titulo}>Nossas casa</h3>
            <div className={styles.nossaCasa}>
                <img src={nossaCasa}alt="Cada do Aluroni"  />
                <div className={styles.nossaCasa__endereco}>
                    Rua Sapucaí, 115 <br /> <br /> Floresta - BH
                </div>
            </div>
        </section>
    );
}