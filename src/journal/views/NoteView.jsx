import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import { UseForm } from "../../hooks/"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal"
import { ImageGalery } from "../components"

export const NoteView = () => {

    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)
    const { body, title, date, onInputChange, formState } = UseForm(note)
    const dispatch = useDispatch()

    const dateString = useMemo(() => {

        const newDate = new Date(date)
        return newDate.toUTCString()

    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    useEffect(() => {
        if (messageSaved.length > 0) {

            Swal.fire({
                icon: 'success',
                title: 'Nota actualizada exitosamente',
                text: messageSaved,
                timer: 2000,
                timerProgressBar: true,
                showConfirmButton: false,
            })

        }
    }, [messageSaved])

    const fileInputRef = useRef()

    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({ target }) => {

        if (target.files === 0) {
            return
        }
        dispatch(startUploadingFiles(target.files))
    }

    const onDelete = () => {
        dispatch(startDeletingNote())
    }

    return (
        <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center' sx={{ mb: 1 }}
            className="animate__animated animate__fadeIn">

            <Grid item>
                <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
            </Grid>

            <Grid item>

                <input
                    type="file"
                    multiple
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                />

                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}>
                    <UploadOutlined />
                </IconButton>

                <Button
                    disabled={isSaving}
                    color="primary"
                    sx={{ padding: 2 }}
                    onClick={onSaveNote}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label='Título'
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={5}
                    name='body'
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid
                container
                justifyContent={'end'}>

                <Button
                    onClick={onDelete}
                    sx={{ mt: 2 }}
                    color='error'>

                    <DeleteOutline />
                    Borrar

                </Button>
            </Grid>

            <ImageGalery images={note.imageUrls} />
        </Grid>
    )
}
