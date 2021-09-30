import React from "react";
import {
    SuccessSorryImg,
    SuccessSorryWrapper
} from "./StyledComp"
import img from "/Users/ekaterinavlasenko/Documents/hbpes/src/assets/1617739191_12-p-koshka-oboi-plachushchii-kot-17.png"


export default function SorryPage() {
    return (
        <SuccessSorryWrapper>
            <SuccessSorryImg src={img}/>
            </SuccessSorryWrapper>
        
    )
}