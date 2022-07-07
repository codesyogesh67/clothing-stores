import React, { useState, useMemo, useRef } from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from "uuid"

import { Button, FormLabel, FormHelperText, TextField, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import { storage, db } from '../../firebase';




const header = ["Custom Tees", "Purpose Designed Tees"]
const title = [
    "Custom Text Tees",
    "Custom Photo Tees",
    "Custom Couple Tees",
    "Customizable Logo Tees",
    "Custom Collection Tees",
    "Funny Tees",
    "Adventurous Tees",
    "Celebration Tees",
    "Vintage Tees"
]

function Form() {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [dealProductStatus, setDealProductStatus] = useState("no")
    const [selectedHeader, setSelectedHeader] = useState("")
    const [selectedTitle, setSelectedTitle] = useState("")
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [file, setFile] = useState(null)
    const [url, setUrl] = useState("")
    const imageInputRef = useRef()
    const dealProductOptions = ["yes", "no"]


    const id = uuidv4()


    function MyFormHelperText() {

        const helperText = useMemo(() => {
            if (error) {
                return 'This field is required';
            }

            return '';
        }, []);

        return <FormHelperText>{helperText}</FormHelperText>;
    }

    const handleChange = (e) => {

        if (e.target.files[0]) {
            setFile(e.target.files[0])
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        const path = `/images/${file?.name}`
        const ref = storage.ref(path)
        await ref.put(file)
        const url = await ref.getDownloadURL();

        setUrl(url)
        setFile(null)


        if (file) {
            const uploadTask = storage.ref(`images/${file.name}`).put(file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {

                }, (err) => {

                },
                () => {
                    storage.ref("images").child(file?.name).getDownloadURL().then((url) => {
                        db.collection("productsList").add({
                            name, price, imageUrl: url, category: selectedHeader, subcategory: selectedTitle, dealProductStatus
                        }).then(() => {
                            setTimeout(() => {
                                setName("");
                                setPrice("");
                                setDealProductStatus('no')
                                imageInputRef.current.value = ""
                                setFile(null)
                                setSelectedHeader("")
                                setSelectedTitle("")

                            }, 1000)
                        })
                    })
                }

            )
        }




    }



    return (
        <div className="dashboard__formContainer">
            <div className="dashboard__form">

                <div className="dashboard__formTitle">
                    <span>Add Product </span>

                </div>




                <form onSubmit={handleSubmit}>
                    <Box sx={{ minWidth: 120, m: 3 }} noValidate>

                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Name</FormLabel>
                            <TextField
                                error={error && !name}
                                labelid="demo-simple-select-label"
                                id="demo-simple-select"
                                name="message"
                                placeholder="Image's Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            {!name && <MyFormHelperText />}


                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120, m: 3 }} noValidate>

                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Price</FormLabel>
                            <TextField
                                error={error && !price}
                                labelid="demo-simple-select-label"
                                id="demo-simple-select"
                                name="message"
                                placeholder="Price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                            {!name && <MyFormHelperText />}


                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120, m: 3 }} noValidate>

                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Image</FormLabel>
                            <TextField
                                accept="image/*"
                                type="file"
                                labelid="demo-simple-select-label"
                                id="demo-simple-select"
                                name="message"
                                placeholder="Image's Name"
                                // multiple
                                // value={file}
                                onChange={handleChange}
                                inputRef={imageInputRef}
                                required
                            />
                            {/* <Button variant="raised" component="span" >
                                Upload
  </Button> */}

                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120, m: 3 }}>
                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Header</FormLabel>
                            <TextField
                                labelid="demo-simple-select-label"
                                id="demo-simple-select"
                                name="message"
                                select
                                value={selectedHeader}
                                label="Select an option"
                                required
                                onChange={(e) => setSelectedHeader(e.target.value)}
                            >
                                {header?.map((each, index) => (
                                    <MenuItem value={each} key={index} name={each}>{each}</MenuItem>
                                ))}


                            </TextField>
                        </FormControl>
                    </Box>



                    <Box sx={{ minWidth: 120, m: 3 }}>

                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Title</FormLabel>
                            <TextField
                                labelid="demo-simple-select-label"
                                id="demo-simple-select"
                                select
                                value={selectedTitle}
                                label="Select an option"
                                onChange={(e) => setSelectedTitle(e.target.value)}
                                required

                            >
                                {title.map((each, index) => (
                                    <MenuItem value={each} key={index}>{each}</MenuItem>
                                ))}


                            </TextField>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120, m: 3 }}>

                        <FormControl component="fieldset" fullWidth>
                            <FormLabel component="legend">Deal Product</FormLabel>
                            <TextField
                                labelid="demo-simple-select-label"
                                id="demo-simple-select"
                                select
                                value={dealProductStatus}
                                label="Select an option"
                                onChange={(e) => setDealProductStatus(e.target.value)}


                            >
                                {dealProductOptions.map((each, index) => (
                                    <MenuItem value={each} key={index}>{each}</MenuItem>
                                ))}


                            </TextField>
                        </FormControl>
                    </Box>




                    <Box sx={{ m: 3, width: 100 }}>
                        <Button type="submit" variant="contained" >Submit</Button>

                    </Box>
                </form>

            </div>
        </div >
    )
}

export default Form




