import React, { useEffect } from 'react';
import "./Header.css";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from '../agents/api';
import { categoriesFetch } from '../../redux/action';

const Logo = () => {
    return (
        <div className="App-logo">
           <a href="/"><img alt="merchub" className="logo" src="/images/merchub-shop6.png" /></a>
        </div>
    );
};

const Header = () => {
    const categories = useSelector(state => state.category.categories);
    const dispatch = useDispatch();

    console.log(JSON.stringify(categories) + 'state');

    useEffect(() => {
        async function fetchAllCategories() {
            try {
                let categories = await fetchCategories();
                dispatch(categoriesFetch(categories));
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchAllCategories()
    }, [dispatch]);

    //   const handleSelect=(e)=>{
    //     console.log(e);
    // }
    return (
        <div className="Header">
            <Logo />
            <form className="form">
                <input type="text" placeholder="Search products..." />
                <button type="submit" className="btn-search"><i className="fas fa-search"></i></button>
            </form>
            <DropdownButton title="CATEGORIES" variant='light'>
                {categories && categories.map((x) =>
                    <Dropdown.Item as="button" eventKey={x.name} value={x.name} key={x.id} >{x.name}</Dropdown.Item>
                )}
            </DropdownButton>
            {/* <a href="#categories">Categories<i className="fas fa-chevron-right"></i></a> */}
            <a href="#about">About Us<i className="fas fa-chevron-right"></i></a>
            <a href="#contact">Contact Us<i className="fas fa-chevron-right"></i></a>
        </div>
    );
};
export default Header;