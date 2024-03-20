import BlogItem from "@/app/components/Blog/BlogItem";


export default function Blog(){
    return (
        <section id="blog" className="section gray-bg">
            <div className="container">
                <div className="row sm-m-25px-b m-35px-b">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Latest Blogs</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <BlogItem/>
                    <BlogItem/>
                    <BlogItem/>
                </div>
            </div>
        </section>
    );
}