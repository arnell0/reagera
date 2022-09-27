import React from 'react';
import { Overlay } from '../atoms/Overlay';

export default function ImageViewer(props) {
    const [images , setImages] = React.useState(null)
    const [image, setImage] = React.useState(null)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [showOverlay, setShowOverlay] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        if (props.images && props.images.length > 0) {
            setLoading(true)

            let _images = []
            for (let i = 0; i < props.images.length; i++) {
                _images.push(URL.createObjectURL(props.images[i]))
            }

            setImages(_images)
            setImage(_images[0])

            setLoading(false)
        }
    }, [props.images])

    function handlePreviewClick(e, i) {
        setImage(e.target.src)
        setActiveIndex(i)
        if (!showOverlay) setShowOverlay(true)
    }

    function handleOverlayClick() {
        if (activeIndex < images.length - 1) {
            setImage(images[activeIndex + 1])
            setActiveIndex(activeIndex + 1)
        } else {
            setImage(images[0])
            setActiveIndex(0)
        }
    }

    let previewIMG = (x, size = "small", active = false, onClick = null) => {
        let w, h

        if (size === "small") {
            w = "64px"
            h = "64px"
        } else if (size === "medium") {
            w = "128px"
            h = "128px"
        } else if (size === "large") {
            w = "256px"
            h = "256px"
        } else if (size === "full") {
            w = "80vh"
            h = "80vh"
        }

        return (
            <img alt="preview" 
                src={x} 
                onClick={onClick}
                style={{
                    width: w,
                    height: h,
                    border: active ? "2px solid lightgrey" : "2px solid rgba(0, 0, 0, 0)",
            }} />
        )
    }


    return (
        <div style={{display:"flex"}}>
            { loading && <div>Loading...</div> }

            {images && images.map((image, index) => {
                return <div key={index} onClick={(e) => handlePreviewClick(e, index)}>{previewIMG(image, "small")}</div>
            })}

            {image && showOverlay && 
                <Overlay onClickOuter={() => setShowOverlay(false)}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}>
                        {previewIMG(image, "full", false, handleOverlayClick)}
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "10px",
                        }}>
                            {images && images.map((image, index) => {
                                return <div 
                                    key={index} 
                                    onClick={(e) => handlePreviewClick(e, index)}
                                    style={{
                                        margin: "2px",
                                    }}>
                                    {previewIMG(image, "small", activeIndex === index)}
                                </div>
                            })}
                        </div>
                    </div>
                </Overlay>
            }
        </div>
    )
}










