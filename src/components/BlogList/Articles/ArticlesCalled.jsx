import { Link } from "react-router-dom"

export default function ArticlesCalled({ articlesCalled, handleChange, handleEdit, handleUpdate, handlePublish, setEditingId, editingId, editingData, onDelete }) {
    return (
        <>
            {articlesCalled.map((article) => {
                const imageUrl = `http://localhost:3002/imgs/posts/${article.image}`
                return (<div key={article.id} className="blog-item">
                    {editingId === article.id ? (
                        <div className="editing">
                            <input
                                type="text"
                                placeholder="Title"
                                value={editingData.title}
                                onChange={(e) => handleChange("title", e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="slug"
                                value={editingData.slug}
                                onChange={(e) => handleChange("slug", e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="image"
                                value={editingData.image}
                                onChange={(e) => handleChange("image", e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="content"
                                value={editingData.content}
                                onChange={(e) => handleChange("content", e.target.value)}
                            />
                            <select value={editingData.status} onChange={(e) => handleChange("status", e.target.value)}>
                                <option value="draft">Draft</option>
                                <option value="published">Published</option>
                            </select>
                            <div className="buttons-edit">
                                <button onClick={() => handleUpdate(article.title)}>Save</button>
                                <button onClick={() => setEditingId(null)}>Cancel</button>
                            </div>
                        </ div>
                    ) : (
                        <>
                            <h3>{article.title}</h3>
                            <Link to={`/posts/${article.slug}`}>
                                <img src={imageUrl} alt="post image" />
                            </Link>
                            <p><strong>Slug:</strong> {article.slug}</p>
                            <p><strong>Status:</strong>  {article.status}</p>
                            <p><strong>Content:</strong>  {article.content}</p>
                            <p><strong>Tags:</strong>  {(article.tags || []).join(', ')}</p>

                            <div className="buttons">
                                <button onClick={() => handleEdit(article)}>Edit</button>
                                {/* cancella la modifica */}
                                <button onClick={() => onDelete(article.title)}>Delete</button>
                                {/* Bottone per cambiare stato da 'draft' a 'published' */}
                                {article.status === "draft" && (
                                    <button className="publish" onClick={() => handlePublish(article.title)}>
                                        Publish
                                    </button>
                                )}
                                <Link to={`/posts/${article.slug}`}>
                                    <button>View Page</button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                )
            })}
        </>
    )
}