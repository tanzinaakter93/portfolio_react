import React from 'react'
import './footer.style.css'

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <div className="container">
                <div className="icons">
                    <a href="https://www.linkedin.com/in/tanzina-akter-360a13109/" ><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/tanzinaakter93"><i class="fab fa-github"></i></a>
                    <a href="mailto: tanzinacuet@gmail.com"><i class="fas fa-envelope"></i></a>
                    <a href="tel: 6395711792"><i class="fas fa-phone"></i></a>

                </div>
                <p class="copyright">© 2021 Tanzina Akter</p>
            </div>
        </div>
    )
}

export default Footer
