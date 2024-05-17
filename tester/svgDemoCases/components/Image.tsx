import React from "react";
// import  from 'react-native-svg'
import { Svg, Circle, Rect } from 'react-native-svg'
import { GenMain } from './gen'
import { genTransformProps, genStrokeProps, genFillProps, CaseParams } from '../genUtil'
const basicProps = {
    width: 80,
    height: 80,
    opacity: 1,
    href: 'data:image/png;base64,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'
}

const basicCases: CaseParams[] = [
    {
        type: 'mulKey',
        id: 'image1',
        values: [
            // 默认情况
            {
                width: 80,
                height: 80,
                opacity: 1,
            },
            // 存在x、y定位的情况
            {
                x: 10,
                y: 10
            },
            // 透明度为0.5
            {
                opacity: '0.5'
            },
            // 透明度为0.1
            {
                opacity: '0.1'
            },
            // 改变大小，case1：宽-高 为 80-60
            {
                width: 80,
                height: 60
            },
            // 改变大小，case2：宽-高 为 60-80
            {
                width: 60,
                height: 80
            },
            // preserveAspectRatio case 1 none
            {
                preserveAspectRatio: "none meet"   
            },
            // preserveAspectRatio case 2 none
            {
                preserveAspectRatio: "none slice"   
            },
            // preserveAspectRatio case 3 xMinYMin meet (x Meet)
            {
                width: 90,
                height: 60,
                preserveAspectRatio: "xMinYMin meet"   
            },
            // preserveAspectRatio case 4 xMidYMin meet (x Meet)
            {
                width: 90,
                height: 60,
                preserveAspectRatio: "xMidYMin meet"   
            },
            // preserveAspectRatio case 5 xMaxYMin meet (x Meet)
            {
                width: 90,
                height: 60,
                preserveAspectRatio: "xMaxYMin meet"   
            },
            // preserveAspectRatio case 6 xMinYMin meet (y Meet)
            {
                width: 60,
                height: 90,
                preserveAspectRatio: "xMinYMin meet"   
            },
            // preserveAspectRatio case 7 xMinYMid meet (y Meet)
            {
                width: 60,
                height: 90,
                preserveAspectRatio: "xMinYMid meet"   
            },
            // preserveAspectRatio case 8 xMinYMax meet (y Meet)
            {
                width: 60,
                height: 90,
                preserveAspectRatio: "xMinYMax meet"   
            },
            
            // preserveAspectRatio case 9 xMinYMin meet (x Slice)
            {
                width: 60,
                height: 90,
                preserveAspectRatio: "xMinYMin slice"   
            },
            // preserveAspectRatio case 10 xMidYMin meet (x Slice)
            {
                width: 60,
                height: 90,
                preserveAspectRatio: "xMidYMin slice"   
            },
            // preserveAspectRatio case 11 xMaxYMin meet (x Slice)
            {
                width: 60,
                height: 90,
                preserveAspectRatio: "xMaxYMin slice"   
            },
            // preserveAspectRatio case 12 xMinYMin meet (y Slice)
            {
                width: 90,
                height: 60,
                preserveAspectRatio: "xMinYMin slice"   
            },
            // preserveAspectRatio case 13 xMinYMid meet (y Slice)
            {
                width: 90,
                height: 60,
                preserveAspectRatio: "xMinYMid slice"   
            },
            // preserveAspectRatio case 14 xMinYMax meet (y Slice)
            {
                width: 90,
                height: 60,
                preserveAspectRatio: "xMinYMax slice"   
            },
            {
                width:90,
                height: 60,
                fill: 'red',
                xlinkHref: "https://img.icons8.com/2266EE/search"
            }
        ]
    }
]

const allCases = [
    ...basicCases,
    // ...genFillProps(),
    // ...genStrokeProps(),
    // ...genTransformProps()
]


export default function () {
    return (
        <GenMain
            cases={allCases}
            basicProps={basicProps}
            comName='Image'
        >
        </GenMain>
    )
}