import 'bootstrap-icons/font/bootstrap-icons.css'; 
import a1 from'./img/a1.jpeg';
function InlandEmpire() {
    return(
        <div>
            <div className="border  bg-success">
            <span className="text-dark"> Inland Empire </span> 
            <div>
           <img className="w-100 img-fluid" src={a1}/>
            </div>
            <div className="text-center">
            <span className="text-dark text-center"> more info </span> 
            </div>
            <div className="text-center">
            <i class="bi bi-x-circle-fill"></i>
            </div>
            </div>
        </div>
    );
}
export default InlandEmpire;