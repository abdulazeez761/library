import './AboutComponent.css'
import Footer from './footer';
function AboutComponent() {

    return (
        <>

            <div className='about-page-parent-div'>
                <div className="About-header">
                    <div class='header-content-container'>

                        <h1>About Any Books Library</h1>

                        <div class='intro-text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                At a sit quam etiam feugiat. Consequat hendrerit orci laoreet
                                et vel. Non vitae sit malesuada tellus. Rutrum aliquam velit aliquam sit
                                Euismod non velit sit faucibus neque mauris nulla at. Vitae diam urna, sit hendrerit dolor,
                                vulputate ipsum. Pellentesque id odio posuere semper praesent praesent porta interdum risus. Eget in lacus, ornare quam.</p>
                        </div>
                    </div>
                </div>
                <div className='about-page-info-section'>


                    <div class="hero-section">
                        <div class="card-grid">
                            <div class="about-card" style={{ border: 'none' }}>
                                <div class="card__background" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")` }}></div>
                                <div class="card__content">
                                    <p class="card__category">Category</p>
                                    <h3 class="card__heading">Example Card Heading</h3>
                                </div>
                            </div>
                            <div class="about-card" style={{ border: 'none' }}>
                                <div class="card__background" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")` }}></div>
                                <div class="card__content">
                                    <p class="card__category">Category</p>
                                    <h3 class="card__heading">Example Card Heading</h3>
                                </div>
                            </div>
                            <div class="about-card" style={{ border: 'none' }}>
                                <div class="card__background" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")` }}></div>
                                <div class="card__content">
                                    <h3 class="card__category">Category</h3>
                                    <p class="card__heading">Example Card Heading</p>
                                </div>
                            </div>
                            <div class="about-card" style={{ border: 'none' }}>
                                <div class="card__background" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")` }}></div>
                                <div class="card__content">
                                    <p class="card__category">Category</p>
                                    <h3 class="card__heading">Example Card Heading</h3>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >

            < Footer />


        </>
    )
}
export default AboutComponent;