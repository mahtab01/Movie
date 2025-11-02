import 'bootstrap-icons/font/bootstrap-icons.css'; 
import a1 from'./img/a1.jpeg';
function InlandEmpire() {
    return(
        <div>
            <div className="border  bg-success">
            <span className="text-dark">  </span> 
            <div>
           <img className="w-100 img-fluid" src={a1}/>
            </div>
            <div className="text-center">
            <span className="text-dark text-center"> more info </span> 
            </div>
            <div className="text-center">
            <i className="bi bi-x-circle-fill"></i>
            </div>
            </div>
        </div>
    );
}
export default InlandEmpire;