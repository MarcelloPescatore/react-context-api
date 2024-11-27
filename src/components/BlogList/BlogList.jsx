import React, { useState } from "react";
import ArticlesCalled from "./Articles/ArticlesCalled";


export default function BlogList({ onDelete, onUpdate }) {
    const [editingId, setEditingId] = useState(null);
    const [editingData, setEditingData] = useState({});

    const handleEdit = (article) => {
        // Imposto l'articolo in modifica e precompila i dati
        setEditingId(article.id);
        setEditingData({
            title: article.title,
            slug: article.slug,
            image: article.image,
            content: article.content,
            status: article.status
        });
    };

    const handleChange = (field, value) => {
        // Aggiorna il campo specifico nell'oggetto di modifica
        setEditingData((prev) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleUpdate = (title) => {
        // Salva la modifica
        onUpdate(title, editingData);
        // Esce dalla modalità modifica
        setEditingId(null);
    };

    /* const handlePublish = (title) => {
        const articleToUpdate = articlesCalled.find(article => article.title === title);
        if (articleToUpdate.status === "draft") {
            // Cambia lo stato a 'published'
            onUpdate(title, { status: "published" });
        }
    }; */

    return (
        <div className="list">
            {/* articoli chiamata fetch */}
            <ArticlesCalled 
                handleChange={handleChange} 
                handleEdit={handleEdit} 
                handleUpdate={handleUpdate} 
                setEditingId={setEditingId} 
                /* handlePublish={handlePublish} */
                editingId={editingId} 
                editingData={editingData} 
                onDelete={onDelete} 
            />
        </div>
    );
};
