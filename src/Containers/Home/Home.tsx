import MyPhoto from '../../assets/MyPhoto.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <h2 className="HomeTitle">Hello there and welcome!</h2>
            <p className="HomeText">My name is Arsen Chernov and this is my website</p>
            <img src={MyPhoto} alt="Photo of me" />
        </div>
    );
};

export default Home;