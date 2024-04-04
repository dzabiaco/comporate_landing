
export default function Pricing(){
    return (
        <section id="section-pricing" className="section bg-gray">
      <div className="container">
        <header className="section-header">
          <h2>Affordable Pricing</h2>
          <hr />
          <p className="lead">Comporate for Teams is a single workspace for your small- to medium-sized company or team.</p>
        </header>

        <div className="row gap-y text-center">

          <div className="col-md-4">
            <div className="pricing-1">
              <p className="plan-name">Free</p>
              <br />
              <h2 className="price">free</h2>
              <p className="small text-lighter">Forever!</p>

              <div className="text-muted">
                <small>Searchable messages up to 10K</small><br />
                <small>10 apps or service integrations</small><br />
                <small>5GB total file storage for the team</small><br />
              </div>

              <br />
              <p className="text-center py-3">
                <a className="btn btn-outline-primary" href="#">Get started</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="pricing-1 popular">
              <p className="plan-name">Standard</p>
              <br />
              <h2 className="price" style={{ color: 'rgb(37 99 235)' }}>
                <div className="price-unit">$</div>
                <span data-bind-radio="pricing" data-monthly="6.67" data-yearly="75">6.67</span>
              </h2>
              <p className="small text-lighter">
                Per user/
                <span data-bind-radio="pricing" data-monthly="month" data-yearly="year">month</span>
              </p>

              <div className="text-muted">
                <small>Unlimited searchable message archives</small><br />
                <small>Unlimited apps and service integrations</small><br />
                <small>10GB file storage per team member</small><br />
              </div>

              <br />
              <p className="text-center py-3">
                <a className="btn btn-primary" href="#" data-bind-href="pricing" data-monthly="#monthly" data-yearly="#yearly">Get started</a>
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="pricing-1">
              <p className="plan-name">Plus</p>
              <br />
              <h2 className="price">
                <span className="price-unit">$</span>
                <span data-bind-radio="pricing" data-monthly="12.5" data-yearly="120">12.5</span>
              </h2>
              <p className="small text-lighter">
                Per user/
                <span data-bind-radio="pricing" data-monthly="month" data-yearly="year">month</span>
              </p>

              <div className="text-muted">
                <small>Everything in Free & Standard, and</small><br />
                <small>SAML-based single sign-on (SSO)</small><br />
                <small>Compliance Exports of all messages</small><br />
              </div>

              <br />
              <p className="text-center py-3">
                <a className="btn btn-outline-primary" href="#" data-bind-href="pricing" data-monthly="#monthly" data-yearly="#yearly">Get started</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    );
}