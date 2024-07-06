import NavHeader from './navbar';
import './styles.css';

function Cena(){
    return(
        <section>
            <NavHeader />
            <img className='allergeni-img' src="https://i.imgur.com/jnqWwiB.png" />
            <img className='allergeni-img' src="https://i.imgur.com/AcoNvI0.png" />
            <img className='allergeni-img' src="https://i.imgur.com/HAHn64S.png" />
            <img className='allergeni-img' src="https://i.imgur.com/zl4KrU2.png" />
        </section>
    )
}

export default Cena;