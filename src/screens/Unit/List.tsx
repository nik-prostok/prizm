import React from 'react';
import {UnitsList} from '../../components/Units/List';
import {Header} from '../../components/Header/Header'

const ScreenAllUnits = () => {
    const title = "Units"
    const units = [
        {
            unitInfo: {
                unitName: 'HJK-76',
                unitNumber: 111,
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
                unitNumber: 222,
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

    return (
        <React.Fragment>
            <Header title={title}/>
            <UnitsList units={units}/>
        </React.Fragment>
    )

};
export default ScreenAllUnits
