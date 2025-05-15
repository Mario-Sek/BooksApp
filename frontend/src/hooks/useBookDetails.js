import {useEffect, useState} from "react";
import bookRepository from "../repository/bookRepository.js";
import authorRepository from "../repository/authorRepository.js";

// In your useBookDetails.js hook
const useBookDetails = (id) => {
    const [state, setState] = useState({
        "book": null,
        "author": null,
    });

    useEffect(() => {
        const numericId = !isNaN(id) ? Number(id) : id;

        bookRepository
            .findById(numericId)
            .then((response) => {
                setState(prevState => ({...prevState, "book": response.data}));

                const authorId = response.data.authorId || response.data.author;
                if (authorId) {
                    authorRepository
                        .findById(authorId)
                        .then((response) => {
                            setState(prevState => ({...prevState, "author": response.data}));
                        })
                        .catch((error) => console.log(error));
                }
            })
            .catch((error) => console.log(error));
    }, [id]);

    return state;
};


export default useBookDetails;
