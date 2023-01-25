import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import requests from '../Requests'
const Home = () => {
  return (
    <div>
        <Main/>
        <Rows rowID='1' title={'Upcoming'} fetchUrl={requests.requestUpcoming}/>
        <Rows rowID='2' title={'Popular'} fetchUrl={requests.requestPopular}/>
        <Rows rowID='3' title={'Trending'} fetchUrl={requests.requestTrending}/>
        <Rows rowID='4' title={'Top Rated'} fetchUrl={requests.requestTopRated}/>
        <Rows rowID='5' title={'Horror'} fetchUrl={requests.requestHorror}/>
    </div>
  )
}

export default Home