## seeds to create data in your tables

### Instructions:

0- before your run any file here you should run `api/scripts/sync.js` file , which will
create 5 tables for you.

1- first run `user.js` form the root repo using the command
`node api/scripts/user.js`
this will insert five users in your `user` table.

2- run `categories.js` from the root repo using the command
`node api/scripts/categories.js`
this will create 8 categories in `categories` table.

3- before you run the file `tags.js` make sure you have the
`category_id` in the `categories` table which you created in
step `2`, then run `tags.js` from the root repo using the command
`node api/scripts/tags.js`. You will get 5 tags in your `tags` table.

3- before you run `goods.js` you have to get `category_id` from
`categories` table and `giver_id` and `owner_id` from table `user` which
you have created it in step `1`, then
run `node api/scripts/goods.js`. you will get 5 goods in your `goods` table.

5- before your run `goodsForMany.js` you will need `needer_id` form `user` table and
`goods_id` form `goods` table , then run the file `goodsForMany.js` in the root
repo `node api/scripts/goodsForMany.js`, and you will get 5 goodsForMany data in your `goodsformany` table.
