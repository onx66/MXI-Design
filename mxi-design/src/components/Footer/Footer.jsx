import "./Footer.css";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-text">
                    <h2>© MXI Design, 2025</h2>
                </div>
                <div className="footer-logo">
                    <img src="https://mxi-design.com/wp-content/uploads/2025/03/mxi_favicon-150x150.png" />
                </div>
                <div className="card">
                    <a href="https://www.instagram.com/mxi.design/?hl=tr" className="socialContainer containerOne">
                        <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@mxidesign7598" className="socialContainer containerTwo">
                        <svg className="socialSvg youtubeSvg largeIcon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <title>YouTube</title>
                            <path
                                fill="#FFFFFF"
                                d="M44.5,14.4c-0.5-1.9-2-3.4-3.8-3.8C37.3,9.8,24,9.8,24,9.8s-13.3,0-16.7,0.8c-1.9,0.5-3.4,1.9-3.8,3.8
            C2.7,18,2.7,24,2.7,24s0,6,0.8,9.6c0.5,1.9,2,3.4,3.8,3.8C10.7,38.2,24,38.2,24,38.2s13.3,0,16.7-0.8c1.9-0.5,3.4-1.9,3.8-3.8
            c0.8-3.6,0.8-9.6,0.8-9.6S45.3,18,44.5,14.4z M20.5,30.1v-12L31.3,24L20.5,30.1z" />
                        </svg>
                    </a>

                    <a href="https://www.facebook.com/MXIDesignStudio" className="socialContainer containerThree">
                        <div>
                            <svg className="socialSvg tiktokSvg largeIcon" width="44px" height="44px" viewBox="0 0 45 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <title>Facebook</title>
                                <g id="Icon/Social/facebook-black" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <path d="M30.0793333,40 L30.0793333,27.608 L34.239,27.608 L34.8616667,22.7783333 L30.0793333,22.7783333 L30.0793333,19.695 C30.0793333,18.2966667 30.4676667,17.344 32.4726667,17.344 L35.0303333,17.3426667 L35.0303333,13.0233333 C34.5876667,12.9646667 33.0696667,12.833 31.3036667,12.833 C27.6163333,12.833 25.0923333,15.0836667 25.0923333,19.2166667 L25.0923333,22.7783333 L20.922,22.7783333 L20.922,27.608 L25.0923333,27.608 L25.0923333,40 L30.0793333,40 Z M9.766,40 C8.79033333,40 8,39.209 8,38.234 L8,9.766 C8,8.79033333 8.79033333,8 9.766,8 L38.2336667,8 C39.209,8 40,8.79033333 40,9.766 L40,38.234 C40,39.209 39.209,40 38.2336667,40 L9.766,40 Z" id="Shape" fill="#FFFFFF" />
                                </g>
                            </svg>
                        </div>
                    </a>
                    <a href="https://x.com/mxi_design" className="socialContainer containerFour">
                        <svg className="socialSvg xSvg largeIcon"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg">

                            <title>X</title>
                            <g fill="none" fillRule="evenodd">
                                <path d="M9 12.5L20.5 26.7 9.4 39.5H14.7L23.6 29.2 31.4 39.5H39L27.1 24.8 37.4 12.5H32.1L24.4 21.8 17.7 12.5H9Z"
                                    fill="white" />
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/mxi-design/" className="socialContainer containerFive">
                        <svg className="socialSvg linkedinSvg largeIcon"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none">

                            <title>LinkedIn</title>

                            <path
                                fill="white"
                                d="M12.8 18H18.4V36H12.8V18ZM15.6 11.4C17.4 11.4 18.8 12.8 18.8 14.6C18.8 16.4 17.4 17.8 15.6 17.8C13.8 17.8 12.4 16.4 12.4 14.6C12.4 12.8 13.8 11.4 15.6 11.4ZM21.4 18H26.8V20.4H26.9C27.6 19.2 29.4 17.8 32.2 17.8C37.2 17.8 39.6 20.6 39.6 25.6V36H34V26.6C34 24 33.3 22 30.6 22C28.1 22 26.8 23.8 26.8 26.6V36H21.4V18Z"
                            />
                        </svg>
                    </a>


                </div>
            </div>

        </>
    )
}

export default Footer;