import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

export default function Home () {
    console.log('oi')
    return(
        <>
        <article className='page'>
        <Header />
        <Footer />
        </article>
        </>
    )
}