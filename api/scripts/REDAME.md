## seeds to create a data in your tables 

### Instructions :

0- before your run any file here you should run `api/scripts/sync.js` file , which will
create 5 tables for you . 

1- first run `seed.js` form the root repo using the command
`node api/scripts/seed.js`
this will insert five users in your `user` table.

2- run `seed1.js` from the root repo using the command
`node api/scripts/seed1.js`
this will create 5 categories in `categories` table.


3- before you run the file `seed2.js` make sure you  have the
`category_id` form `categories` table which you created in
step `2` , the must match exactly! because `category_id` is a foreign key
in the table `tags` you want to create!!
then run `seed2.js` from the root repo using the command
`node api/scripts/seed2.js`. you will get 5 tags in your `tags` table

3- before you run `seed3.js` you have to get `category_id` from
`categories` table and `giver_id` and `owner_id` from table `user` which
you have created it in step `1` then 
run `node api/scripts/seed3.js`. you will get 5 goods in your `goods` table

5- before your run `seed4.js` you will need `needer_id` form `user` table and
`goods_id` form `goods` table , then run the file `seed4.js` in the root
repo `node api/scripts/seed4.js`, and you will get 5 goodsForMany data in your `goodsformany` table