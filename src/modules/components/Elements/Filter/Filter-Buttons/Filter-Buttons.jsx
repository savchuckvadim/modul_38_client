import { useState } from 'react';
import RedButton from '../../../Elements/Button/Button';
import style from './Filter-Buttons.module.css';



const FilterButtons = (props) => {
    //props:
    //actions - array: names of filter button
    //filter(int) - callback: function for filter


    const active = 'red';
    const color = 'grey';
    const textColor = 'rgba(244, 72, 72, 1)';
    const [one, setOneColor] = useState(color);
    const [two, setTwoColor] = useState(color);
    const [three, setThreeColor] = useState(color);


    let colors = [one, two, three];

    let actions = props.actions.map((action, index) => {
        if (props.actions.length === 1) {
            return { 'name': action, 'color': active }
        }
        return { 'name': action, 'color': colors[index] }

    });


    const onButtonClick = (index) => {
        if (props.actions.length > 1) {
            if (index === 1) {
                setOneColor(active);
                setTwoColor(color);
                setThreeColor(color);
            } else if (index === 2) {
                setOneColor(color);
                setTwoColor(active);
                setThreeColor(color);
            } else if (index === 3) {
                setOneColor(color);
                setTwoColor(color);
                setThreeColor(active);
            }

            props.filter(index);
        };
    };

    return (
        <div className={style.wrapper}>

            {actions.map((action, index) => (
                <div key={action.name} className={style.action}>
                    {<RedButton
                        name={action.name}
                        color={action.color}
                        textColor={textColor}
                        border={12}
                        onClick={() => { onButtonClick(index + 1) }}
                        disabled={false}
                    />}
                </div>
            ))}



        </div>
    );
};

export default FilterButtons;