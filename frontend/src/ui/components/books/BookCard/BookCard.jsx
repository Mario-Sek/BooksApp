import React, {useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import EditBookDialog from "../EditBookDialog/EditBookDialog.jsx";
import DeleteBookDialog from "../DeleteBookDialog/DeleteBookDialog.jsx";
import {useNavigate} from "react-router-dom";

const BookCard = ({book, onEdit, onDelete, onMarkTaken}) => {
    const navigate = useNavigate();
    const [editBookDialogOpen, setEditBookDialogOpen] = useState(false);
    const [deleteBookDialogOpen, setDeleteBookDialogOpen] = useState(false);

    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{book.name}</Typography>
                    <Typography variant="subtitle2">
                        {book.category || "Fiction"}
                    </Typography>
                    <Typography variant="body1" fontWeight="bold"
                                sx={{textAlign: "right", fontSize: "1.25rem"}}>{book.availableCopies} copies</Typography>
                    <Typography variant="body2" sx={{textAlign: "right"}}>
                        {book.availableCopies > 0 ? "Available" : "Not Available"}
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Button
                        size="small"
                        color="info"
                        startIcon={<InfoIcon/>}
                        onClick={() => navigate(`/books/${book.id}`)}
                    >
                        Info
                    </Button>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon/>}
                            sx={{mr: "0.25rem"}}
                            onClick={() => setEditBookDialogOpen(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            sx={{mr: "0.25rem"}}
                            onClick={() => setDeleteBookDialogOpen(true)}
                        >
                            Delete
                        </Button>
                        <Button
                            size="small"
                            color="primary"
                            startIcon={<BookmarkIcon/>}
                            onClick={() => onMarkTaken(book.id)}
                            disabled={book.availableCopies <= 0}
                        >
                            Mark
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditBookDialog
                open={editBookDialogOpen}
                onClose={() => setEditBookDialogOpen(false)}
                book={book}
                onEdit={onEdit}
            />
            <DeleteBookDialog
                open={deleteBookDialogOpen}
                onClose={() => setDeleteBookDialogOpen(false)}
                book={book}
                onDelete={onDelete}
            />
        </>
    );
};

export default BookCard;
