import React, { useState } from 'react'
import CancelCountinuebtns from './CancelCountinuebtns';

export const TradingPreferences = () => {

    const [openDropdown, setOpenDropdown] = useState(false)
    const [baseCurrencyDropdown , setBaseCurrencyDropdodwn] = useState(false);
    const [leverageDropdown, setLeverageDropdown] = useState(false);

    const onClickDropdown = (() => {
        setOpenDropdown(!openDropdown);
    });

    const OnBaseCurrency = (() => {
        setBaseCurrencyDropdodwn(!baseCurrencyDropdown);
    });

    const OnLeverageDropdown = (() => {
        setLeverageDropdown(!leverageDropdown);
    })





    return (
        <>
            <section className='trading-preferences'>
                <div className='trading-main'>
                    <div>

                        <div>
                                <h3>Account Type</h3>
                                <div className='trading-input' onClick={onClickDropdown}>

                                    <div>
                                        Select Account Type
                                    </div>

                                    <div className='trading-input-img'>
                                        <img src='/expand_more.png' />
                                    </div>

                                </div>
                                {openDropdown && (
                                    <>
                                        <div className='onOpenDropdowncss'>
                                            <p>Depending on the broker's offerings, this could be standard, premium, ECN, etc.</p>
                                        </div>
                                    </>
                                )}
                        </div>

                    <div>
                        <h3>Base Currency</h3>
                        <div className='trading-input' onClick={OnBaseCurrency}>

                            <div>
                                USD
                            </div>

                            <div className='trading-input-img'>
                                <img src='/expand_more.png' />
                            </div>

                        </div>
                        {baseCurrencyDropdown && (
                            <>
                                <div className='onOpenDropdowncss'>
                                    <p> The primary currency in which the trader wishes to maintain their account, e.g., USD, EUR, GBP.</p>
                                </div>
                            </>
                        )}

                    </div>

                    <div>
                        <h3>Leverage</h3>
                        <div className='trading-input' onClick={OnLeverageDropdown}>

                            <div>
                                1:100
                            </div>

                            <div className='trading-input-img'>
                                <img src='/expand_more.png' />
                            </div>

                        </div>
                        {leverageDropdown && (
                            <>
                                <div className='onOpenDropdowncss'>
                                    <p> The desired leverage for trading. 1:100 , 1:200, 1:500</p>
                                </div>
                            </>
                        )}

                    </div>

                                <CancelCountinuebtns label={"Continue"}/>

                    </div>
                </div>
            </section>
        </>
    )
}
