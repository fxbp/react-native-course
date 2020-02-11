import React, { useEffect } from 'react'
import { Spinner, Container, Content, Grid} from 'native-base'

import sytles from './style'
import { LOGIN } from '../../const'


export default ({ navigation }) => {

    useEffect(() => {
        navigation.navigate(LOGIN)
    })
    return (
        <Container>
            <Content contentContainerStyle={ sytles.content } >
                <Grid style={sytles.grid}>
                    <Spinner color="pink" />
                </Grid>
            </Content>
        </Container>
    )
}