import React from 'react'
import { Image } from 'react-native'
import { Container, Content, Grid, Text, Button } from 'native-base'

import styles from './style'
import { HOME } from '../../const'

const GOOGLE_IMAGE = require('../../../assets/google-icon.png')



export default function Login ({ navigation }) {
   
    const handleButton = () => {
        // AQUÍ S'HAURIA DE FER EL LOGIN, PERÒ PASSEM DE TOT
        navigation.navigate(HOME)
    }

    return(
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Grid style={styles.grid}>
                    <Text style={styles.title} > Banvangat!!!!</Text>
                    <Text style={styles.subtitle} > Inicia sesió per continuar</Text>
                    <Button light style={styles.googleBtn} onPress={handleButton}>
                        <Image source={GOOGLE_IMAGE} style={styles.googleIcon} />
                        <Text>Google</Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    )

}