// 'use client'
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import News_Articles from './News_Articles';

const Page = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <Search/>
                <News_Articles/>
            </div>
            <Footer/>
        </>
    );
}
export default Page;
