import React, { useState, useEffect } from 'react'
import HeaderComponent from '../Components/Header/HeaderComponent'
import FooterComponent from '../Components/Footer/FooterComponent'
import axios from 'axios'


const NewsPage = () => {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true)

    const getNewsAPI = async () => {
        try {
            const data = await axios('https://yh-finance.p.rapidapi.com/market/get-popular-watchlists', {
                headers: {
                    'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
                    'x-rapidapi-key': '49f34c9ce3mshbd16f3c608d42fbp19ab4fjsna9de1d4253ec'
                }
            });
            const dataResults = await data.data.finance.result['0'].portfolios;
            setNews(dataResults);
            setLoading(false)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getNewsAPI()
    }, [])


  return (
    <>
        <HeaderComponent />
        { loading ? <h1>loading...</h1> : (
            <>
            { news.map(yahoo => (
                <div key={yahoo.createdAt}>
                    <ul>
                        <li><img src={yahoo.backgroundImage["ios:size=small"].url} alt="News Imagine" width={yahoo.backgroundImage["ios:size=small"].width} height={yahoo.backgroundImage["ios:size=small"].height} /></li>
                        <li><h3>{yahoo.name}</h3></li>
                        <li><p>{yahoo.shortDescription}</p></li>
                        <li>Percent Change: {Math.round(100 * yahoo.dailyPercentGain) / 100}%</li>
                    </ul>
                </div>
            )) }
            </>
        )}
        <FooterComponent />
    </>
  )
}

export default NewsPage
