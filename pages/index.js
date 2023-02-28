import React from 'react';
import { useState, useEffect } from 'react';
import { SideCart, Cart, Products } from '../virkemidler/funksjoner';


function Hjem(props) {
  const { produkter } = props;
  const [vis_cart, setvis_cart] = useState(false);
  const [cart_tot, setcart_tot] = useState(0);
  const [bought, setbought] = useState([]);
  const [element, setelement] = useState(0);
  const [prod, setprod] = useState(produkter[0]);
  const [animer, setanimer] = useState(false)


  useEffect(() => {
    setprod(produkter[element]);
  }, [element])

  function slide(sann) {
    if (sann) {
      if (element === (produkter.length - 1)) {
        setelement(0);
      }
      else {
        setelement(element + 1);
      }
    }

    if (!sann) {
      if (element === 0) {
        setelement(produkter.length - 1)
      }
      else {
        setelement(element - 1)
      }
    }
  }

  function add(tall) {
    //fikser cart svg antall
    setcart_tot(cart_tot + 1);

    //setter i cart
    const produktet = produkter[tall];
    var finns = false;
    if (bought.length !== 0) {
      for (let i = 0; i < bought.length; i++) {
        if (bought[i].id === produktet.id) {
          finns = true;
        }
        else {
          finns = false;
        }
      }
    }

    if (finns) {
      var kjøpte_prod = bought.find((ene) => ene.id === produktet.id)
      var ind = bought.indexOf(kjøpte_prod);
      kjøpte_prod.amount += 1;
      var new_bought = bought;
      new_bought[ind] = kjøpte_prod;
      setbought(new_bought);
    }
    if (!finns) {
      var xx = {
        id: produktet.id,
        amount: 1,
      }
      setbought([...bought, xx]);
    }



  }

  /*function til_kassen(){
    await fetch(

    )
  }*/

  return <div className='all'>
    <div className='navbarbak'></div>
    <section className="navbar">
      <div className="logo">
        <h5 className='midlertidig-logo'>LOGO</h5>
      </div>

      <div className="cart" onClick={() => setvis_cart(!vis_cart)}>
        <Cart cart_tot={cart_tot} animer={animer} setanimer={setanimer} />
      </div>


      <div className="language-hoved">
        <div className="language-div">
          <h1 className='Språk'>EN</h1>
          <svg className='pil-ned' shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <path transform="translate(.93662 4.8236)" d="m100.83 86.029h101.16c-28.099 28.895-38.401 41.211-51.983 115.34-5.1514-75.07-16.391-85.373-49.173-115.34z" fill="#f2a304" strokeWidth=".6" /></svg>
        </div>
      </div>
    </section>


    <section className="hoved">
      {vis_cart && <SideCart produkter={produkter} bought={bought} setvis_cart={setvis_cart} vis_cart={vis_cart} />}

      <div className="about">
        <video className='video' src={"/video.mp4"} autoPlay loop muted ></video>
      </div>

      <section className="products">
        <Products prod={prod} slide={slide} />
        <div>
          <h3 className='antall'>{prod.navn} for {prod.pris},</h3>
        </div>

        <div>
          <button className='btn' onClick={() => { add(element); setanimer(true) }}>Buy</button>
        </div>
      </section>

      <section className="contact">contact</section>

    </section>

  </div>
}


export async function getStaticProps() {

  const response = await fetch("http://localhost:3000/api/produkter", {
    method: "GET",
    header: {
      "Accepted": "application/json"
    }
  })
  const Produktet = await response.json()
  const ProduktInf = JSON.parse(Produktet)
  return {
    props: {
      produkter: ProduktInf
    }
  }
}

export default Hjem