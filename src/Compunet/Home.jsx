import 'bootstrap-icons/font/bootstrap-icons.css';
import Starving from './Starving';
import InlandEmpire from './InlandEmpire';
import Jnmpstart from './Jnmpstart'
import Non from './Non';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Test from './test';
function Home() {
    const [Movies, setMovies] = useState([]);

    // دریافت فیلم‌ها از API
    useEffect(() => {
        getMovie();
    }, []);

    // تابع برای دریافت فیلم‌ها
    const getMovie = async () => {
        const response = await axios.get("https://68ffbc5ce02b16d1753f23c7.mockapi.io/movie");
        console.log(response.data);
        setMovies(response.data);
    };

    // حذف فیلم و به‌روزرسانی وضعیت
    const handleDelete = async (movieId) => {
        await axios.delete(`https://68ffbc5ce02b16d1753f23c7.mockapi.io/movie/${movieId}`);
        getMovie(); // بارگذاری مجدد لیست فیلم‌ها بعد از حذف
    };

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
                <div className="row g-2">
                    {Movies.map((Movie, index) => {
                        return (
                            <div className="col-md-3"
                                key={index}>
                                <Starving
                                    id={Movie["id"]}
                                    name={Movie["name"]}
                                    pic={Movie["pic"]}

                                />
                                <diV className="pt-2 text-center">
                                    <button className="btn btn-danger me-2 " onClick={() => handleDelete(Movie.id)}  > حدف</button>
                                    <button className="btn btn-primary" > ویرایش</button>
                                </diV>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default Home;