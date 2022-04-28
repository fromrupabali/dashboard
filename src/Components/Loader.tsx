import React from 'react'
import { LoaderContainer, LoaderIcon } from './Styles/Container.styles'
import IconSrc from '../assets/icon.jpeg';
export default function Loader() {
    return (
        <LoaderContainer>
            <LoaderIcon src={IconSrc}/>
        </LoaderContainer>
    )
}
