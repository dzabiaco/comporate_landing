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
          <div className="col-md-6 ml-auto">
            <h4>Drag, drop, and share your files.</h4>
            <p>Not just your messages, but all your files, images, PDFs, documents, and spreadsheets can be dropped right into Comporate and shared with anyone you want. Add comments, star for later reference, and it’s all completely searchable.</p>
            <p>If you use any services like Google Drive, Dropbox, or Box, just paste the link and that document is immediately in sync and searchable too.</p>
          </div>

          <div className="col-md-5 order-md-first">
            <Image src="/static/assets/img/vector/10.png" width={400} height={300} alt="..." />
          </div>
        </div>

        <hr className="my-8" />

        <div className="row gap-y align-items-center">
          <div className="col-md-6 mr-auto">
            <h4>Works everywhere you go</h4>
            <p>Everything in Comporate—messages, notifications, files, and all—is automatically indexed and archived so that you can have it at your fingertips whenever you want. Comporate also indexes the content of every file so you can search within PDFs, Word documents, Google docs, and more. With one search box and a set of powerful search operators, you can slice and dice your way to that one message in your communication haystack.</p>
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
      </div>
    </section>
    );
}