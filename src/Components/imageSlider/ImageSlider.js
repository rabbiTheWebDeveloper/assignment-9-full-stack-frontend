import React, { useRef, useEffect } from "react";
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

// const images = [
//     {
//         original: 'https://picsum.photos/id/1018/1000/400/',
//         thumbnail: 'https://picsum.photos/id/1018/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1015/1000/400/',
//         thumbnail: 'https://picsum.photos/id/1015/250/150/',
//     },
//     {
//         original: 'https://picsum.photos/id/1026/1000/400/',
//         thumbnail: 'https://picsum.photos/id/1026/250/150/',
//     }
// ];

const ImageSlider = ({data}) => {
 const images =data.map(item => {
    return(
        {
            original:item.product_image,
            thumbnail:item.product_image

        }
    )
 })

    const imageGalleryRef = useRef(null);
    useEffect(() => {
        // Example usage of event handlers
        const onFullscreen = () => {
            imageGalleryRef.current.fullScreen();
        };

        const onPlay = () => {
            imageGalleryRef.current.play();
        };

        const onPause = () => {
            imageGalleryRef.current.pause();
        };

        const onMoveToSlide = () => {
            imageGalleryRef.current.slideToIndex(2);
        };

        // Attach event handlers as needed
        // For example:
        // document.addEventListener('keydown', handleKeyDown);

        return () => {
            // Cleanup event handlers if necessary
            // For example:
            // document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="wrapper">
            <ImageGallery
                ref={imageGalleryRef}
                items={images}
                infinite={true}
                lazyLoad={false}
                autoPlay={true}
                slideDuration={2500}
            />
        </div>
    );
};

export default ImageSlider;
