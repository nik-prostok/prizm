import React from 'react';
import { StepsList } from '../../components/Steps/List';
import { InfoItem } from '../../components/Info/Item';
import { Unit } from '../../components/Units/List';

const ScreenUnit = (props: Unit) => {

    return (
        <React.Fragment>
            <InfoItem {...props.unitInfo} />
            <StepsList {...props} />
        </React.Fragment>
    )

};
export default ScreenUnit