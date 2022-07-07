import React from 'react'
import { selectMessage, updateMessage } from '../../features/extras/extrasSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Snackbar } from '@mui/material'

function Message() {
    const message = useSelector(selectMessage)
    const dispatch = useDispatch()


    return (
        <Snackbar
            open={Boolean(message)}

            // autoHideDuration={2000}
            onClose={setTimeout(() => dispatch(updateMessage("")), 2000)}
            message={message}

        />
    )
}

export default Message
