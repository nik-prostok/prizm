import React from 'react';
import { UnitsList } from '../../components/Units/List';
import { Header } from '../../components/Header/Header'

const ScreenAllUnits = () => {
    const units = [
        {
            unitInfo: {
                unitName: 'HJK-76',
                unitNumber: 18263712
            },
            stageList: {
                stages: [{
                    serialNumber: 1826371,
                    title: 'Stage 1',
                    startDate: '11.02.34',
                    finishDate: '11.03.35',
                    documents: { docs: [{ id: 1342, link: 'Instruction.doc' }, { id: 1346, link: 'Components.xls' }] },
                    complete: true
                },
                {
                    serialNumber: 1826371,
                    title: 'Stage 2',
                    startDate: '11.03.34',
                    finishDate: '11.05.35',
                    documents: { docs: [{ id: 1356, link: 'Instruction.doc' }, { id: 1389, link: 'Scheme.png' }, { id: 1251, link: 'Components.xls' }] },
                    complete: false
                }]
            }
        },
        {
            unitInfo: {
                unitName: 'PSK-34',
                unitNumber: 182123712
            },
            stageList: {stages:
                [
                {
                    serialNumber: 182123712,
                    title: 'Stage 1',
                    startDate: '11.02.34',
                    finishDate: '11.03.35',
                    documents: { docs: [{ id: 1342, link: 'Instruction.doc' }, { id: 1346, link: 'Components.xls' }] },
                    complete: true
                },
                {
                    serialNumber: 182123712,
                    title: 'Stage 2',
                    startDate: '11.03.34',
                    finishDate: '11.05.35',
                    documents: { docs: [{ id: 1356, link: 'Instruction.doc' }, { id: 1389, link: 'Scheme.png' }, { id: 1251, link: 'Components.xls' }] },
                    complete: true
                },
                {
                    serialNumber: 182123712,
                    title: 'Stage 3',
                    startDate: '11.05.34',
                    finishDate: '11.06.35',
                    documents: { docs: [/* { id: 1356, link: 'Instruction.doc' }, { id: 1389, link: 'Scheme.png' }, { id: 1251, link: 'Components.xls' } */] },
                    complete: false
                },
                {
                    serialNumber: 182123712,
                    title: 'Stage 4',
                    startDate: '11.06.34',
                    finishDate: '11.07.35',
                    documents: { docs: [/* { id: 1356, link: 'Instruction.doc' }, { id: 1389, link: 'Scheme.png' }, { id: 1251, link: 'Components.xls' } */] },
                    complete: false
                }]}
        }
    ]

return (
    <React.Fragment>
        <Header />
        <UnitsList units={units} />
    </React.Fragment>
)

};
export default ScreenAllUnits