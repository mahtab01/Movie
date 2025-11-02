import 'bootstrap-icons/font/bootstrap-icons.css';

function Starving({ id, name, pic}) {

    return (
        <div>
            <div className="border  bg-success">
                <span className="text-dark"> {name} </span>
                <div>
                    <img className="w-100 img-fluid" src={pic} alt={name} />
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
export default Starving;