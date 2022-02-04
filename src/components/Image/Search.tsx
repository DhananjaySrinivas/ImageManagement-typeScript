import Image from './Image';
import ImageLarger from './ImagesForLarge';
import classes from './Search.module.css';
import {useEffect, useState} from "react";
import Card from "../UI/Card";
import {galleryActions} from "../../store/images-slice.js";
import {useDispatch, useSelector} from "react-redux";




const Search =({searchTerm}:any) => {
    const dispatch = useDispatch();
    const [loadedImages, setLoadedImages] = useState<any>([])
    const [selectedImage, setSelectedImage] = useState<any>()
    const large = useSelector((state:any) => state.gallery.largeImage);
    const fetchImages = () => {
        (async () => {
            const baseUrl = 'https://api.unsplash.com/search/photos?client_id=8tIIkbGFrxgSQQ9mOkHiXhbenY2VNescsdy2HYcljVs&per_page=15&query='
            const response = await fetch(baseUrl+`${searchTerm}`);
            const responseJson = await response.json();
            const responseData = responseJson.results;
            setLoadedImages(responseData.map(({id, urls: {thumb, full}, description, height, width, created_at}:any) => {
                return {
                    id: id,
                    url: thumb,
                    url_full: full,
                    name: id,
                    description: description,
                    height: height,
                    width: width,
                    date: created_at,
                    isChecked: false
                }
            }))
        })().catch(error => {
            
            console.error(error);
        });
    }

   
    
    useEffect(() => {
        setSelectedImage('')
        if (searchTerm) {
            fetchImages()
        }
    }, [searchTerm])

    return (
		<div className={classes.conatiner}>
        <section className={classes.media}>
            <div className={classes.row}>
                {selectedImage &&
                <ImageLarger name={selectedImage.id}
                description={selectedImage.description}
                height={selectedImage.height}
                width={selectedImage.width}
                url={selectedImage.url_full}/>
                }
                {!selectedImage && !large && (searchTerm ? loadedImages.length === 0
                        ? (<h4>Uh-oh! Nothing to show.</h4>)
                        : loadedImages.map((image:any| void) => (
                            <Card key={image.id}>
                                <Image
                                    showSelectButton={false}
                                    id={image.id}
                                    name={image.name}
                                    description={image.description}
                                    height={image.height}
                                    width={image.width}
                                    url={image.url}
                                    isChecked={image.isChecked}
                                    onClick={() => {
                                        setSelectedImage(image);
                                        dispatch(galleryActions.addToDummyGallery(image));
                                             
                                    } } className={''}                                />
                              
                            </Card>))
                    : (<h4>Make a search to get started!!!</h4>))
                }
            </div>
        </section>
		</div>
    )
}


export default Search;


