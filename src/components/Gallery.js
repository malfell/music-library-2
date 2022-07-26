import GalleryItem from './GalleryItem'

function Gallery(props){
    // call read() function to request the data
    // since Gallery is wrapped in suspense, the app can process the return 
    // value of read() and render the right component
    const data = props.data.result.read()


    const display = props.data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
