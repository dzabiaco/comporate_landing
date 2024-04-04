import Image from 'next/image'


export default function CTA() {
    return (
        <section className="section text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <p>
                            {/*<img src="./assets/img/vector/13.png" alt="..." />*/}
                            <Image src="/static/assets/img/vector/13.png" width={250} height={250} alt="..." />
                        </p>
                        <br />
                        <h3 className="mb-6"><strong>Reclaim your workday</strong></h3>
                        <p className="lead text-muted">Less email. More productive. Our customers see an average 48.6% reduction in internal email, helping them enjoy a simpler, more pleasant, and more productive work life.</p>
                        <br />
                        <a className="btn btn-lg btn-round btn-primary px-7" href="#">Start now</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
