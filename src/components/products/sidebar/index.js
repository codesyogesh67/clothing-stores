import React, { useEffect, useState } from 'react'
import { Drawer, IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { selectDrawer, selectCategoryLinks, updateDrawer } from '../../../features/products/productsSlice'
import { styled, useTheme } from '@mui/material/styles';
import { Container, SubHeadingContainer, SubHeading, LinksLists } from './SidebarElements';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { updateLink, selectLinkHeader } from "../../../features/links/linksSlice";


const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



function Sidebar() {
    const drawerStatus = useSelector(selectDrawer)
    const categoryLinks = useSelector(selectCategoryLinks);
    const linkHeader = useSelector(selectLinkHeader)
    const dispatch = useDispatch()
    const theme = useTheme();

    const [links, setLinks] = useState([]);

    useEffect(() => {

        if (categoryLinks) {
            categoryLinks.filter(each => {
                console.log("each.header", each.header)

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





    return (
        <Container>
            <Drawer
                sx={{
                    [theme.breakpoints.up('sm')]: {
                        width: drawerWidth,

                    },
                    width: "180px",
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        [theme.breakpoints.up('sm')]: {
                            width: drawerWidth,

                        },
                        width: "180px",
                        boxSizing: 'border-box',
                        position: "static",


                    },
                }}
                variant="persistent"
                anchor="left"

                open={drawerStatus}
            >
                <DrawerHeader>
                    <IconButton onClick={() => dispatch(updateDrawer(false))}>
                        <ChevronRightIcon />
                    </IconButton>
                </DrawerHeader>

                <SubHeadingContainer>
                    {links?.map((eachSection, index) => (
                        <div key={index}>
                            <SubHeading>{eachSection.title}</SubHeading>
                            <LinksLists>
                                {eachSection.categories.map((eachCategory, index) => (
                                    <p
                                        key={index}
                                        onClick={() => dispatch(updateLink({ header: eachCategory }))}
                                        key={index}
                                    >
                                        {eachCategory}
                                    </p>
                                ))}
                            </LinksLists>
                        </div>
                    ))}


                </SubHeadingContainer>
            </Drawer>
        </Container>

    )
}

export default Sidebar
