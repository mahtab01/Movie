import 'bootstrap-icons/font/bootstrap-icons.css';
import Starving from './Starving';
import InlandEmpire from './InlandEmpire';
import Jnmpstart from './Jnmpstart'
import Non from './Non';
import Test from './test';
function Home() {
    return (
        <div>
            <div className="border bg-success">
                <span className="text-light mb-2 "> my movie list pwa</span>
            </div>
            <div className="d-flex flex-row align-items-center">
                <div className="d-flex justify-content-start">
                    <i className="bi bi-tv fs-4 me-2"></i>
                    <span className="text-success">my movie list</span>
                </div>
                <div className="ms-auto d-flex justify-content-start align-items-center">
                    <span className="text-nowrap text-success me-2 ">search of movie</span>
                    <input className="form-control form-control-sm" placeholder=" movie name" />
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <Starving></Starving>
                    </div>
                    <div className="col-md-3">
                        <InlandEmpire></InlandEmpire>
                    </div>
                    <div className="col-md-3">
                        <Jnmpstart></Jnmpstart>
                    </div>
                    <div className="col-md-3">
                        <Non></Non>
                        {/* <Test></Test> */}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Home;