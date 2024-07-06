import NavHeader from './navbar';
import './styles.css';

function Colazione(){
    return(
        <section>
            <NavHeader />
            <img className='allergeni-img' src="https://i.imgur.com/b3pVPKt.png" />
            <img className='allergeni-img' src="https://i.imgur.com/AxZkev2.png" />
        </section>
    )
}

export default Colazione;