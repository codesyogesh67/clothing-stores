import React, { useEffect, useState } from 'react';

import { styled, createTheme } from '@mui/material/styles';

import { useSelector, useDispatch } from 'react-redux';
import Button from "../button"
import { selectDrawer, updateProductInfo, selectProducts } from '../../../features/products/productsSlice';
import {
    Container, Wrapper, WrapperLists,

    SectionContainer,
    ImageContainer,
    SectionContent,
    ButtonContainer,
    Title,
    Price,

} from "./ProductsListElements";
import { Link } from "react-router-dom";
import Header from "./category/Header"

import { selectLinkHeader } from '../../../features/links/linksSlice';
import Sidebar from '../sidebar/index';




const drawerWidth = 240;

const themeMediaQuery = createTheme({
    breakpoints: {
        values: {
            mobileS: 450,


        },
    },
});

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),



        [theme.breakpoints.up("xs")]: {
            marginLeft: "0px"
        },
        [themeMediaQuery.breakpoints.up("mobileS")]: {
            marginLeft: '-180px'
        },

        [theme.breakpoints.up("sm")]: {
            marginLeft: `-${drawerWidth}px`
        },



        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),


            [theme.breakpoints.up("xs")]: {
                marginLeft: '0px'
            }, [themeMediaQuery.breakpoints.up("mobileS")]: {
                marginLeft: '0px'
            },
            [theme.breakpoints.up("sm")]: {
                marginLeft: '0px'
            },

        }),
    }),
);


function ProductsList() {
    const drawerStatus = useSelector(selectDrawer)
    const dispatch = useDispatch()
    const productsData = useSelector(selectProducts);
    const [list, setList] = useState([])
    const productCategoryLink = useSelector(selectLinkHeader)


    useEffect(() => {

        const array = []


        if (productsData) {
            if (productCategoryLink === "custom tees" || productCategoryLink === "purpose designed tees") {
                productsData.map(each => {

                    if (each.data.category.toLowerCase() === productCategoryLink) {
                        array.push({ id: each.id, data: each.data })
                    }
                })

                setList(array)
            } else {


                productsData.map(each => {

                    if (each.data.subcategory === productCategoryLink) {

                        array.push({ id: each.id, data: each.data })
                    }

                })
                setList(array)
            }
        }


    }, [productCategoryLink])




    return (
        <Container>
            <Sidebar />
            <Main open={drawerStatus}>
                <Wrapper>
                    <Header />

                    <WrapperLists>
                        {list?.map((obj) => {
                            const { id, data: { name, price, category, imageUrl } } = obj;
                            return (
                                <SectionContainer key={id}>
                                    <ImageContainer>
                                        <Link
                                            to={`/product/${name}`}
                                            onClick={() => dispatch(updateProductInfo(obj))}
                                        >

                                            <img src={imageUrl} alt={`${category} dress`} />

                                        </Link>
                                    </ImageContainer>
                                    <SectionContent>
                                        <Title onClick={() => dispatch(updateProductInfo(obj))}>
                                            {name}
                                        </Title>
                                        <Price>$ {price}</Price>


                                        <ButtonContainer>
                                            <Button name="Add to Cart" object={obj} />

                                        </ButtonContainer>
                                    </SectionContent>
                                </SectionContainer>
                            );
                        })}
                    </WrapperLists>
                </Wrapper>

            </Main>

        </Container >
    )
}

export default ProductsList
