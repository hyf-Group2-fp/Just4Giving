import { useSelector } from 'react-redux';

// components
import Categories from '../categories/categories';

function Needer() {
  // get the needer first name from state
  const first_name = useSelector((state) => state.userInfo.first_name);
  const email = useSelector((state) => state.categoryGoods[0].giver_id);

  // goods
  const goods = useSelector((state) => state.categoryGoods);
  console.log(goods);
  console.log(email);

  return (
    <div className="banner">
      <div className="welcome">
        <h1> Hallo {first_name} !</h1>
        <p>Welcome to JUST4GIVING </p>
      </div>
      <Categories />
    </div>
  );
}

export default Needer;
