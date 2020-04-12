import React from 'react';
import {StepsList} from '../../components/Steps/Steps.List';
import {ProductInfo} from '../../components/Product/Product.Info';
import {RouteComponentProps} from "react-router";

interface MatchParams {
    unitNumber: string;
}

interface ScreenUnitProps extends RouteComponentProps<MatchParams> {

}

const plug = {
    unitInfo: {
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

const ProductView = (props: ScreenUnitProps) => {

    return (
        <React.Fragment>
            <ProductInfo unitName={plug.unitInfo.unitName} unitNumber={Number(props.match.params.unitNumber)}/>
            <StepsList stages={plug.stages}/>
        </React.Fragment>
    )

};
export default ProductView;
