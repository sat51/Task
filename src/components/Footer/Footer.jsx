import React from 'react';
import mondayLogo from "../../images/monday.jpg";
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footer__addr">
                    <h1 class="footer__logo">
                        <img className='logo' src={mondayLogo} alt="" />
                    </h1>
                    <ul className='footer__nav'>
                        <li class="nav__item">
                            <ul class="nav__ul">
                                <li>
                                    <a href="#">Pricing</a>
                                </li>
                                <li>
                                    <a href="#">Contact us</a>
                                </li>
                                <li>
                                    <a href="#">Templates</a>
                                </li>
                                <li>
                                    <a href="#">SMB</a>
                                </li>
                                <li>
                                    <a href="#">Enterprise</a>
                                </li>
                                <li>
                                    <a href="#">Nonprofits</a>
                                </li>
                                <li>
                                    <a href="#">App marketplace</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <ul class="footer__nav">
                    <li class="nav__item">
                        <h2 class="nav__title">Features</h2>
                        <ul class="nav__ul">
                            <li>
                                <a href="#">Dashboard</a>
                            </li>
                            <li>
                                <a href="#">Integrations</a>
                            </li>

                            <li>
                                <a href="#">Automations</a>
                            </li>
                            <li>
                                <a href="#">Gantt</a>
                            </li>
                            <li>
                                <a href="#">Kanban</a>
                            </li>
                            <li>
                                <a href="#">Docs</a>
                            </li>
                            <li>
                                <a href="#">Files</a>
                            </li>
                            <li>
                                <a href="#">Forms</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <h2 class="nav__title">Monday products</h2>

                        <ul class="nav__ul">
                            <li>
                                <img className='footer-buttons' src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/WM_new_logo/Footer_wm_logo.png" alt="" />
                                <a href="#">monday work management</a>
                            </li>

                            <li>
                                <img className='footer-buttons' src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/crm_icon_footer.png" alt="" />
                                <a href="#">monday sales CRM</a>
                            </li>

                            <li>
                                <img className='footer-buttons' src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/dev_new_mobile_footer_logo.png" alt="" />
                                <a href="#">monday dev</a>
                            </li>
                            <li>
                                <img className='footer-buttons' src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/workcanvas_icon_footer.png" alt="" />
                                <a href="#">workCanvas</a>
                            </li>
                            <li>
                                <img className='footer-buttons' src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/workforms_icon_footer.png" alt="" />
                                <a href="#">workForm</a>
                            </li>

                        </ul>
                    </li>



                    <li class="nav__item">
                        <h2 class="nav__title">Use Cases</h2>

                        <ul class="nav__ul">
                            <li>
                                <a href="#">marketing</a>
                            </li>

                            <li>
                                <a href="#">Project-management</a>
                            </li>

                            <li>
                                <a href="#">Sales</a>
                            </li>
                            <li>
                                <a href="#">Developers</a>
                            </li>
                            <li>
                                <a href="#">HR</a>
                            </li>
                            <li>
                                <a href="#">IT</a>
                            </li>
                            <li>
                                <a href="#">Operations</a>
                            </li>
                            <li>
                                <a href="#">Construction</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <h2 class="nav__title">Company</h2>

                        <ul class="nav__ul">
                            <li>
                                <a href="#">About us</a>
                            </li>

                            <li>
                                <a href="#">Careers - we're hiring</a>
                            </li>

                            <li>
                                <a href="#">monday-U</a>
                            </li>
                            <li>
                                <a href="#">Press</a>
                            </li>
                            <li>
                                <a href="#">Customer stories</a>
                            </li>
                            <li>
                                <a href="#">Become a partner</a>
                            </li>
                            <li>
                                <a href="#">sustainability & ESG</a>
                            </li>
                            <li>
                                <a href="#">Affiliates</a>
                            </li>
                            <li>
                                <a href="#">Digital Lift</a>
                            </li>
                            <li>
                                <a href="#">Investor relations</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav__item">
                        <h2 class="nav__title">Resuources</h2>

                        <ul class="nav__ul">
                            <li>
                                <a href="#">Help Center</a>
                            </li>

                            <li>
                                <a href="#">Community </a>
                            </li>

                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">What's new</a>
                            </li>
                            <li>
                                <a href="#">monday spaces</a>
                            </li>
                            <li>
                                <a href="#">webinars</a>
                            </li>
                            <li>
                                <a href="#">startup for startup</a>
                            </li>
                            <li>
                                <a href="#">Global events</a>
                            </li>
                            <li>
                                <a href="#">App development</a>
                            </li>
                            <li>
                                <a href="#">Find a partner</a>
                            </li>
                            <li>
                                <a href="#">Compare</a>
                            </li>
                        </ul>
                    </li>
                </ul>


            </footer>


        </>
    );
}

export default Footer;
