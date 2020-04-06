import React from 'react';
import { StepsList } from '../../components/Steps/List';
import { InfoItem } from '../../components/Info/Item';

const ScreenUnit = () => {

    const stages = [
        {
            serialNumber: 1323,
            title: 'Unit1',
            startDate: '11.02.34',
            finishDate: '11.03.35',
            complete: true
        },
        {
            serialNumber: 1323,
            title: 'Unit2',
            startDate: '11.03.34',
            finishDate: '11.05.35',
            complete: true
        },
    ]

    return (
        <React.Fragment>
            <InfoItem />
            <StepsList stages = {stages} />
        </React.Fragment>
    )

};
export default  ScreenUnit