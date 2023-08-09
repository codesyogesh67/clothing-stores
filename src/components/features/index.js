import React, { useState, useEffect } from "react"

import { Container, Card, CardContainer, Title } from "./FeatureElements"
import { useDispatch, useSelector } from "react-redux"
import { selectCategoryLinks } from "../../features/products/productsSlice"
import { Link } from "react-router-dom"
const Features = () => {
    const [list, setList] = useState([])

    const dispatch = useDispatch()
    const categories = useSelector(selectCategoryLinks);

    useEffect(() => {
        const categories_1 = categories[0].section[0].categories;
        const categories_2 = categories[1].section[0].categories;
        setList([...categories_1, ...categories_2])
    }, [])

    console.log(categories)
    return (
        <Container>
            <Title>
                Browse Categories
            </Title>
            <CardContainer>
                {list.map((each, index) => (

                    <Card key={index}>
                        <Link>
                            {each}
                        </Link>

                    </Card>
                )
                )}

            </CardContainer>
        </Container>
    )
}

export default Features;