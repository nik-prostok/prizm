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
            documents: { docs: [{ id: 1342, link: 'Instruction.doc' }, { id: 1346, link: 'Components.xls' }] },
            complete: true
        },
        {
            serialNumber: 1323,
            title: 'Stage 2',
            startDate: '11.03.34',
            finishDate: '11.05.35',
            documents: { docs: [/* { id: 1356, link: 'Instruction.doc' }, { id: 1389, link: 'Scheme.png' }, { id: 1251, link: 'Components.xls' } */] },
            complete: false
        },
    ]

    return (
        <React.Fragment>
            <InfoItem {...unit}/>
            <StepsList stages={stages} />
        </React.Fragment>
    )

};
export default ScreenUnit