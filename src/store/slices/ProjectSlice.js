import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "maggi",
        category: "web",
        price: "12₹",
        description:
            "I love Maggi realy oo yues  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },

    {
        id: 2,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "allu pakoida",
        category: "react",
        price: "20₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 3,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "corn",
        category: "javascript",
        price: "10₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 4,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "chola",
        category: "css",
        price: "50₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 5,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "web",
        category: "css",
        price: "80₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 6,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "Non-Veg Thali",
        category: "javascript",
        price: "180₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 7,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "react",
        category: "dinner",
        price: "60₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 8,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "Rajma Rice",
        category: "css",
        price: "60₹",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
        id: 9,
        img_url: "https://cdn.pixabay.com/photo/2020/03/24/20/59/car-4965498__340.jpg",
        title: "samaso",
        category: "javascript",
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