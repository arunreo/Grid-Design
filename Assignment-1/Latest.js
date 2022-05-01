import React from 'react'
import { data } from './datas'
export default function LatestPost() {
    let filterButttondatas = [
        {
            id: 1,
            name: 'All',
        },
        {
            id: 2,
            name: 'Artificial Intelligence'
        },
        {
            id: 3,
            name: 'Cloud Computing'
        },
        {
            id: 4,
            name: 'DevOps'
        },
        {
            id: 5,
            name: 'Programming Languages'
        },
        {
            id: 6,
            name: 'Mobile Application Development'
        },
        {
            id: 7,
            name: 'Technology and Tools'
        },
        {
            id: 8,
            name: 'Get a Job in a Tech Company'
        },
        {
            id: 9,
            name: 'Others'
        },
    ]

    return (
        <div className='latestPost-Section'>
            <h3>Latest Posts</h3>
            <div className='filter_icon_section'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" alt="" />   <p>  Filter by Category</p>
            </div>
            <div className='buttons'>

                {filterButttondatas.map((card) => {
                    return <span key={card.id} className={`${card.id === 1 ? 'active' : ''}`} >{card.name}</span>
                })}



            </div>

<div className="category_all">
                <p>Category: All</p>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" alt="" />
</div>
            <div className="cards">
                {data.map((card) => {
                    return (
                        <div key={card.id} className="blogCards">
                            <div className='imgSection'>
                                <img src={card.img} alt="" />
                            </div>
                            <div className="textSection">
                                <h3>{card.title}</h3>
                                <p>{card.name}<span>| {card.date}</span> </p>
                                <div className="des">
                                    <div>{card.des}</div>

                                </div>
                            </div>

                        </div>
                    )
                })}

            </div>

        </div>
    )
}