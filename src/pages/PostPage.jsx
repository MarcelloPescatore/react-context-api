import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function PostPage() {

    const { slug } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState(null)
    const url = `http://localhost:3002/posts/${slug}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const keys = Object.keys(data)
                console.log(keys);
                if (keys.includes('error')) {
                    navigate('/404')

                } else {
                    setPost(data.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            {
                post ? (

                    <div className="mt-5">

                        <section className="post_details">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="card border-0 rounded-4 shadow-lg">
                                            <img className="card-img-top rounded-4" src={`http://localhost:3002/imgs/posts/${post.image}`} alt="" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h3>{post.title}</h3>
                                        <div>
                                            <p>
                                                {post.content}
                                            </p>
                                            <span><strong>Tags:</strong> {(post.tags || []).join(', ')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        < Link to='/posts' className="btn btn-primary btn-lg mt-2">
                            Go Back
                        </Link >

                    </div>
                ) : (
                    <div>loading...</div>

                )

            }
        </>
    )
}