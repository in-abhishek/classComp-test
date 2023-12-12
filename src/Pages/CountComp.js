import React from 'react'
import ClassCounter from '../Comp2/ClassCounter'
import FunctionalCounter from '../Comp2/FunctionalCounter'

const CountComp = () => {
    return (
        <div>
            {/* using class counter */}
            <ClassCounter />

            {/* FunctionalCounter */}
            <FunctionalCounter />
        </div>
    )
}

export default CountComp