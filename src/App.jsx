import { BrowserRouter, Route, Routes } from "react-router-dom"
import Posts from './pages/Posts.jsx'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import DefaultLayout from "./pages/DefaultLayout.jsx"
import PostCreatePage from "./pages/PostsCreatePage.jsx"
import PostPage from "./pages/PostPage.jsx"
import NotFound from "./pages/NotFound.jsx"


export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />} >
                        <Route path="/" element={<Home/>}/>
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/posts/:slug" element={<PostPage />} />
                        <Route path="/posts/create" element={<PostCreatePage/>} />
                        <Route path="/about" element={<About />} />
                        <Route path="*" element={<NotFound/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


