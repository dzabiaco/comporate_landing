

export default function Footer() {
    return (
        <footer id="footer" className="footer py-9">
            <div className="container">
                <div className="row gap-y">

                    <div className="col-xl-6 order-md-last">
                        <h6 className="mb-4"><strong>Get Started</strong></h6>
                        <p>Form so, head allowed how found at right, chosen put sad. Copy of field phase offers texts. Great family there first about that.</p>
                        <a className="btn btn-primary mr-2" href="#">Start trial</a>
                        <a className="btn btn-secondary" href="#contact">Contact</a>
                    </div>

                    <div className="col-xl-6 order-md-first">
                        <h6 className="mb-4"><strong>We Are Awesome</strong></h6>
                        <p>We’re a team of experienced designers and developers. We can combine beautiful, modern designs with clean, functional and high-performance code to produce stunning websites.</p>
                        <small className="opacity-70">© {new Date().getFullYear()} Comporate. All rights reserved.</small>
                    </div>

                </div>
            </div>
        </footer>
    );
}