import React9 from "react";

export default function Price({price, locale, currency}) {
    const formatPrice =  () => 
    new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(price);

    return <span>{formatPrice()}</span>



    return(
        <div>Price</div>
    )
}