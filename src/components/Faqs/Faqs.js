import './Faqs.css'
import FaqsC from './FaqsC/FaqsC'

const Faqs = () => {
    return (
        <div className="faqs">
            <div className="faqs-container">
                <div className="faqs-header">FAQs</div>

                <FaqsC label="Why wouldn't I hire a full-time designer?">
                    <p>
                        Hiring a mid-level or senior product designer will likely cost you over six-figures a year. You’ll also find that designers often have down time between product launches which means they are underutilised on the job. With Mapo, you not only get an entire team working on your designs, you can switch our plan on and off depending on your needs
                    </p>
                </FaqsC>
                
                <div className="faqs-vert-line"></div>

                <FaqsC label="Cant I contact anyone, ever?">
                    <p>
                        Hiring a mid-level or senior product designer will likely cost you over six-figures a year. You’ll also find that designers often have down time between product launches which means they are underutilised on the job. With Mapo, you not only get an entire team working on your designs, you can switch our plan on and off depending on your needs
                    </p>
                </FaqsC>

                <div className="faqs-vert-line"></div>

                <FaqsC label="Can you help build the designs too?">
                    <p>
                        Hiring a mid-level or senior product designer will likely cost you over six-figures a year. You’ll also find that designers often have down time between product launches which means they are underutilised on the job. With Mapo, you not only get an entire team working on your designs, you can switch our plan on and off depending on your needs
                    </p>
                </FaqsC>

            </div>
        </div>
    )
}

export default Faqs