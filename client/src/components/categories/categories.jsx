import React, {useEffect, useState} from "react";
import axios from "axios";

function Categories() {
    const [isOpen, setOpen] = useState(false);
    const [categories, setCategories] = useState(null);
    const url = `http://localhost:5000/api/categories` ;
    //fetch the categories
    const FetchCategories = async () => {
      const response = await axios.get(url);
      const resCategories = response.data;
      setCategories(resCategories);
    } ;

    useEffect(() => {
        const toggleBtn = document.getElementById("open-close-btn");
        document
            .getElementById("categories-panel")
            .style
            .left = "-256px";
        document
            .getElementById("main")
            .style
            .marginLeft = "0";
        toggleBtn
            .classList
            .add("openbtn");
        toggleBtn
            .classList
            .remove("closebtn");

        FetchCategories();

    }, []);

    const handleToggle = () => {

        setOpen(!isOpen);
        if (isOpen) {
            return closeNav();
        } else {
            return openNav();
        }
    };

    const openNav = () => {
        //document.getElementById("categories-panel").style.width = "300px";
        const toggleBtn = document.getElementById("open-close-btn");

        document
            .getElementById("categories-panel")
            .style
            .left = "0px";
        document
            .getElementById("main")
            .style
            .marginLeft = "250px";
        toggleBtn
            .classList
            .add("closebtn");
        toggleBtn
            .classList
            .remove("openbtn");
    }

    const closeNav = () => {
        const toggleBtn = document.getElementById("open-close-btn");

        document
            .getElementById("categories-panel")
            .style
            .left = "-256px";
        document
            .getElementById("main")
            .style
            .marginLeft = "0";
        toggleBtn
            .classList
            .add("openbtn");
        toggleBtn
            .classList
            .remove("closebtn");
    }

    return (
        <div>
            <div id="categories-panel" className="sidebar">
                <div id="categories-header">
                    <h2 id="categories-title-text">Select a category</h2>
                </div>
                <a href="#" id="open-close-btn" className="openbtn" onClick={() => handleToggle()}></a>
                <div id="categories-body" className="row-categories">
                    {/* categories */}
                    {
                      categories && 
                      categories.map(category => (
                        <div className="category col-6">
                            <div className="pt-3 category-title">
                                {category.category_name}
                            </div>
                            {/* image */}
                            <div className="category-image" id={`cat_img_${category.categories_id}`}>
                            <img
                                src={`assets/images/categories/${category.category_image}`}
                                width="60"
                                height="60"
                                alt="just4giving logo"
                            />
                            </div>
                        </div>
                      ))
                    } 
                </div>

            </div>
            <div id="main">
                {/* this div will be moved together with the panel,
              it can contains the cards */}
            </div>
        </div>
    );
}
export default Categories;