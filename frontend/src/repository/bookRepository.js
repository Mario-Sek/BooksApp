import axiosInstance from "../axios/axios.js";

const bookRepository = {
    findAll: async () => {
        return await axiosInstance.get("/books");
    },
    findById: async (id) => {
        return await axiosInstance.get(`/books/${id}`);
    },
    findByAuthor: async (authorId) => {
        return await axiosInstance.get(`/books/by-author/${authorId}`);
    },
    add: async (data) => {
        return await axiosInstance.post("/books/add", data);
    },
    edit: async (id, data) => {
        return await axiosInstance.put(`/books/edit/${id}`, data);
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/books/delete/${id}`);
    },
    markTaken: async (id) => {
        return await axiosInstance.put(`/books/mark/${id}`);
    }
};

export default bookRepository;
