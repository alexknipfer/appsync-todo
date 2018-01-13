import * as React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'
import DefaultLayout from '../DefaultLayout/DefaultLayout'

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Loader: React.SFC<{}> = () => (
    <DefaultLayout>
        <Center>
            <Spin />
        </Center>
    </DefaultLayout>
)

export default Loader