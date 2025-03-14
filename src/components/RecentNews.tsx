



// import React from 'react';
// import { Link } from 'react-router-dom';
// import useQuery from '../hooks/useQuery';
// import ArticleRow from './ArticleRow';
// import PrimaryHeader from './PrimaryHeader';

// export default function RecentNews() {
// 	const articles =
// 		useQuery<SGA.ArticleDocument[]>(
// 			`*[_type == 'article'] | order (publish_date desc, title) [0...3]`
// 		) ?? [];

// 	const articleList = articles.map((article) => (
// 		<ArticleRow article={article} key={article._id} />
// 	));

// 	return (
// 		<div>
// 			<PrimaryHeader>Recent News</PrimaryHeader>

// 			{articleList}
			
// 			<Link to='/news'>All News</Link>
// 		</div>
// 	);
// }































import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import ArticleRow from './ArticleRow';
import PrimaryHeader from './PrimaryHeader';

import '../css/RecentNews.css';

export default function RecentNews() {
    useEffect(() => {
        // Load Instagram embed script
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script when component unmounts
            document.body.removeChild(script);
        };
    }, []);

    const articles =
        useQuery<SGA.ArticleDocument[]>(
            `*[_type == 'article'] | order (publish_date desc, title) [0...3]`
        ) ?? [];

    const articleList = articles.map((article) => (
        <ArticleRow article={article} key={article._id} />
    ));

    return (
        <div>

			{/* Instagram Embed */}
            <PrimaryHeader>Recent News</PrimaryHeader>
            <div className="instagram-container">
                <blockquote 
                    className="instagram-media" 
                    data-instgrm-permalink="https://www.instagram.com/tj.sga/?utm_source=ig_embed&amp;utm_campaign=loading"
                    data-instgrm-version="14"
                    style={{
                        background: '#FFF',
                        border: '0',
                        borderRadius: '3px',
                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                        margin: '1px',
                        maxWidth: '700px',
                        minWidth: '500px',
                        padding: '0',
                        width: 'calc(100% - 2px)'
                    }}
                >
                </blockquote>
			</div>




			{/* spacer */}
			<div><br></br></div>
			<div><br></br></div>





			{/* newsletters */}
			<PrimaryHeader>Newsletters</PrimaryHeader>
            {articleList}
            <Link to='/news'>View All Newsletters</Link>
        </div>
    );
}