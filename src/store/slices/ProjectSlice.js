import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "maggi",
        category: "design",
        price: "12₹",
        description:
            "I love Maggi realy oo yues  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },

    {
        id: 2,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "allu pakoida",
        category: "photo",
        price: "20₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 3,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "corn",
        category: "pics",
        price: "10₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 4,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "chola",
        category: "illustrate",
        price: "50₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 5,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "web",
        category: "pics",
        price: "80₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 6,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "Non-Veg Thali",
        category: "photo",
        price: "180₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 7,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "react",
        category: "photo",
        price: "60₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 8,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "Rajma Rice",
        category: "pics",
        price: "60₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 9,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "samaso",
        category: "illustrate",
        price: "10₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },

]
const projectSlice = createSlice(
    {
        name: "projects",
        initialState,
        reducers: {
            getProjecct: (state, action) => {
                return state + action.payload
            }
        }
    }

)
export const { getProjecct } = projectSlice.actions

export default projectSlice.reducer