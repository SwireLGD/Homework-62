import MyPortrait from '../../assets/MyPortraitOrNot.jpg';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='AboutMe'>
            <img className='Portrait' src={MyPortrait} alt="Portrait of me" />
            <div>
                <p>As a kid, I always dreamt of becoming a generalissimus, but my wish didn't come true, so after graduating school I decided to become a cook. Tbh I didn't like working on a kitchen, so here I am, trying some new things</p>
            </div>
        </div>
    );
};

export default AboutMe;