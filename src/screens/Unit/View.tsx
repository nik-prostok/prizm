import React from 'react';
import { StepsList } from '../../components/Steps/List';
import { InfoItem } from '../../components/Info/Item';

const ScreenUnit = () => {
    const unit = 
        {
           unitName: 'Плата',
           unitNumber: 1645667
        }
    const stages = [
        {
            serialNumber: 1323,
            title: 'Stage 1',
            startDate: '11.02.34',
            finishDate: '11.03.35',
            docs: ['Instruction.doc','Components.xls'],
            complete: 0
        },
        {
            serialNumber: 1323,
            title: 'Stage 2',
            startDate: '11.03.34',
            finishDate: '11.05.35',
            docs: ['Instruction.doc','Scheme.png','Components.xls'],
            complete: 1
        },
    ]

    return (
        <React.Fragment>
            <InfoItem {...unit} />
            <StepsList stages = {stages} />
        </React.Fragment>
    )

};
export default  ScreenUnit