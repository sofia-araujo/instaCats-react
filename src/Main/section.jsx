import './section.css'
import img01 from '../assets/img-01.png'
import img02 from '../assets/img-02.png'
import img03 from '../assets/img-03.png'
import img04 from '../assets/img-04.png'
import img05 from '../assets/img-05.png'
import img06 from '../assets/img-06.png'
import img07 from '../assets/img-07.png'
import img08 from '../assets/img-08.png'
import img09 from '../assets/img-09.png'
import img10 from '../assets/img-10.png'
import img11 from '../assets/img-11.png'
import img12 from '../assets/img-12.png'
const Section = () => {
    return(
        <>
        <main>
        <section>
            <div>
                <img src={img01} alt="" />
                <img src={img02} alt="" />
                <img src={img03} alt="" />
            </div>
            <div>
                <img src={img04} alt="" />
                <img src={img05} alt="" />
            </div>
            <div>
                <img src={img06} alt="" />
            </div>
            <div>
                <img src={img07} alt="" />
                <img src={img08} alt="" />
                <img src={img09} alt="" />
            </div>
            <div>
                <img src={img10} alt="" />
                <img src={img11} alt="" />
            </div>
            <div>
                <img src={img12} alt="" />
            </div>
        </section>
        </main>
        </>
    )
}

export default Section