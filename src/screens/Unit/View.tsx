import React from 'react';
import { StepsList } from '../../components/Steps/List';
import { InfoItem } from '../../components/Info/Item';
import { UnitsProps } from '../../components/Units/List';

const plug = () => {
    const plug = {
        units:
            [
                {
                    unitInfo: {
                        unitName: 'HJK-76',
                        unitNumber: 18263712
                    },
                    stages: [{
                        serialNumber: 1826361,
                        title: 'Stage 1',
                        startDate: '11.02.34',
                        finishDate: '11.03.35',
                        documents: [{ id: 1342, link: 'Instruction.doc' }, { id: 1346, link: 'Components.xls' }],
                        complete: true
                    }, {
                        serialNumber: 1826371,
                        title: 'Stage 2',
                        startDate: '11.03.34',
                        finishDate: '11.05.35',
                        documents: [
                            { id: 1356, link: 'Instruction.doc' },
                            { id: 1389, link: 'Scheme.png' },
                            { id: 1251, link: 'Components.xls' }],
                        complete: false
                    }]
                }, {
                    unitInfo: {
                        unitName: 'TSJ-23',
                        unitNumber: 18253712
                    },
                    stages: [{
                        serialNumber: 1826361,
                        title: 'Stage 1',
                        startDate: '11.02.34',
                        finishDate: '11.03.35',
                        documents: [{ id: 1342, link: 'Instruction.doc' }, { id: 1346, link: 'Components.xls' }],
                        complete: true
                    }, {
                        serialNumber: 1826371,
                        title: 'Stage 2',
                        startDate: '11.03.34',
                        finishDate: '11.05.35',
                        documents: [
                            { id: 1356, link: 'Instruction.doc' },
                            { id: 1389, link: 'Scheme.png' },
                            { id: 1251, link: 'Components.xls' }],
                        complete: true
                    }, {
                        serialNumber: 1426371,
                        title: 'Stage 3',
                        startDate: '11.05.35',
                        finishDate: '11.06.35',
                        documents: [
                            { id: 1356, link: 'Instruction.doc' },
                            { id: 1389, link: 'Scheme.png' },
                            { id: 1251, link: 'Components.xls' }],
                        complete: false
                    }]
                }
            ]
    }
    return plug
}

const ScreenUnit = (props: UnitsProps) => {
    props = plug();

    const index:number = parseInt(window.location.pathname.split("/")[2]);
    return (
        <React.Fragment>
            <InfoItem {...props.units[index].unitInfo} />
            <StepsList {...props.units[index]} />
        </React.Fragment>
    )

};
export default ScreenUnit