import React, { Suspense } from 'react'

// @ts-ignore
const Home = React.lazy(() => import('cards/Home'));




const LayoutWrapper = () => {
    return (
        <div>
            <Suspense >
                {/* <Layouts /> */}
            </Suspense>
        </div>


    )
}

export default LayoutWrapper