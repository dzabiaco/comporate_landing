import Image from 'next/image';

export default function FeaturesSection(){
    return (
        <section id="section-features" className="section">
      <div className="container">
        <header className="section-header">
          <small>Feature</small>
          <h2>Team communication for the 21st century.</h2>
          <hr />
        </header>

        <div className="row gap-y align-items-center">
          <div className="col-md-6 mr-auto">
            <h4>All employee data at once</h4>
            <p>The employee database in Comporate is the hub where all information about your team is stored and processed. Contact and personal information, paid and unpaid leave balances, career history, projects, hours worked, compensation history, and more. Here you can set up convenient onboarding and offboarding processes. </p>
          </div>

          <div className="col-md-5">
            <Image src="/static/assets/img/vector/11.png" width={400} height={350} alt="..." />
          </div>
        </div>

        <hr className="my-8" />

        <div className="row gap-y align-items-center">
          <div className="col-md-6 ml-auto">
            <h4>Working hours and absences.</h4>
            <p>Our HR system offers a fully configurable solution for calculating the net time pool based on holidays, public holidays and approved absences. Thanks to the electronic attendance system you can also keep an accurate record of everything.</p>
          </div>

          <div className="col-md-5 order-md-first">
            <Image src="/static/assets/img/vector/10.png" width={400} height={300} alt="..." />
          </div>
        </div>

        <hr className="my-8" />

        <div className="row gap-y align-items-center">
          <div className="col-md-6 mr-auto">
            <h4>Works everywhere you go</h4>
            <p>Everything in Comporate—messages, notifications, and all—is automatically indexed and archived so that you can have it at your fingertips whenever you want. </p>
          </div>

          <div className="col-md-5">
            <Image src="/static/assets/img/vector/11.png" width={400} height={350} alt="..." />
          </div>
        </div>

        <hr className="my-8" />

        <div className="row gap-y align-items-center">
          <div className="col-md-6 ml-auto">
            <h4>All your tools in one place.</h4>
            <p>Connect all the tools you use to Comporate and avoid all that constant switching between apps. Set up your integration so that you get all your notifications directly within Comporate—from support requests, code check-ins, and error logs to sales leads—all of them searchable in one central archive.</p>
            <p>If you use any services like Google Drive, Dropbox, or Box, just paste the link and that document is immediately in sync and searchable too.</p>
          </div>

          <div className="col-md-5 order-md-first">
            <Image src="/static/assets/img/vector/12.png" width={340} height={317} alt="..." />
          </div>
        </div>

        <hr className="my-8" />

        <div className="row gap-y align-items-center">
          <div className="col-md-6 mr-auto">
            <h4>Time tracking and work planning</h4>
            <p>Comporate allows you to track working time using time tracking with flexible settings that can be used for all types of working relationships.</p>
          </div>

          <div className="col-md-5">
            <Image src="/static/assets/img/vector/11.png" width={400} height={350} alt="..." />
          </div>
        </div>
      </div>
    </section>
    );
}