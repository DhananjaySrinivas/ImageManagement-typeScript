import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Image from '../Image/Image';
import {galleryActions} from '../../store/images-slice';
import classes from './Gallery.module.css';
import Card from "./Card";


const Gallery = () => {
    const dispatch = useDispatch();
    const searchKey = useSelector(state => state.gallery.searchTerm);
    const images = useSelector(state => state.gallery.images);
    const baseUrl = 'https://api.unsplash.com/photos?client_id=8tIIkbGFrxgSQQ9mOkHiXhbenY2VNescsdy2HYcljVs'
    const storePhotosFromWeb = () => {
        (async () => {
            const res = await fetch(`${baseUrl}&per_page=20`);
            const resData = await res.json();
            let count =0 ;
            resData.map(({id, height, width, created_at, description, urls: {thumb}}) => {
                count = count +1;
                return {
                    id: id,
                    url: thumb,
                    name: `Img${count}.jpg`,
                    description: description,
                    height: height,
                    width: width,
                    date: created_at,
                    isChecked: false
                }
            }).forEach((img) => dispatch(galleryActions.addToGallery(img)))
        })().catch(err => {
            console.error(err);
        });
    }

    useEffect(() => {
        storePhotosFromWeb();
    }, []);
    const filtered = images.filter(img => img.name.includes(searchKey));
     const list = filtered.length !== 0
        ?  filtered.map(img => (
            <Card key={img.id}>
                <Image
                    id={img.id}
                    name={img.name}
                    description={img.description}
                    height={img.height}
                    width={img.width}
                    url={img.url}
                    isChecked={img.isChecked}
                />
            </Card>))
        :(<h4>Uh-oh! Nothing to show.</h4>)
     

    return (
        <section className={classes.media}>
            <div className={classes.row}>
                {list}
            </div>
        </section>
    )
}

export default Gallery;
