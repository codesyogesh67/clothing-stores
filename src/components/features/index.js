import React, { useState, useEffect } from "react"

import { Container, Card, CardContainer, Title } from "./FeatureElements"
import { useDispatch, useSelector } from "react-redux"
import { selectCategoryLinks, selectCategory } from "../../features/products/productsSlice"
import { useNavigate, Link } from "react-router-dom";

const Features = () => {
    const categories = useSelector(selectCategory);
    const navigate = useNavigate()
    return (
        <Container>
            <Title>
                Browse Categories
            </Title>
            <CardContainer>
                {categories.map(({ data: { name, image } }, id) => (

                    <Card key={id} onClick={() => navigate("category/custom%20tees")}>
                        <img src={image} alt="Category" />
                        <p>
                            {name}
                        </p>

                    </Card>



                )
                )}

            </CardContainer>
        </Container>
    )
}

export default Features;