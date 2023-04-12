import './style.css';

import ListTable from '../../components/ListTable';
import Footer from '../../components/Footer';

export default function List () {
    return(
        <>
        <article className='List'>
          <main>
            <ListTable></ListTable>
          </main>
          <Footer></Footer>
        </article>
        </>
    )
}