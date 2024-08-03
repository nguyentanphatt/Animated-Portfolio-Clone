import React from "react";
import { Heading } from "../common/Heading";
import { blog } from "../data/dummydata";

export const Blog = () =>{
    return (
        <>
            <section className="blog">
                <div className="container">
                    <Heading title="Blog" />
                    <div className="conten grid3">
                        {blog.map((item) => (
                            <div className='box' data-aos='flip-left'>
                                <div className='img' data-aos='fade-up'>
                                <img src={item.cover} alt='' data-aos='fade-down'/>
                            </div>
                                <div className='text'>
                                    <h3 data-aos='fade-right'>{item.title}</h3>
                                    <label >By {item.author}</label>
                                    <h3 data-aos='fade-up-right'>{item.desc}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}