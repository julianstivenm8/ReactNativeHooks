import React from 'react'
import { TouchableOpacity, Text } from './styles'
import { FadeInView } from '../../styles/Animations'

export const PrimaryButton = (props) => (
        <FadeInView>
            <TouchableOpacity type={props.type}>
                <Text  type={props.type}> hola</Text>
            </TouchableOpacity>
        </FadeInView>
)
