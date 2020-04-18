import React from 'react';
import { StepsList } from '../../components/Steps/Steps.List';
import { ProductInfo } from '../../components/Product/Product.Info';
import { RouteComponentProps } from "react-router";
import AddStage from '../../components/AddForms/AddStage'

interface MatchParams {
    productNumber: string;
}

interface ScreenUnitProps extends RouteComponentProps<MatchParams> {

}

const plug = {
    title: 'KK-67',
    id: 123,
    productNumber: 254776,
    status: 'STARTED',
    stages: [{
        index: 1826361,
        title: 'Stage 1',
        startDate: '11.02.34',
        finishDate: '11.03.35',
        documents: [
            { id: 1342, path: '/asdad/asd', title: 'Instruction.doc', user: { email: '', firstName: 'Андрей', id: 1, lastName: 'Заебеев', userName: '' } },
            { id: 1346, path: '/asdad/asd', title: 'Components.xls', user: { email: '', firstName: 'Андрей', id: 2, lastName: 'Заебеев', userName: '' } }],
        status: 'FINISHED'
    }, {
        index: 1826371,
        title: 'Stage 2',
        startDate: '11.03.34',
        finishDate: '11.05.35',
        documents: [
            { id: 1356,path:'/asdad/asd', title: 'Instruction.doc',user:{email:'',firstName:'Андрей',id:2,lastName:'Заебеев',userName:''} },
            { id: 1389,path:'/asdad/asd', title: 'Scheme.png',user:{email:'',firstName:'Андрей',id:3,lastName:'Заебеев',userName:''} },
            { id: 1251,path:'/asdad/asd', title: 'Components.xls',user:{email:'',firstName:'Андрей',id:4,lastName:'Заебеев',userName:''} }],
        status: 'STARTED'
    }]
}

const ProductView = (props: ScreenUnitProps) => {

    return (
        <React.Fragment>
            <ProductInfo title={plug.title} productNumber={Number(props.match.params.productNumber)}/>
            <StepsList stages={plug.stages} />
            <AddStage />
        </React.Fragment>


    )

};
export default ProductView;
