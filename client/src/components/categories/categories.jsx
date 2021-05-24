import React, { useEffect, useState } from "react";



function Categories() {
    const [isOpen, setOpen] = useState(false);

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
            toggleBtn.classList.add("openbtn");
            toggleBtn.classList.remove("closebtn");
    }, []);

    
    const handleToggle = () => {
    
      setOpen(!isOpen);
      if (isOpen) {
        return closeNav();
      }else{
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
            toggleBtn.classList.add("closebtn");
            toggleBtn.classList.remove("openbtn");
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
            toggleBtn.classList.add("openbtn");
            toggleBtn.classList.remove("closebtn");
    }
    return (
        <div>
            <div id="categories-panel" className="sidebar">
                <div id="categories-header">
                    <h2 id="categories-title-text">Select a category</h2>
                </div>
                <a href="#" id="open-close-btn" class="openbtn" onClick={() => handleToggle()}></a>
                <div id="categories-body">
                    {/* categories */}
                </div>

                {/* categories */}

            </div>
            <div id="main">
              {/* this div will be moved together with the panel,
              it can contains the cards */}
            </div>
        </div>
    );
}
export default Categories;