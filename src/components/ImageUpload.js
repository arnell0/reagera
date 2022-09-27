import React from 'react';
import { ImageInput } from './atoms/FileInput';
import ImageViewer from './molecules/ImageViewer';

export default function ImageUpload(props) {
    const [files, setFiles] = React.useState(null)

    function handleFiles(files) {
        setFiles(files)
    }

    return (
        <div>
            <ImageInput handle={handleFiles} />
            <ImageViewer images={files} />
        </div>
    )
}

















