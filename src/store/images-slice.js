import { createSlice } from '@reduxjs/toolkit';
const galleryInitialState = { images: [], dummyImages:'',largeImage: false, searchTerm: "", selectAll: false, isSelected: false };

const gallerySlice = createSlice({
    name: 'gallery',
    initialState : galleryInitialState,
    reducers : {
        addToGallery(state, action) {
            const newImage = action.payload;
           // console.log(newImage);
            const existingImage = state.images.find(image=> image.id === newImage.id);
     
            if(!existingImage) {
                state.images.push({
                    id: newImage.id,
                    url: newImage.url,
                    name: newImage.name,
                    description: newImage.description,
                    height: newImage.height,
                    width: newImage.width,
                    date: newImage.date,
                    isChecked: newImage.isChecked
                });
            }
        },

        // largeimageDisplay(state,action){
        //      state.largeImage = action.payload;
        // },
        addToDummyGallery(state, action) {
            state.dummyImages =action.payload },
    
        removeImgFromGallery(state) {
            state.images = state.images.filter(image => image.isChecked !== true);
        },
        updateSelectAll(state) {
            state.selectAll = !state.selectAll;
                
            if(state.selectAll) {
                state.images.forEach(image => image.isChecked = true);
            } else {
                state.images.forEach(image => image.isChecked = false);
            }
            state.isSelected = state.images.some(image => image.isChecked === true);
        },

        updateSearchTerm(state, action) {
            const searchTerm = action.payload;
            state.searchTerm = searchTerm;
        },

        updateImgToSelected(state, action) {
            const id = action.payload;
            const existingImg = state.images.find(image => image.id === id);
            existingImg.isChecked = !existingImg.isChecked;
            state.isSelected = state.images.some(image => image.isChecked === true);
        },


      
        sortByTitle(state) {
            state.images = state.images.sort((image1, image2) => {
                if(image1.description === null) return -1;
                else if(image2.description === null) return 1;
                else {
                    return image1.description.split(' ')[0] - image2.description.split(' ')[0];
                }
                
            })
        },
        sortByDate(state) {
            state.images = state.images.sort((image1, image2) => new Date(image1.date) - new Date(image2.date));
        },
        sortBySize(state) {
            state.images = state.images.sort((image1, image2) => (image1.height * image2.width) - (image2.height * image2.width));
        }
    }
})
export const galleryActions = gallerySlice.actions;
export default gallerySlice;