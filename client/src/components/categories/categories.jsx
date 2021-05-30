import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// Redux
import { createGoodsPerCategory } from '../../redux/actions/goodsPerCategoryAction';

function Categories() {
    const [isOpen, setOpen] = useState(false);
    const [categories, setCategories] = useState(null);

    // dispatch actions

    const dispatch = useDispatch();

    //fetch the categories
    const FetchCategories = async () => {
        const url = `http://localhost:5000/api/categories`;
        const response = await axios.get(url);
        const resCategories = response.data;
        setCategories(resCategories);
    };

    const fetchGoods = async (categoryId) => {
        const goodUrl = `http://localhost:5000/api/goods/category/${categoryId}`;
        const response = await axios.get(goodUrl);
        const resGoods = response.data.goods;
        console.log(resGoods);

        dispatch(createGoodsPerCategory(resGoods));

        return resGoods;
    };

    useEffect(() => {
        const toggleBtn = document.getElementById('open-close-btn');
        document.getElementById('categories-panel').style.left = '-256px';
        document.getElementById('main').style.marginLeft = '0';
        toggleBtn.classList.add('openbtn');
        toggleBtn.classList.remove('closebtn');

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
        const toggleBtn = document.getElementById('open-close-btn');

        document.getElementById('categories-panel').style.left = '0px';
        document.getElementById('main').style.marginLeft = '262px';
        //document.getElementById('main').style.marginLeft = '250px';
        toggleBtn.classList.add('closebtn');
        toggleBtn.classList.remove('openbtn');
    };

    const closeNav = () => {
        const toggleBtn = document.getElementById('open-close-btn');
        document.getElementById('categories-panel').style.left = '-256px';
        document.getElementById('main').style.marginLeft = '0';
        toggleBtn.classList.add('openbtn');
        toggleBtn.classList.remove('closebtn');
    };

    return (
        <div>
            <div id='categories-panel' className='sidebar'>
                <div id='categories-header'>
                    <h2 id='categories-title-text'>Select a category</h2>
                </div>
                <div
                    id='open-close-btn'
                    className='openbtn'
                    onClick={() => handleToggle()}></div>
                <div id='categories-body' className='row-categories'>
                    {/* categories */}
                    {categories &&
                        categories.map((category) => (
                            <div
                                className='category col-6'
                                key={category.categories_id}>
                                <div className='pt-3 category-title'>
                                    {category.category_name}
                                </div>
                                {/* image */}
                                <div
                                    className='category-image'
                                    id={`cat_img_${category.categories_id}`}>
                                    <img
                                        src={`assets/images/categories/${category.category_image}`}
                                        width='60'
                                        height='60'
                                        alt={`${category.category_image}`}
                                        onClick={() =>
                                            fetchGoods(category.categories_id)
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
                {/* this div will be moved together with the panel,
              it can contains the cards */}
        </div>
    );
}
export default Categories;
