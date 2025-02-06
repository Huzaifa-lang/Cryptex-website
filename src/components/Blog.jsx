import React from 'react'
import '../CssOfComponents/Blog.css'

function Blog() {

  React.useEffect(() => {
    const items = document.querySelectorAll('.accordion button');

    const toggleAccordion = (event) => {
      const itemToggle = event.currentTarget.getAttribute('aria-expanded');

      // Reset all items' aria-expanded to false
      items.forEach(item => {
        item.setAttribute('aria-expanded', 'false');
      });

      // Toggle the clicked item's aria-expanded
      if (itemToggle === 'false') {
        event.currentTarget.setAttribute('aria-expanded', 'true');
      }
    };

    // Attach event listeners when component mounts
    items.forEach(item => {
      item.addEventListener('click', toggleAccordion);
    });

    // Clean up event listeners when component unmounts
    return () => {
      items.forEach(item => {
        item.removeEventListener('click', toggleAccordion);
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <section id='blog'>
        <div className="blog-container">
            <div className="blog-cotanier-text">
                <p className='smallest-btn'>blog</p>
                <h4 className='trade-title blog-title'>Articles and news in the cryptocurrency industry</h4>
                <p className='div-description blog-description'>Blog is designed to help you understand the world of digital currencies and get acquainted with the latest trends</p>
                <button  id='button_1'>Blog  <i class="ri-arrow-right-line"></i></button>
            </div>

            <div className="blog-container-img">
                <img src="/blog-image-en.ChlcSO_O.webp" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Blog