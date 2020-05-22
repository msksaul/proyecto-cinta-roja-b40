import React,{useEffect} from 'react';
import './css/aos.css';
import './css/font-awesome.min.css';
import './css/tooplate-gymso-style.css';


function First(){

  useEffect(()=>{
    const script = document.createElement('script');
    script.src = "./js/jquery.min.js";
    script.async = true;
    document.body.appendChild(script);

    const script1 = document.createElement('script');
    script1.src = "./js/bootstrap.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "./js/aos.js";
    script2.async = true;
    document.body.appendChild(script2);

    const script3 = document.createElement('script');
    script3.src = "./js/smoothscroll.js";
    script3.async = true;
    document.body.appendChild(script3);

    const script4 = document.createElement('script');
    script4.src = "./js/custom.js";
    script4.async = true;
    document.body.appendChild(script4);

  return () => {
    /* document.body.removeChild(script);
    document.body.removeChild(script1);
    document.body.removeChild(script2);
    document.body.removeChild(script3);
    document.body.removeChild(script4); */
  }
  },[])

  return (

  <div>

    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">

            <a className="navbar-brand" href="index.html">Cinta Roja Burger</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <span classNameName="navbar-toggler-icon"></span>
            </button>

            <div classNameName="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-lg-auto">
                    <li className="nav-item">
                        <a href="#home" className="nav-link smoothScroll">Inicio</a>
                    </li>

                    <li className="nav-item">
                        <a href="#about" className="nav-link smoothScroll">Ordena</a>
                    </li>

                    <li className="nav-item">
                        <a href="#className" className="nav-link smoothScroll">Carrito</a>
                    </li>

                    
                </ul>

               
            </div>

        </div>
    </nav>


    
     <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">

            <div className="bg-overlay"></div>

               <div className="container">
                    <div className="row">

                         <div className="col-lg-8 col-md-10 mx-auto col-12">
                              <div className="hero-text mt-5 text-center">

                                    <h6 data-aos="fade-up" data-aos-delay="300">Carne Angus 100% natural. Sin hormonas ni antibióticos</h6>

                                    <h1 className="text-white" data-aos="fade-up" data-aos-delay="500">Nuestra mezcla de carne es recién molida</h1>


                                    <a href="#about" className="btn custom-btn bordered mt-3" data-aos="fade-up" data-aos-delay="700">Ordena aquí</a>
                                   
                              </div>
                         </div>

                    </div>
               </div>
     </section>


     <section className="feature" id="feature">
        <div className="container">
            <div className="row">

                <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                    <h2 className="mb-3 text-white" data-aos="fade-up">Cinta Roja Burger</h2>


                    <p data-aos="fade-up" data-aos-delay="200">Todas las hamburguesas son cocinadas término 3/4. Agrega lechuga, jitomate, pepinillos o cebolla. ¡Tú eliges!</p>

                </div>

                <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
                     <div className="about-working-hours">
                          <div>

                                <h2 className="mb-4 text-white" data-aos="fade-up" data-aos-delay="500">Horario</h2>


                               <strong className="mt-3 d-block" data-aos="fade-up" data-aos-delay="700">Lunes - Sabados</strong>

                                <p data-aos="fade-up" data-aos-delay="800">9:00 AM - 10:00 PM</p>

                                <strong className="mt-3 d-block" data-aos="fade-up" data-aos-delay="700"> Domingos</strong>

                                <p data-aos="fade-up" data-aos-delay="800">9:00 AM - 7:00 PM</p>
                          </div>
                      </div>
                </div>
              </div>

        </div>
        
      </section>



 <div className="products-box">
    <div className="container">
        <div className="row">
           
        </div>
      
        <div className="row special-list">
            <div className="col-lg-3 col-md-6 special-grid best-seller">
                <div className="products-single fix">
                    <div className="box-im-hover">
                        <div className="type-lb">
                            <p className="sale">Nueva</p>
                        </div>
                        <img src="images/hero-bg.jpg" className="img-fluid" alt="Image"/>
                        <div className="mask-icon">
                           
                            <a className="cart" href="#">Agregar a carrito</a>
                        </div>
                    </div>
                    <div className="why-text">
                        <h4>Hamburguesa sencilla, lechuga, jitomate</h4>
                        <h5> $7.79</h5>
                    </div>
                </div>
            </div>
         
            <div className="col-lg-3 col-md-6 special-grid top-featured">
                <div className="products-single fix">
                    <div className="box-im-hover">
                      
                        <img src="images/hero-bg.jpg" className="img-fluid" alt="Image"/>
                        <div className="mask-icon">
                            
                            <a className="cart" href="#">Agregar a carrito</a>
                        </div>
                    </div>
                    <div className="why-text">
                        <h4>Hamburguesa doble con queso, lechuga, jitomate </h4>
                        <h5> $9.79</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 special-grid top-featured">
                <div className="products-single fix">
                    <div className="box-im-hover">
                     
                        <img src="images/hero-bg.jpg" className="img-fluid" alt="Image"/>
                        <div className="mask-icon">
                          
                            <a className="cart" href="#">Agregar a carrito</a>
                        </div>
                    </div>
                    <div className="why-text">
                        <h4>Hamburguesa con queso, tocino, pimientos rojos cherry picados </h4>
                        <h5> $10.79</h5>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 special-grid best-seller">
                <div className="products-single fix">
                    <div className="box-im-hover">
                       
                        <img src="images/hero-bg.jpg" className="img-fluid" alt="Image"/>
                        <div className="mask-icon">
                           
                            <a className="cart" href="#">Agregar a carrito</a>
                        </div>
                    </div>
                    <div className="why-text">
                        <h4>Portobello crisp-fried relleno con una mezcla de quesos Muenster y Cheddar, lechuga, jitomate </h4>
                        <h5> $15.79</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  <div className="col-md-4 order-md-2 mb-4">
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-muted">Your cart</span>
      <span className="badge badge-secondary badge-pill">3</span>
    </h4>
    <ul className="list-group mb-3">
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Product name</h6>
          <small className="text-muted">Brief description</small>
        </div>
        <span className="text-muted">$12</span>
      </li>
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Second product</h6>
          <small className="text-muted">Brief description</small>
        </div>
        <span className="text-muted">$8</span>
      </li>
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">Third item</h6>
          <small className="text-muted">Brief description</small>
        </div>
        <span className="text-muted">$5</span>
      </li>
      <li className="list-group-item d-flex justify-content-between bg-light">
        <div className="text-success">
          <h6 className="my-0">Promo code</h6>
          <small>EXAMPLECODE</small>
        </div>
        <span className="text-success">-$5</span>
      </li>
      <li className="list-group-item d-flex justify-content-between">
        <span>Total (USD)</span>
        <strong>$20</strong>
      </li>
    </ul>
    <form className="card p-2">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Promo code"/>
        <div className="input-group-append">
          <button type="submit" className="btn btn-secondary">Redeem</button>
        </div>
      </div>
    </form>
  </div>

     <footer className="site-footer">
          <div className="container">
               <div className="row">

                    <div className="ml-auto col-lg-4 col-md-5">
                        <p className="copyright-text">Copyright &copy; 2020 CInta Roja Burger.</p>
                        
                    </div>

                    <div className="d-flex justify-content-center mx-auto col-lg-5 col-md-7 col-12">
                        <p className="mr-4">
                            <i className="fa fa-envelope-o mr-1"></i>
                            <a href="#">cintaroja@burger.com</a>
                        </p>

                        <p><i className="fa fa-phone mr-1"></i> 010-020-0840</p>
                    </div>
                    
               </div>
          </div>
     </footer>

  
    <div className="modal fade" id="membershipForm" tabindex="-1" role="dialog" aria-labelledby="membershipFormLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">

        <div className="modal-content">
          <div className="modal-header">

            <h2 className="modal-title" id="membershipFormLabel">Membership Form</h2>

            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <form className="membership-form webform" role="form">
                <input type="text" className="form-control" name="cf-name" placeholder="John Doe"/>

                <input type="email" className="form-control" name="cf-email" placeholder="Johndoe@gmail.com/"/>

                <input type="tel" className="form-control" name="cf-phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>

                <textarea className="form-control" rows="3" name="cf-message" placeholder="Additional Message"></textarea>

                <button type="submit" className="form-control" id="submit-button" name="submit">Submit Button</button>

                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="signup-agree"/>
                    <label className="custom-control-label text-small text-muted" for="signup-agree">I agree to the <a href="#">Terms &amp;Conditions</a>
                    </label>
                </div>
            </form>
          </div>

          <div className="modal-footer"></div>

        </div>
      </div>
    </div>

  </div>

    )
}

export default First;