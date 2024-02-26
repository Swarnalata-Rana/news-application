// 'use client'
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import Articles_grid from './Articles_grid';

const Page = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <Search/>
                <Articles_grid/>
            </div>
            <Footer/>
        </>
    );
}
export default Page;
