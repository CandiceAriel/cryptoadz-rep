import React from 'react'

function Footer() {
    return (
        <div className='footer-container d-flex align-items-center justify-content-center'>
            <div className='logo-footer'>
                <img src='/images/publicdomain.png' alt="logo" />
            </div>
            <div className=''>
                To the extent possible under law, <a rel="dct:publisher" href="https://cryptoadz.io/"><span>Gremplin</span></a> has waived all copyright and related or neighboring rights to<span property="dct:title" class="pl-1">CrypToadz by Gremplin</span>. This work is published from: <span property="vcard:Country" datatype="dct:ISO3166" about="https://cryptoadz.io/" class="px-1">United States</span>.
            </div>
        </div>
    )
}

export default Footer
