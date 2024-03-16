import { Navbar } from './components/Udemy';
import { Categories } from './components/Udemy';
import { Udemy_image } from './components/Udemy';
import { Recommented } from './components/Udemy';
import { Topics } from './components/Udemy';
import { Popular } from './components/Udemy';
import { Footer } from './components/Udemy';


function App(){

    return (
        <div>
        <Navbar></Navbar>
        <Categories></Categories>
        <Udemy_image></Udemy_image>
        <Recommented></Recommented>
        <Topics></Topics>
        <Popular></Popular>
        <Footer></Footer>
        </div>
    )
}

export default App