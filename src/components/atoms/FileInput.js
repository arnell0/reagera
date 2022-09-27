import React from 'react';

export function ImageInput(props) {
    
    async function handleImages(e) {
        let files = e.target.files

        let fileLimit = props.fileLimit ? props.fileLimit : 8
        if (files.length > fileLimit) {
            alert(`You can only upload ${fileLimit} images at a time.`)

            let _files = []
            for (let i = 0; i < fileLimit; i++) {
                _files.push(files[i])
            }
            props.handle(_files)
            return 
        }
        props.handle(files)
    }

    return (
        <div>
            {props && <input type="file" onChange={handleImages} multiple="multiple" accept="image/*,capture=camera" capture="”camera" />}
        </div>
    )
}

export function FileInput(props) {

    async function handleFiles(e) {
        let files = e.target.files
        props.handle(files)
    }

    return (
        <div>
            {props && <input type="file" onChange={handleFiles} multiple="multiple" accept="capture=camera" capture="”camera" />}
        </div>
    )
}















