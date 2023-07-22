import React, { useState, useEffect } from 'react'
import { Container, CategoryList, Main, SearchBar, ProductsList } from "./HeroElements"
import { useDispatch, useSelector } from "react-redux"
import { selectDrawer, updateCategorySelected, updateProductInfo, selectProducts, selectCategoryLinks } from '../../features/products/productsSlice';
import { selectLinkHeader } from '../../features/links/linksSlice';
import Slider from "../slider/Slider"


const categories = ['Custom Collection Tees', 'Funny Tees', 'Custom Couple Tees', 'Customizable Logo Tees', 'Custom Photo Tees', 'Vintage Tees', 'Custom Text Tees']


function Hero() {

    //left side would be options of categories
    // right side would be options for search bar
    // and displaying products in slideshow


    const categoryLinks = useSelector(selectCategoryLinks);
    const linkHeader = useSelector(selectLinkHeader)
    const dispatch = useDispatch()
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(false);


    const [links, setLinks] = useState([]);

    useEffect(() => {

        if (categoryLinks) {
            categoryLinks.filter(each => {

                if (each.header === linkHeader) {

                    setLinks(each.section)

                }
                else if (categoryLinks[0].section[0].categories.includes(linkHeader)) {
                    setLinks(categoryLinks[0].section)
                }
                else {
                    setLinks(categoryLinks[1].section)
                }
            })
        }

    }, [categoryLinks, linkHeader]);

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

    useEffect(() => {

        const timer = setTimeout(() => {
            const nextImageIndex = (currentImageIndex + 1) % list.length;
            setCurrentImageIndex(nextImageIndex)
        }, 5000)

        return () => {
            clearTimeout(timer); // Cleanup the timer when the component unmounts
        };
    }, [currentImageIndex, list.length])




    const handleCategory = (category) => {
        dispatch(updateCategorySelected(category))
    }

    return (
        <Container>
            <CategoryList>
                {/* {links[0]?.categories.map((category, idx) => (
                    <ul>
                        <li onClick={() => handleCategory(category)}>{category}</li>
                    </ul>
                ))} */}

                {categories.map((category, idx) => (
                    <ul>
                        <li onClick={() => handleCategory(category)}>{category}</li>
                    </ul>
                ))}
            </CategoryList>
            <Main>

                {/* <ProductsList>
                    {list.slice(0, 5).map(({ data: { imageUrl } }, idx) => (
                        <img src={imageUrl} alt="Image" />
                    ))}
                    <img src={list[currentImageIndex]?.data?.imageUrl} className={isTransitioning ? 'fade-in' : ''} alt="Product Image" />

                </ProductsList> */}
                <Slider />
            </Main>

        </Container>
    )
}

export default Hero
