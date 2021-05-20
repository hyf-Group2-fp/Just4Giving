const Tags = require("../models/Tags");
// create a tags : check the categories table for {category_id}

const createTags = async () => {
    return await Tags.findOrCreate({
        where:{
            category_id: 25,
            tag_name:'very nice Chair',
        },

    });

}

createTags().then(()=> {
    process.exit();
});
