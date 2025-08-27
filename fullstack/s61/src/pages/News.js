import NewsCard from '../components/NewsCard';
import newsData from '../data/newsData';

export default function News() {

	console.log(newsData);

	const news = newsData.map(news => {
	    return (
	        <NewsCard key={news.id} newsProp={news}/>
	    );
	})

	return(
		<>
			<h1>News</h1>
			{news}
		</>
	)
}