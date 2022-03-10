import ReactDOM from 'react-dom';

import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

function InstagramPage() {
    return (
        <div>
            <Navbar />
            <Main />
            <Footer />
        </div>
    );
}

ReactDOM.render(<InstagramPage />, document.querySelector(".root"));

