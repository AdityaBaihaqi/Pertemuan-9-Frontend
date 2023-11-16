import React, { useState } from "react";
import styles from './AddMovie.module.css'

const AddMovie = (props) => {

    // props yang datanya berasal dari main
    const { movies, setMovies } = props;

    // state yang menghandle proses inputan
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [link, setLink] = useState("");
    const [genre, setGenre] = useState("");

    // arrow function menhandle inputan title
    const handleTitle = (e) => {setTitle(e.target.value)}

    const handleLink = (e) => {setLink(e.target.value)}

    const handleGenre = (e) => {setGenre(e.target.value)}

    // arrow function menhandle inputan date
    const handleDate = (e) => {setDate(e.target.value)}

    // arrow function menhandle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if(title === "" && date === "") { alert("title dan date kosong") }
        
        else if (title === "") { alert("title kosong") }

        else if (date === "") { alert("date kosong") }
        
        else {
            const movie = {
                id: 14,
                title: title,
                date: date,
                image: link,
                genre: genre,
        }

        setMovies([...movies, movie])
        alert("Berhasil menambahkan movie baru")
    };
  };

  const options = [ "Crime", "Action", "Adventure", "Romance", "Comedy", "Mistery", "Drama", "Horror", "History" ]

  return (
    <div className={styles.container}>
      <form className={styles.addmovie} onSubmit={handleSubmit}>
        <input placeholder="Masukkan judul" className={styles.addmovie__input} id="title" type="text" value={title} onChange={handleTitle} />
        <input placeholder="Masukkan link" className={styles.addmovie__input} id="link" type="text" value={link} onChange={handleLink} />
        <select placeholder="Option Genre" className={styles.addmovie__input} id="genre" value={genre} onChange={handleGenre}>
            <option value={""} disabled>Opsi genre</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
        <input className={styles.addmovie__input} id="date" type="date" value={date} onChange={handleDate} />
        <button className={styles.addmovie__button}>Simpan</button>
      </form>
    </div>
  );
};

export default AddMovie;
