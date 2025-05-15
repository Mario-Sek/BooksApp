import {useEffect, useState} from "react";
import authorRepository from "../repository/authorRepository.js";
import countryRepository from "../repository/countryRepository.js";
import bookRepository from "../repository/bookRepository.js";

const useAuthorDetails = (id) => {
    const [state, setState] = useState({
        "author": null,
        "country": null,
        "books": []
    });

    useEffect(() => {
        const numericId = !isNaN(id) ? Number(id) : id;

        authorRepository
            .findById(numericId)
            .then((response) => {
                const authorData = response.data;
                setState(prevState => ({...prevState, "author": authorData}));

                if (typeof authorData.country === 'object') {
                    setState(prevState => ({...prevState, "country": authorData.country}));
                }

                if (bookRepository.findByAuthor) {
                    bookRepository
                        .findByAuthor(numericId)
                        .then((response) => {
                            setState(prevState => ({...prevState, "books": response.data}));
                        })
                        .catch((error) => console.log(error));
                }
            })
            .catch((error) => console.log(error));
    }, [id]);

    return state;
};

export default useAuthorDetails;
