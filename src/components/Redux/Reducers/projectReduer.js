const initialState = {
    projects: [
        [
            {
                id: 0,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "Validation",
            },
            {
                id: 1,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "Web",
            },
            {
                id: 2,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "Valid",
            },
            {
                id: 3,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "Hello",
            },
            {
                id: 4,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "HI",
            },
            {
                id: 5,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "voletile",
            },
            {
                id: 6,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "none",
            },
            {
                id: 7,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "wel",
            },
            {
                id: 8,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "Fac",
            },
        ],
        [
            {
                id: 0,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "Hello",
            },
            {
                id: 1,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "HI",
            },
            {
                id: 2,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "voletile",
            },
            {
                id: 3,
                img_url:
                    "https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149__340.jpg",
                title: "none",
            },
        ],
    ],
  
}

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PROJECTS":
            return { ...state, projects: action.payload }
        default:
            return state
    }

}