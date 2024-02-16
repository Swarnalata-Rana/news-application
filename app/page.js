import React from 'react';
import Header from "./Header";
import Search from "./Search";
import Articles from "./Articles";
import Footer from "./Footer";

const Page = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <Search />
                <Articles />
            </div>
            <Footer />
        </>
    );
}
export default Page;
