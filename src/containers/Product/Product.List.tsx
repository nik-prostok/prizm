import React, {useEffect} from 'react';
import { UnitsList } from '../../components/Product/Product.List';
import {HeaderInfo} from '../../components/Steps/HeaderInfo'
import productsAPI from '../../services/API/products.api';
import AddUnit from '../../components/AddForms/AddUnit'

const ProductList: React.FC = () => {
    const title = "Product"
    const products = [
        {
            title: 'KK-67',
            id: 123,
            productNumber: 254776,
            status: 'Started',
            stages: [{
                index: 1826361,
                title: 'Stage 1',
                startDate: '11.02.34',
                finishDate: '11.03.35',
                documents: [
                    { id: 1342, title: 'Instruction.doc',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:1,lastName:'Заебеев',userName:''} },
                    { id: 1346, title: 'Components.xls',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:2,lastName:'Заебеев',userName:''} }],
                status: 'FINISHED'
            }, {
                index: 1826371,
                title: 'Stage 2',
                startDate: '11.03.34',
                finishDate: '11.05.35',
                documents: [
                    { id: 1356, title: 'Instruction.doc',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:1,lastName:'Заебеев',userName:''} },
                    { id: 1389, title: 'Scheme.png',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:2,lastName:'Заебеев',userName:''} },
                    { id: 1251, title: 'Components.xls',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:3,lastName:'Заебеев',userName:''} }],
                status: 'STARTED'
            }]
        }, {
            title: 'HJK-35',
            id: 123,
            productNumber: 55645678,
            status: 'Started',
            stages: [{
                index: 1826361,
                title: 'Stage 1',
                startDate: '11.02.34',
                finishDate: '11.03.35',
                documents: [
                    { id: 1342, title: 'Instruction.doc',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:1,lastName:'Заебеев',userName:''} },
                    { id: 1346, title: 'Components.xls',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:2,lastName:'Заебеев',userName:''} }],
                status: 'FINISHED'
            }, {
                index: 1826371,
                title: 'Stage 2',
                startDate: '11.03.34',
                finishDate: '11.05.35',
                documents: [
                    { id: 1356, title: 'Instruction.doc',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:1,lastName:'Заебеев',userName:''} },
                    { id: 1389, title: 'Scheme.png',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:2,lastName:'Заебеев',userName:''} },
                    { id: 1251, title: 'Components.xls',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:3,lastName:'Заебеев',userName:''} }],
                status: 'STARTED'
            }, {
                index: 1426371,
                title: 'Stage 3',
                startDate: '11.05.35',
                finishDate: '11.06.35',
                documents: [
                    { id: 1356, title: 'Instruction.doc',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:3,lastName:'Заебеев',userName:''} },
                    { id: 1389, title: 'Scheme.png' ,path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:2,lastName:'Заебеев',userName:''}},
                    { id: 1251, title: 'Components.xls',path:'/asdad/asd',user:{email:'',firstName:'Андрей',id:1,lastName:'Заебеев',userName:''} }],
                status: 'CREATED'
            }]
        }
    ]

    useEffect(() => {
        productsAPI.fetchProducts().then(response => {console.log(response)});
    })

    return (
        <React.Fragment>
            <HeaderInfo title={title} />
            <UnitsList products={products} />
            <AddUnit products={products} />
        </React.Fragment>
    )

};
export default ProductList;
