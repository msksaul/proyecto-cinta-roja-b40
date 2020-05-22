import React from 'react';


function Carrusel() {
    return(
        <div>
        <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">

        <div className="bg-overlay"></div>

            <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-10 mx-auto col-12">
                            <div className="hero-text mt-5 text-center">

                                    <h6 >Carne Angus 100% natural. Sin hormonas ni antibióticos</h6>

                                    <h1 className="text-white" >Nuestra mezcla de carne es recién molida</h1>

                                    <a href="#menu" className="btn custom-btn bordered mt-3">Ordena aquí</a>
                                
                            </div>
                        </div>

                    </div>
            </div>
        </section>


        <section className="feature" id="feature">
        <div className="container">
        <div className="row">

            <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                <h2 className="mb-3 text-white" >Cinta Roja Burger</h2>


                <p>Hamburguesas Premium con exquisitos acompañamientos, ¡Disfruta!</p>

            </div>

            <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
                <div className="about-working-hours">
                    <div>

                            <h2 className="mb-4 text-white" data-aos-delay="500">Horario</h2>


                        <strong className="mt-3 d-block" data-aos-delay="700">Lunes - Sabados</strong>

                            <p  data-aos-delay="800">9:00 AM - 10:00 PM</p>

                            <strong className="mt-3 d-block"> Domingos</strong>

                            <p data-aos-delay="800">9:00 AM - 7:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </section>
    </div>
    );

}

export default Carrusel;