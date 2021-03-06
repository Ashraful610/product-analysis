import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
       <div>
               <div className='d-flex justify-center'>
                   <h1 className='text-pink-300'>Question Answer</h1>
               </div>
            <section className='row d-flex gap-16 mt-4 mb-4 lg:p-6 p-3 answer-section'>
                <div className='col-lg-6 p-6 ms-12 shadow' >
                    <h2>What is Semantic tag</h2>
                    <article className='semantic-article p-4'>
                      Semantic tag means meaningful tag. This means that looking   at the semantic tags indicates what kind of work the tags do. Semantic tags make web pages accessible. Specifically, semantic tags make it clear to the browser what the meaning of a page and its content is. That clarity is also communicated with search engines, ensuring that the right pages are delivered for the right queries.Exmple-header ,main ,nav ,footer etc.
                    </article>
                </div>
                <div className='col-lg-5 p-6 shadow'>
                        <h2>What is Context API</h2>
                        <article className='context-article p-4'>
                            Context API is a component structure provideby React Framework. Which helps us to sharcertain types of data at all levels of thapplication. The context api is used to solvthe problem of prop dealings. Context APIs cabe used to share data with multiple elementwithout having to pass data through manuaprops. We can use context api for a variety otasks, including the theme setting of thapplication
                        </article>
                </div>
            </section>
    </div>
    );
};

export default Blogs;