import React, { useState } from 'react'

const Content = () => {

    const [valueH, setValueH] = useState('')
    const [valueW, setValueW] = useState('')
    const [bmi, setBmi] = useState('')

    const handleSubmit = () => {
        const height = valueH / 100;
        const originalHeightVal = height * height;
        setBmi((valueW / originalHeightVal).toFixed(1));
    }

    return (
        <>
            <section className='main'>
                <main>
                    <div className='container container-md contain'>
                        <div className="intro">
                            <h1 className="text-start pt-4 ps-3 head">
                                BMI <span>Calculator</span>
                            </h1>
                            <p className='para'>
                                BMI (Body Mass Index) is a number calculated from a person's weight and height. BMI is a fairly reliable indicator of body fatness for most people. Additionally, BMI is an inexpensive and easy-to-perform method of screening for weight categories that may lead to health problems.
                            </p>

                            <div className="input-feilds">
                                <div className="feild">
                                    <label htmlFor="height">Height <br />
                                        <input
                                            maxLength={3}
                                            value={valueH}
                                            onChange={(e) => setValueH(e.target.value)}
                                            id='height'
                                        /> <span>cm</span>
                                    </label>
                                </div>
                                <div className="feild">
                                    <label htmlFor="weight">Weight <br />
                                        <input
                                            maxLength={3}
                                            value={valueW}
                                            onChange={(e) => setValueW(e.target.value)}
                                            id='weight'
                                        /> <span>kg</span>
                                    </label>
                                </div>
                            </div>
                            <div className="submit mt-5">
                                <button type="button"
                                    onClick={handleSubmit}
                                    className='btn'>
                                    calculate
                                </button>
                            </div>
                            <div className="result"> {bmi} {bmi && <span>kg / m2</span>}</div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Content