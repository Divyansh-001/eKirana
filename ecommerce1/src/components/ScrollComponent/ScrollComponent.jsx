import { React } from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { dummyData } from './dummyData';
// import 'react-horizontal-scrolling-menu/dist/styles.css';
import Card from '../Card/Card';
import './ScrollComponent.css';
// interface ScrollComponentProps {
//     // Define your component props here if needed
// }
const ScrollComponent: React.FC<ScrollComponentProps> = (props: any) => {
    return (
        <div className="scroll">
            {dummyData.map((item, index) => (
                <Card key={index} item={item} width="30vh" height="24vh" />
            ))}
        </div>
    );
};

export default ScrollComponent;
