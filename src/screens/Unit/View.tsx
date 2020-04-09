import React from 'react';
import { StepsList } from '../../components/Steps/List';
import { InfoItem } from '../../components/Info/Item';
import { Unit } from '../../components/Units/List';

const plug = () => {
    const unit ={unitInfo: {
        unitName: 'HJK-76',
        unitNumber: 18263712
    },
    stages: [{
        serialNumber: 1826361,
        title: 'Stage 1',
        startDate: '11.02.34',
        finishDate: '11.03.35',
        documents: [{id: 1342, link: 'Instruction.doc'}, {id: 1346, link: 'Components.xls'}],
        complete: true
    }, {
        serialNumber: 1826371,
        title: 'Stage 2',
        startDate: '11.03.34',
        finishDate: '11.05.35',
        documents: [
            {id: 1356, link: 'Instruction.doc'},
            {id: 1389, link: 'Scheme.png'},
            {id: 1251, link: 'Components.xls'}],
        complete: false
    }]
}
return unit
}

const ScreenUnit = (props: Unit) => {
props = plug();
    return (
        <React.Fragment>
            <InfoItem {...props.unitInfo} />
            <StepsList {...props} />
        </React.Fragment>
    )

};
export default ScreenUnit