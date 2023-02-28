

export function SideCart({ produkter, bought, setvis_cart, vis_cart }) {

    const n_bought = bought;
    function send_bought() {
        fetch("http://localhost:3000/api/bought_til_kassa", {
            method: "POST",
            header: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(n_bought)
        })
    }


    if (bought.length > 0) {
        return <div className="Side-cart" style={{ zIndex: "4" }}>

            <div className='kryss-div' onClick={() => setvis_cart(!vis_cart)} >
                <svg className='kryss' shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line transform="matrix(.81621 .81621 0 -1 13.269 13.276)" x1="-5" x2="94.999" fill="none" stroke="#fffb00" strokeWidth="5" />
                    <line transform="matrix(.89727 -.88883 .99999 .004729 9.6217 89.998)" x1="-5" x2="94.999" fill="none" stroke="#fffb00" strokeWidth="5" />
                </svg>
            </div>

            <div className='Selected'>
                {bought.map((element, index) => {
                    const valgt = produkter.find((ene) => ene.id === element.id);
                    const total = parseInt(element.navn) * parseInt(valgt.pris);
                    return <div className='bought-elements' key={index}>
                        <h6 className="pluss" /*onClick={ }*/>+</h6><h6 className="minus" /*onClick={ }*/>_</h6>
                        <h6 className='bought-element-amount'>{element.amount}x{valgt.navn}</h6>
                        <img src={valgt.img} alt="" className='bought-element-img' />
                        <h6 className='bought-element-total'>total:{total}</h6>
                    </div>
                })}
            </div>
            <a href="/kasse"><button className='btn-sidecart' onClick={send_bought}>bekreft</button></a>
        </div>
    }
    else {
        return <div className="Side-cart">

            <div className='kryss-div' onClick={() => setvis_cart(!vis_cart)} >
                <svg className='kryss' shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <line transform="matrix(.81621 .81621 0 -1 13.269 13.276)" x1="-5" x2="94.999" fill="none" stroke="#fffb00" strokeWidth="5" />
                    <line transform="matrix(.89727 -.88883 .99999 .004729 9.6217 89.998)" x1="-5" x2="94.999" fill="none" stroke="#fffb00" strokeWidth="5" />
                </svg>
            </div>

            <div className='Selected'>
            </div>
            <a href="/kasse"><button className='btn-sidecart' onClick={send_bought}>bekreft</button></a>

        </div>
    }

}

export function Cart({ cart_tot, animer }) {

    const første = {
        right: "3px",
        position: "relative",
        padding: "0",
        height: "var(--navheight)",
        width: "10vw",
        animation: "cart 0.3s 8"
    }

    const andre = {
        right: "3px",
        position: "relative",
        padding: "0",
        height: "var(--navheight)",
        width: "10vw"
    }


    return <div className='cart-div'>
        <svg className="cart-svg" style={animer ? første : andre} fill="none" viewBox="0 0 80 48">
            <path d="m69 10v25c0 0.6901-0.2404 1.3346-0.7212 1.9336-0.4807 0.599-1.1418 1.1263-1.9831 1.582-0.8414 0.4558-1.827 0.8138-2.9568 1.0742-1.1298 0.2605-2.3197 0.3972-3.5697 0.4102h-41.538c-1.2741 0-2.464-0.1302-3.5697-0.3906-1.1058-0.2604-2.0794-0.6185-2.9207-1.0742-0.8414-0.4558-1.5024-0.9831-1.9832-1.5821-0.48077-0.5989-0.73317-1.25-0.75721-1.9531v-25h9.2308v-2.5c0-1.0286 0.3605-1.9987 1.0817-2.9102 0.7212-0.91145 1.7187-1.7057 2.9928-2.3828 1.274-0.67708 2.7404-1.2109 4.399-1.6016 1.6587-0.39062 3.4495-0.59245 5.3726-0.60547 2.5 0 4.8197 0.33854 6.9592 1.0156 2.1394-0.67708 4.4351-1.0156 6.887-1.0156 1.899 0 3.6899 0.19531 5.3726 0.58594 1.6827 0.39062 3.149 0.93099 4.399 1.6211 1.25 0.69011 2.2356 1.4844 2.9567 2.3828 0.7212 0.89844 1.0938 1.8685 1.1178 2.9102v2.5h9.2308zm-13.846-2.5c0-0.67708-0.2403-1.3216-0.7211-1.9336s-1.1418-1.1393-1.9832-1.582c-0.8413-0.44271-1.8269-0.80079-2.9567-1.0742-1.1298-0.27344-2.3197-0.41016-3.5697-0.41016-1.0818 0-2.1034 0.09766-3.0649 0.29297 0.6971 0.46875 1.25 0.93099 1.6586 1.3867 0.4087 0.45573 0.7092 0.91146 0.9015 1.3672 0.1923 0.45572 0.3245 0.91796 0.3966 1.3867s0.1082 0.97006 0.1082 1.5039v1.5625h9.2307v-2.5zm-32.308 2.5h18.462v-2.5c0-0.67708-0.2404-1.3216-0.7212-1.9336-0.4807-0.61198-1.1418-1.1393-1.9831-1.582-0.8414-0.44271-1.827-0.80079-2.9568-1.0742-1.1298-0.27344-2.3197-0.41016-3.5697-0.41016-1.274 0-2.4639 0.13021-3.5697 0.39062-1.1058 0.26042-2.0793 0.61849-2.9207 1.0742-0.8413 0.45573-1.5024 0.98959-1.9831 1.6016-0.4808 0.61198-0.7332 1.2565-0.7572 1.9336v2.5zm28.918 27.5c-0.8173-0.7812-1.2259-1.6146-1.2259-2.5v-22.5h-36.923v22.5c0 0.3516 0.1202 0.6771 0.3606 0.9766 0.2403 0.2994 0.5649 0.5599 0.9735 0.7812 0.4087 0.2214 0.9015 0.4037 1.4784 0.5469s1.1779 0.2083 1.8029 0.1953h33.534zm12.62-25h-9.2308v22.5c0 0.3516 0.1202 0.6771 0.3606 0.9766 0.2404 0.2994 0.5649 0.5599 0.9736 0.7812 0.4086 0.2214 0.9014 0.4037 1.4783 0.5469 0.577 0.1432 1.1779 0.2083 1.8029 0.1953 0.6491 0 1.25-0.0651 1.8029-0.1953s1.0337-0.306 1.4423-0.5274c0.4087-0.2213 0.7452-0.4882 1.0096-0.8007 0.2645-0.3125 0.3847-0.6381 0.3606-0.9766v-22.5z" fill="#F2A304" /></svg>
        <h1 className='cart-tall'>{cart_tot}</h1>

    </div>
}

export function Products({ slide, prod }) {

    return <div className="product-div">

        <div className="leftpil" onClick={() => slide(false)} >
            <svg className='arrow-left' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" /></svg>
        </div>

        <div className="bildet-div">
            <img src={prod.img} alt="cart bildet" className='div-element' />
        </div>

        <div className="rightpil" onClick={() => slide(true)}>
            <svg className='arrow-right' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" /></svg>
        </div>

    </div>
}
