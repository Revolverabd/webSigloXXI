import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Footer = () => {
    return (

        <footer class="bg-dark text-center text-white">

            <div class="container p-4">

                <section class="mb-4">

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-facebook-f"></i
                    ></a>


                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-twitter"></i
                    ></a>


                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-google"></i
                    ></a>

                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-instagram"></i
                    ></a>


                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-linkedin-in"></i
                    ></a>


                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i class="fab fa-github"></i
                    ></a>
                </section>


                <section class="mb-4">
                    <p>
                        Cocina rica, hecha con mucha ilusión, para gente que le gusta comer y disfrutar cada bocado de la vida…..
                        Cinco Sentidos es un lugar íntimo en el que puedes saborear a gusto y conversar de forma relajada.
                        Hacemos todo de forma casera y procuramos poner siempre un toque personal en nuestro trabajo diario,
                        por eso somos un restaurante artesanal.
                        Tenemos una bonita barra para tomar tapas recién hechas, y un salón con siete mesas en el que puedes
                        sentarte a comer tranquilamente. A mediodía es un sitio informal con menú del día, por las noches es
                        una sala de luces bajas y velas en las mesas… Por eso dicen que somos un restaurante con encanto.
                    </p>
                </section>

                <section class="">

                    <div class="">

                        <div class="">
                            <h5 class="text-uppercase">Links</h5>

                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="https://www.youtube.com/watch?v=6OU4ccwBhCQ&ab_channel=Restaurant.Pe" class="text-white">Video Promocional</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/watch?v=Syv8v1z3Cj0&ab_channel=SENA" class="text-white">Video Gourmet</a>
                                </li>

                            </ul>
                        </div>



                    </div>

                </section>

            </div>



            <div class="text-center p-3"
            // style="background-color: rgba(0, 0, 0, 0.2);"
            >
                © 2020 Copyright:
                <a class="text-white" href="...">SigloCompany.cl</a>
            </div>

        </footer>
    )
}
