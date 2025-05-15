import React, {useEffect, useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";
import countryRepository from "../../../../repository/countryRepository.js";

const EditAuthorDialog = ({open, onClose, author, onEdit}) => {
    const [formData, setFormData] = useState({
        "name": author.name,
        "surname": author.surname,
        "country": author.country?.id || ""
    });
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        countryRepository
            .findAll()
            .then((response) => {
                setCountries(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        setFormData({
            "name": author.name,
            "surname": author.surname,
            "country": author.country?.id || ""
        });
    }, [author]);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = () => {
        const authorData = {
            name: formData.name,
            surname: formData.surname,
            country: Number(formData.country)
        };

        onEdit(author.id, authorData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Author</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Country</InputLabel>
                    <Select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        label="Country"
                        variant="outlined">
                        {countries.map((country) => (
                            <MenuItem key={country.id} value={country.id}>
                                {country.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="warning">Edit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditAuthorDialog;
