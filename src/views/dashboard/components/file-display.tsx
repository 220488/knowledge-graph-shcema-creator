import React, { useCallback, useEffect, useState } from "react"
import { IFileDisplayProps } from "../types/dashboard"
import graphUrl from '../styles/graph.png'
import '../styles/filedisplay.scoped.scss'
import { redirect } from "react-router-dom"

const FileDisplay: React.FC<IFileDisplayProps> = (props: IFileDisplayProps) => {
    console.log(graphUrl);
    
    const {
        title,
        createTime,
        imageUrl,
        folder
    } = props

    const jumpToEditor = useCallback(() => {
        window.open('/graph')
    }, [])

    return (
        <div className="file-display-container" onClick={jumpToEditor}>
            <div className="image-area">
                <img src={graphUrl} height={150}></img>
            </div>
            <div className="text">
                <div className="title">{title}</div>
                <div className="time">{createTime.toString()}</div>
            </div>
        </div>
    )
}

export default FileDisplay