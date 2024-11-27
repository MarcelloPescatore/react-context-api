import BlogForm from "../components/BlogForm/BlogForm";
import { Link } from "react-router-dom";

export default function PostCreatePage() {
    return(
        <>
            <BlogForm/>
            <Link to='/posts' className="btn btn-primary btn-lg mt-2">
                Go Back
            </Link>
        </>
    )
}