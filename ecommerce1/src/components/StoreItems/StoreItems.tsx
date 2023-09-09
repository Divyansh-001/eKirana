// import {React} from 'react';
import './StoreItems.css';
import Card from '../Card/Card';
import {listOfItems} from '../Home/DummyListOfItems';
import AccessComponent from '../Miscllaneous/DialogBox/AllowAccessComponent';
const StoreItems = () => {
    return (
        <>
        <div className="home-container">
            {listOfItems.map((item) => (
                <Card item={item} />
            ))}
        </div>
        <AccessComponent/>
        </>
    );
};

export default StoreItems;
