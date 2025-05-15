import {useEffect, useState} from "react";
import countryRepository from "../repository/countryRepository.js";
import authorRepository from "../repository/authorRepository.js";

const useCountryDetails = (id) => {
    const [state, setState] = useState({
        "country": null,
        "authors": []
    });

    useEffect(() => {
        const numericId = !isNaN(id) ? Number(id) : id;

        countryRepository
            .findById(numericId)
            .then((response) => {
                setState(prevState => ({...prevState, "country": response.data}));

                authorRepository
                    .getByCountry(numericId)
                    .then((response) => {
                        setState(prevState => ({...prevState, "authors": response.data}));
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    }, [id]);

    return state;
};

export default useCountryDetails;
