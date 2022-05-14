import './intro.css'
import introImage from '../assets/imgs/about-img.jpg'
const Intro = ()=>{
    return(
        <div className="about-section-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12">
					<img className="img-fluid" src={introImage} alt="" />
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12 text-center">
					<div className="inner-column">
						<h1>Welcome To <span>A.N.Y Book Library</span></h1>
						<h4>Little Story</h4>
						<p>The ant and the grasshopper were good friends. In the summer, the ant works hard to fill his storage with food. While the grasshopper was enjoying the fine weather and playing all day. When winter came, the ant was lying cozily in his home surrounded by the food he stored during the summer. While the grasshopper was in his home, hungry and freezing. He asked the ant for food and the ant gave him some. But it wasn’t enough to last the entire winter. When he tried to ask the ant again,   </p>
						<p>the latter replied: “I’m sorry my friend but my food is just enough for my family to last until the end of winter. If I give you more, we too will starve. We had the entire summer to prepare for the winter but you chose to play instead.”</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}
export default Intro;