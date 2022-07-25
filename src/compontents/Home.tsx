import React, {useEffect, useState} from 'react';
import HomeHeaderItem from './elements/HomeHeaderItem';
import PageWrapper from './PageWrapper';
import Profile from './Profile';
import Cats from './Cats';

const Home:React.FC = () => {

	const [page, setPage] = useState(1);

	return (<>
		<header className='HomeHeader'>
			<HomeHeaderItem 
				Text='Profile' 
				ItemNumber={1} 
				selectedItemNumber={page}
				OnClick={() => {setPage(1)}}/>
			<HomeHeaderItem 
				Text='Cats' 
				ItemNumber={2} 
				selectedItemNumber={page}
				OnClick={() => {setPage(2)}}/>
		</header>
		<div>
			<PageWrapper
				pageNumber={1}
				selectedPageNumber={page}
			><Profile/></PageWrapper>
			<PageWrapper
				pageNumber={2}
				selectedPageNumber={page}
			><Cats/></PageWrapper>
		</div>
	</>)
}


export default Home;
