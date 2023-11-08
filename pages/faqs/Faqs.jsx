import React,{useState} from 'react'
import './app.css';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import Button from '../../components/Button';

const Faqs = () => {

    const [first, setfirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [four, setFour] = useState(false);
    const [fifth, setFifth] = useState(false);


    const firstFaq = (() => {
        setfirst(!first);
    })

    const secondFaq = (() => {
        setSecond(!second);
    });

    const thirdFaq = (() => {
        setThird(!third);
    });

    const fourFaq = (() => {
        setFour(!four);
    });
    const fifthFaq = (() => {
        setFifth(!fifth);
    });



  return (
    <>
    
    <section className='faqs-section'>
        <div className='faqs-main'>
                <div className='faq-heading'>
                    <h3>FAQs</h3>
                    <h1>Frequently Asked Questions</h1>
                    <p>Got a question? Can't find the answer you're looking for?</p><p> Don't worry, drop us a line on our <span> contact page.</span></p>
                </div>

         
        <div className='faqs-content' onClick={firstFaq}>
            <div className='faqs-heading'>
            <h4>What is a market order and a limit order?</h4>
            <span>{first? <AiOutlineMinus className='icons-of-faqs'/>  : <AiOutlinePlus/>}</span>
            </div>

            {
              first &&(
                    <>
                    {
                        <div className='faq-content-toggle'>
                            <h3>What is a market order and a limit order?</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now </p>
                        </div>
                    }
                    </>
                )
            }
        </div>

        <div className='faqs-content' onClick={secondFaq}>
            <div className='faqs-heading'>
            <h4>What do I do if I forget my CRM password?</h4>
            <span>{second? <AiOutlineMinus className='icons-of-faqs'/>  : <AiOutlinePlus/>}</span>
            </div>

            {
              second &&(
                    <>
                    {
                        <div className='faq-content-toggle'>
                            <h3>What is a market order and a limit order?</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now </p>
                        </div>
                    }
                    </>
                )
            }
        </div>

        <div className='faqs-content' onClick={thirdFaq}>
            <div className='faqs-heading'>
            <h4>How do I place a trade?</h4>
            <span>{third? <AiOutlineMinus className='icons-of-faqs'/>  : <AiOutlinePlus/>}</span>
            </div>

            {
              third &&(
                    <>
                    {
                        <div className='faq-content-toggle'>
                            <h3>What is a market order and a limit order?</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now </p>
                        </div>
                    }
                    </>
                )
            }
        </div>

        <div className='faqs-content' onClick={fourFaq}>
            <div className='faqs-heading'>
            <h4>What is two-factor authentication (2FA), and how can I enable it?</h4>
            <span>{four? <AiOutlineMinus className='icons-of-faqs'/>  : <AiOutlinePlus/>}</span>
            </div>

            {
              four &&(
                    <>
                    {
                        <div className='faq-content-toggle'>
                            <h3>What is a market order and a limit order?</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now </p>
                        </div>
                    }
                    </>
                )
            }
        </div>


        <div className='faqs-content' onClick={fifthFaq}>
            <div className='faqs-heading'>
            <h4>What should I do if I encounter technical issues?</h4>
            <span>{fifth? <AiOutlineMinus className='icons-of-faqs'/>  : <AiOutlinePlus/>}</span>
            </div>

            {
              fifth &&(
                    <>
                    {
                        <div className='faq-content-toggle'>
                            <h3>What is a market order and a limit order?</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now </p>
                        </div>
                    }
                    </>
                )
            }
        </div>

        <div className='frequently-asked-questions'>
            <div className='left-img'>
                <img src='/12982910_5124556 1.png'/>
            </div>

            <div className='center-content'>
                <h2>Frequently Asked Questions</h2>
                <p>Ask a question or file a support ticket, manage request, report an issues. Our support team will get back to you by email.</p>
            </div>

            <div className='right-btn'>
                <Button label={"Get Support Now"}/>
            </div>

        </div>

               
            </div>
    </section>
    </>
  )
}

export default Faqs