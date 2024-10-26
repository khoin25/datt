"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';

const BlogListPage = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const toggleOffCanvas = () => {
    setShowOffCanvas((prevState) => !prevState);
  };

  return (
    <div className="bg-white flex flex-col pb-10">
      {/* OffCanvas Wishlist */}
      <div
        id="offcanvas-wishlist"
        className={`offcanvas offcanvas-wishlist ${showOffCanvas ? 'show' : ''}`}
      >
        {/* OffCanvas Wishlist content */}
      </div>

      {/* OffCanvas Cart */}
      <div
        id="offcanvas-cart"
        className={`offcanvas offcanvas-cart ${showOffCanvas ? 'show' : ''}`}
      >
        {/* OffCanvas Cart content */}
      </div>

      {/* OffCanvas Menu */}
      <div
        id="offcanvas-mobile-menu"
        className={`offcanvas offcanvas-mobile-menu ${showOffCanvas ? 'show' : ''}`}
      >
        {/* OffCanvas Menu content */}
      </div>

      {/* Breadcrumb Area */}
      <div className="breadcrumb-area bg-gray-200 py-20" style={{ width: '100%', height: '406px', borderRadius: '20px'}}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 text-center">
              <h2 className="breadcrumb-title text-black justify-content-center" style={{fontSize: '24px' }}>BLOG</h2><br />
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb Area End */}
      {/* Blog Posts Area */}
      <div className="blog-posts-area justify-center mt-10" >
        <div className="container" style={{ width: '80%', margin: '0 auto'}}>
          <div className="row justify-content-center flex">
            {/* Blog Post Item */}
              <div className="col-lg-3 col-md-6 mb-6">
                <div className="blog-post bg-white p-4" >
                  <div className="border-5" style={{ width: '270px', height: '368px'}}>
                    <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp" className="w-full h-auto border-5" style={{width: '270px', height: '368px', borderRadius: '20px' }} />
                  </div>
                  <div className="w-full">
                  <div className="blog-post-meta grid items-center mt-3 mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="blog-date mr-4 text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400" />
                            27 tháng 6 năm 2030
                        </div>
                        <div className="blog-author text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faUser} className="text-blue-400" />
                            Oaklee Odom
                        </div>
                   </div>
                    <h1 className="post-title text-black" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      <Link href="/blog/post1">The Top Reasons People Succeed in the Smart Product Industry.</Link>
                    </h1>
                    <p className="post-excerpt text-black mt-3 mb-3" style={{ fontSize: '14px', color: '#3a3a3a' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <Link href="/blog/post1" className="read-more text-white" style={{ backgroundColor: '#4e4e4e', padding: '7px 25px', borderRadius: '15px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s', fontSize: '16px' }} 
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3b3b3b'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4e4e4e'}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog Post Item */}
              <div className="col-lg-3 col-md-6 mb-6 bg-blue">
                <div className="blog-post bg-blue p-4">
                  <div className="border-5" style={{ width: '270px', height: '368px'}}>
                    <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp" className="w-full h-auto border-5" style={{width: '270px', height: '368px', borderRadius: '20px' }} />
                  </div>
                  <div className="w-full">
                  <div className="blog-post-meta grid items-center mt-3 mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="blog-date mr-4 text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400" />
                            27 tháng 6 năm 2030
                        </div>
                        <div className="blog-author text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faUser} className="text-blue-400" />
                            Oaklee Odom
                        </div>
                   </div>
                    <h1 className="post-title text-black" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      <Link href="/blog/post1">The Top Reasons People Succeed in the Smart Product Industry.</Link>
                    </h1>
                    <p className="post-excerpt text-black mt-3 mb-3" style={{ fontSize: '14px', color: '#3a3a3a' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <Link href="/blog/post1" className="read-more text-white" style={{ backgroundColor: '#4e4e4e', padding: '7px 25px', borderRadius: '15px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s', fontSize: '16px' }} 
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3b3b3b'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4e4e4e'}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
                {/* Blog Post Item */}
              <div className="col-lg-3 col-md-6 mb-6">
                <div className="blog-post bg-white p-4" >
                  <div className="border-5" style={{ width: '270px', height: '368px'}}>
                    <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp" className="w-full h-auto border-5" style={{width: '270px', height: '368px', borderRadius: '20px' }} />
                  </div>
                  <div className="w-full">
                  <div className="blog-post-meta grid items-center mt-3 mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="blog-date mr-4 text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400" />
                            27 tháng 6 năm 2030
                        </div>
                        <div className="blog-author text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faUser} className="text-blue-400" />
                            Oaklee Odom
                        </div>
                   </div>
                    <h1 className="post-title text-black" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      <Link href="/blog/post1">The Top Reasons People Succeed in the Smart Product Industry.</Link>
                    </h1>
                    <p className="post-excerpt text-black mt-3 mb-3" style={{ fontSize: '14px', color: '#3a3a3a' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <Link href="/blog/post1" className="read-more text-white" style={{ backgroundColor: '#4e4e4e', padding: '7px 25px', borderRadius: '15px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s', fontSize: '16px' }} 
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3b3b3b'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4e4e4e'}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog Post Item */}
              <div className="col-lg- col-md-6 mb-6">
                <div className="blog-post bg-white p-4" >
                  <div className="border-5" style={{ width: '270px', height: '368px'}}>
                    <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp" className="w-full h-auto border-5" style={{width: '270px', height: '368px', borderRadius: '20px' }} />
                  </div>
                  <div className="w-full">
                  <div className="blog-post-meta grid items-center mt-3 mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="blog-date mr-4 text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400" />
                            27 tháng 6 năm 2030
                        </div>
                        <div className="blog-author text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faUser} className="text-blue-400" />
                            Oaklee Odom
                        </div>
                   </div>
                    <h1 className="post-title text-black" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      <Link href="/blog/post1">The Top Reasons People Succeed in the Smart Product Industry.</Link>
                    </h1>
                    <p className="post-excerpt text-black mt-3 mb-3" style={{ fontSize: '14px', color: '#3a3a3a' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <Link href="/blog/post1" className="read-more text-white" style={{ backgroundColor: '#4e4e4e', padding: '7px 25px', borderRadius: '15px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s', fontSize: '16px' }} 
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3b3b3b'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4e4e4e'}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
          </div>
          <div className="row justify-content-center flex">
            {/* Blog Post Item */}
              <div className="col-lg-3 col-md-6 mb-6">
                <div className="blog-post bg-white p-4" >
                  <div className="border-5" style={{ width: '270px', height: '368px'}}>
                    <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp" className="w-full h-auto border-5" style={{width: '270px', height: '368px', borderRadius: '20px' }} />
                  </div>
                  <div className="w-full">
                  <div className="blog-post-meta grid items-center mt-3 mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="blog-date mr-4 text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400" />
                            27 tháng 6 năm 2030
                        </div>
                        <div className="blog-author text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faUser} className="text-blue-400" />
                            Oaklee Odom
                        </div>
                   </div>
                    <h1 className="post-title text-black" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      <Link href="/blog/post1">The Top Reasons People Succeed in the Smart Product Industry.</Link>
                    </h1>
                    <p className="post-excerpt text-black mt-3 mb-3" style={{ fontSize: '14px', color: '#3a3a3a' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <Link href="/blog/post1" className="read-more text-white" style={{ backgroundColor: '#4e4e4e', padding: '7px 25px', borderRadius: '15px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s', fontSize: '16px' }} 
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3b3b3b'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4e4e4e'}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog Post Item */}
              <div className="col-lg-3 col-md-6 mb-6 bg-blue">
                <div className="blog-post bg-blue p-4">
                  <div className="border-5" style={{ width: '270px', height: '368px'}}>
                    <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp" className="w-full h-auto border-5" style={{width: '270px', height: '368px', borderRadius: '20px' }} />
                  </div>
                  <div className="w-full">
                  <div className="blog-post-meta grid items-center mt-3 mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="blog-date mr-4 text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400" />
                            27 tháng 6 năm 2030
                        </div>
                        <div className="blog-author text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faUser} className="text-blue-400" />
                            Oaklee Odom
                        </div>
                   </div>
                    <h1 className="post-title text-black" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      <Link href="/blog/post1">The Top Reasons People Succeed in the Smart Product Industry.</Link>
                    </h1>
                    <p className="post-excerpt text-black mt-3 mb-3" style={{ fontSize: '14px', color: '#3a3a3a' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <Link href="/blog/post1" className="read-more text-white" style={{ backgroundColor: '#4e4e4e', padding: '7px 25px', borderRadius: '15px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s', fontSize: '16px' }} 
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3b3b3b'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4e4e4e'}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
                {/* Blog Post Item */}
              <div className="col-lg-3 col-md-6 mb-6">
                <div className="blog-post bg-white p-4" >
                  <div className="border-5" style={{ width: '270px', height: '368px'}}>
                    <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp" className="w-full h-auto border-5" style={{width: '270px', height: '368px', borderRadius: '20px' }} />
                  </div>
                  <div className="w-full">
                  <div className="blog-post-meta grid items-center mt-3 mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="blog-date mr-4 text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400" />
                            27 tháng 6 năm 2030
                        </div>
                        <div className="blog-author text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faUser} className="text-blue-400" />
                            Oaklee Odom
                        </div>
                   </div>
                    <h1 className="post-title text-black" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      <Link href="/blog/post1">The Top Reasons People Succeed in the Smart Product Industry.</Link>
                    </h1>
                    <p className="post-excerpt text-black mt-3 mb-3" style={{ fontSize: '14px', color: '#3a3a3a' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <Link href="/blog/post1" className="read-more text-white" style={{ backgroundColor: '#4e4e4e', padding: '7px 25px', borderRadius: '15px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s', fontSize: '16px' }} 
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3b3b3b'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4e4e4e'}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              {/* Blog Post Item */}
              <div className="col-lg- col-md-6 mb-6">
                <div className="blog-post bg-white p-4" >
                  <div className="border-5" style={{ width: '270px', height: '368px'}}>
                    <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp" className="w-full h-auto border-5" style={{width: '270px', height: '368px', borderRadius: '20px' }} />
                  </div>
                  <div className="w-full">
                  <div className="blog-post-meta grid items-center mt-3 mb-2" style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="blog-date mr-4 text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400" />
                            27 tháng 6 năm 2030
                        </div>
                        <div className="blog-author text-black" style={{ fontSize: '14px' }}>
                            <FontAwesomeIcon icon={faUser} className="text-blue-400" />
                            Oaklee Odom
                        </div>
                   </div>
                    <h1 className="post-title text-black" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                      <Link href="/blog/post1">The Top Reasons People Succeed in the Smart Product Industry.</Link>
                    </h1>
                    <p className="post-excerpt text-black mt-3 mb-3" style={{ fontSize: '14px', color: '#3a3a3a' }}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <Link href="/blog/post1" className="read-more text-white" style={{ backgroundColor: '#4e4e4e', padding: '7px 25px', borderRadius: '15px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s', fontSize: '16px' }} 
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3b3b3b'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4e4e4e'}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
          </div>

        </div>
        
      </div>
      {/* Blog Posts Area End */}
      

      {/* Pagination Area Start */}
      <div className="pro-pagination-style text-center mb-5">
        <div className="pages">
          <ul className="flex justify-center">
            <li className="li">
              <Link className="page-link" href="#" style={{
                border: '2px solid #e1e1e1',
                color: '#9e9e9e',
                padding: '5px 10px',
                borderRadius: '5px',
                transition: 'border-color 0.3s',
              }}>&lt;</Link>
            </li>
            <li className="li">
              <Link className="page-link active" href="#" style={{
                border: '2px solid #266BF9',
                color: '#266BF9',
                padding: '5px 10px',
                borderRadius: '5px',
                margin: '0 5px',
                fontWeight: 'bold',
              }}>1</Link>
            </li>
            <li className="li">
              <Link className="page-link" href="#" style={{
                border: '2px solid #e1e1e1',
                color: '#e1e1e1',
                padding: '5px 10px',
                borderRadius: '5px',
                margin: '0 5px',
              }}>2</Link>
            </li>
            <li className="li">
              <Link className="page-link" href="#" style={{
                border: '2px solid #e1e1e1',
                color: '#e1e1e1',
                padding: '5px 10px',
                borderRadius: '5px',
                margin: '0 5px',
              }}>3</Link>
            </li>
            <li className="li">
              <Link className="page-link" href="#" style={{
                border: '2px solid #e1e1e1',
                color: '#9e9e9e',
                padding: '5px 10px',
                borderRadius: '5px',
                margin: '0 5px',
              }}>&gt;</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Pagination Area End */}
    </div>
  );
};

export default BlogListPage;