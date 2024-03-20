import Image from 'next/image'
export default function Services(){
    return (
        <section id="services" className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">My Services</h3>
                            <p className="text-uppercase small">A Lead UX & UI designer based in Canada</p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                {/*<i className="icon-desktop"></i>*/}
                               <Image src="/static/icons/psychology_1.png" alt="Terapie" className="mx-auto" width="64" height="64"/>
                            </div>
                            <div className="feature-content">
                                <h5>Terapie psihologică (individuală sau de grup)</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating
                                    stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                {/*<i className="icon-pricetags"></i>*/}
                                <Image src="/static/icons/fear.png" alt="Situatii de stress" className="mx-auto" width="64" height="64"/>
                            </div>
                            <div className="feature-content">
                                <h5>Consiliere și suport în situații de stres</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating
                                    stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                {/*<i className="icon-chat"></i>*/}
                                <Image src="/static/icons/abuse.png" alt="Rezolvare conflictelor" className="mx-auto" width="64" height="64"/>
                            </div>
                            <div className="feature-content">
                                <h5>Ajutor în rezolvarea conflictelor (familiale, de muncă etc.)</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating
                                    stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                {/*<i className="icon-mobile"></i>*/}
                                <Image src="/static/icons/psychology.png" alt="Autocunoastere" className="mx-auto" width="64" height="64"/>
                            </div>
                            <div className="feature-content">
                                <h5>Dezvoltare personală și autocunoaștere</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating
                                    stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                {/*<i className="icon-target"></i>*/}
                                <Image src="/static/icons/classroom.png" alt="Trainings" className="mx-auto" width="64" height="64"/>
                            </div>
                            <div className="feature-content">
                                <h5>Traininguri în gestionarea emoțiilor și stresului</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating
                                    stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-lg-4 m-15px-tb">
                        <div className="feature-box-1 box-shadow-lg">
                            <div className="icon">
                                {/*<i className="icon-tools-2"></i>*/}
                                <Image src="/static/icons/test.png" alt="Testare" className="mx-auto" width="64" height="64"/>
                            </div>
                            <div className="feature-content">
                                <h5>Testare psihologică și evaluare a personalității</h5>
                                <p>I design and develop services for customers of all sizes, specializing in creating
                                    stylish, modern websites.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}