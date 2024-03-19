import {Link} from 'react-router-dom'
import NavMenu from './NavMenu'

const socialLinks = [
  {title: 'behance', subtitle: 'behance.net/lun2t1k', href: 'https://www.behance.net/lun2t1k'},
  {title: 'dribbble', subtitle: 'dribbble.com/lun2t1k', href: 'https://dribbble.com/lun2t1k'},
  {title: 'dprofile', subtitle: 'dprofile.ru/lun2t1k', href: 'https://dprofile.ru/lun2t1k'},
  {title: 'pinterest', subtitle: 'pinterest.com/lun2t1k', href: 'https://pinterest.com/lun2t1k/'}
]

const contactLinks = [
  {title: 'luna vk', subtitle: 'vk.com/l74u2n00a1', href: 'https://vk.com/l74u2n00a1'},
  {title: 'luna telegram', subtitle: 't.me/l74u2n00a1', href: 'https://t.me/l74u2n00a1'},
  {title: 'email', subtitle: 'lun2t1k@gmail.com', href: 'mailto:lun2t1k@gmail.com'},
  {title: 'telegram', subtitle: 't.me/lun2t1k', href: 'https://t.me/lun2t1k'}
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <>
      <NavMenu />

      <footer className='footer' id='contacts'>
        <div className='footer-left'>
          <ul>
            <li>
              <div>designed</div>
              <div>/</div>
              <div>
                figma, <br />
                adobe illustrator, <br />
                adobe photoshop
              </div>
            </li>

            <li>
              <div>developed</div>
              <div>/</div>
              <div>react, scss</div>
            </li>

            <li>
              <div>updated</div>
              <div>/</div>
              <div>19.03.2024</div>
            </li>
          </ul>

          <div className='footer-left__links'>
            <ul>
              {socialLinks.map((link, i) => {
                return (
                  <li key={`socialLinks-${i}`}>
                    <Link to={link.href} target='_blank' rel='noopener noreferrer'>
                      <span className='name'>{link.title}</span>
                      <span className='link'>{link.subtitle}</span>
                      <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18.85 18.85'>
                        <polygon
                          fill='#fff'
                          points='.71 18.85 0 18.15 17.15 1 2.27 1 2.27 0 18.85 0 18.85 16.56 17.85 16.56 17.85 1.71 .71 18.85'
                        />
                      </svg>
                    </Link>
                  </li>
                )
              })}
            </ul>

            <ul>
              {contactLinks.map((link, i) => {
                return (
                  <li key={`contactLinks-${i}`}>
                    <Link to={link.href} target='_blank' rel='noopener noreferrer'>
                      <span className='name'>{link.title}</span>
                      <span className='link'>{link.subtitle}</span>
                      <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18.85 18.85'>
                        <polygon
                          fill='#fff'
                          points='.71 18.85 0 18.15 17.15 1 2.27 1 2.27 0 18.85 0 18.85 16.56 17.85 16.56 17.85 1.71 .71 18.85'
                        />
                      </svg>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className='footer-right'>
          <div className='footer-right__top'>
            <svg width='142' height='142' viewBox='0 0 142 142' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M71 2C49.4609 2 32 19.4609 32 41C32 47.9755 33.8313 54.5233 37.0394 60.1888C38.3428 60.0639 39.6639 60 41 60C52.8442 60 63.5153 65.0223 71 73.0534C78.4847 65.0223 89.1558 60 101 60C102.336 60 103.657 60.0639 104.961 60.1888C108.169 54.5233 110 47.9755 110 41C110 19.4609 92.5391 2 71 2ZM107.101 60.4509C110.226 54.6633 112 48.0388 112 41C112 18.3563 93.6437 0 71 0C48.3563 0 30 18.3563 30 41C30 48.0388 31.7737 54.6633 34.8986 60.4509C15.1487 63.3975 0 80.4297 0 101C0 123.644 18.3563 142 41 142C52.8442 142 63.5153 136.978 71 128.947C78.4847 136.978 89.1558 142 101 142C123.644 142 142 123.644 142 101C142 80.4297 126.851 63.3975 107.101 60.4509ZM103.805 62.0993C102.879 62.0335 101.943 62 101 62C89.6651 62 79.4596 66.8356 72.3338 74.5564C73.6909 76.1628 74.9268 77.8751 76.0271 79.679C87.6806 78.1793 97.7233 71.5361 103.805 62.0993ZM77.1014 81.5491C89.3535 79.7211 99.8348 72.4724 106.027 62.321C125.192 64.7873 140 81.1643 140 101C140 122.539 122.539 140 101 140C89.6651 140 79.4596 135.164 72.3338 127.444C78.3646 120.305 82 111.077 82 101C82 93.9612 80.2263 87.3367 77.1014 81.5491ZM73.8053 79.9007C72.9469 78.5688 72.0096 77.2925 71 76.0786C69.9904 77.2925 69.0531 78.5688 68.1947 79.9007C69.1212 79.9665 70.0567 80 71 80C71.9433 80 72.8788 79.9665 73.8053 79.9007ZM67.0394 81.8112C68.3428 81.9361 69.6639 82 71 82C72.3361 82 73.6572 81.9361 74.9606 81.8112C78.1687 87.4767 80 94.0245 80 101C80 110.476 76.6201 119.164 71 125.921C65.3799 119.164 62 110.476 62 101C62 94.0245 63.8313 87.4767 67.0394 81.8112ZM65.9729 79.679C67.0732 77.8751 68.3091 76.1628 69.6662 74.5564C62.5404 66.8356 52.3349 62 41 62C40.0567 62 39.1212 62.0335 38.1947 62.0993C44.2767 71.5361 54.3194 78.1793 65.9729 79.679ZM35.9729 62.321C42.1652 72.4724 52.6465 79.7211 64.8986 81.5491C61.7737 87.3367 60 93.9612 60 101C60 111.077 63.6354 120.305 69.6662 127.444C62.5405 135.164 52.3349 140 41 140C19.4609 140 2 122.539 2 101C2 81.1643 16.8083 64.7873 35.9729 62.321Z'
                fill='white'
              />
            </svg>

            <svg width='142' height='142' viewBox='0 0 142 142' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M41 2C19.4609 2 2 19.4609 2 41C2 52.3349 6.83559 62.5404 14.5564 69.6662C20.2264 64.8762 27.2142 61.5974 34.8986 60.4509C31.7737 54.6633 30 48.0388 30 41C30 24.6818 39.5332 10.5901 53.3341 3.9906C49.4576 2.69929 45.3104 2 41 2ZM56 2.83065C51.3543 1.00349 46.2943 4.76837e-07 41 0C18.3563 -2.02656e-06 4.47035e-06 18.3563 2.5034e-06 41C1.43051e-06 52.8442 5.02227 63.5153 13.0534 71C5.02227 78.4847 0 89.1558 0 101C0 123.644 18.3563 142 41 142C46.2943 142 51.3543 140.997 56 139.169C60.6457 140.997 65.7057 142 71 142C76.2943 142 81.3542 140.997 86 139.169C90.6457 140.997 95.7057 142 101 142C123.644 142 142 123.644 142 101C142 89.1559 136.978 78.4847 128.947 71C136.978 63.5153 142 52.8442 142 41C142 18.3563 123.644 7.21216e-06 101 5.24521e-06C95.7057 4.76837e-06 90.6457 1.00349 86 2.83065C81.3542 1.0035 76.2943 1.50204e-05 71 1.50204e-05C65.7057 1.50204e-05 60.6458 1.0035 56 2.83065ZM56 4.98899C41.9063 10.8663 32 24.7763 32 41C32 47.9755 33.8313 54.5233 37.0394 60.1888C38.3428 60.0639 39.6639 60 41 60C46.2943 60 51.3542 61.0035 56 62.8306C58.8264 61.719 61.8061 60.9123 64.8986 60.4509C61.7737 54.6633 60 48.0388 60 41C60 30.923 63.6354 21.6952 69.6662 14.5564C65.882 10.4562 61.2292 7.16968 56 4.98899ZM71 13.0534C67.5126 9.31134 63.3333 6.22252 58.6659 3.9906C62.5425 2.6993 66.6896 2.00002 71 2.00002C75.3104 2.00002 79.4575 2.6993 83.3341 3.99061C78.6667 6.22252 74.4875 9.31134 71 13.0534ZM71 16.0786C65.3799 22.8365 62 31.5235 62 41C62 47.9755 63.8313 54.5233 67.0394 60.1888C68.3428 60.0639 69.6639 60 71 60C72.3361 60 73.6572 60.0639 74.9606 60.1888C78.1687 54.5233 80 47.9755 80 41C80 31.5235 76.6201 22.8365 71 16.0786ZM77.1014 60.4509C80.2263 54.6633 82 48.0388 82 41C82 30.923 78.3646 21.6952 72.3338 14.5564C76.118 10.4562 80.7708 7.16968 86 4.98899C100.094 10.8663 110 24.7763 110 41C110 47.9755 108.169 54.5233 104.961 60.1888C103.657 60.0639 102.336 60 101 60C95.7057 60 90.6457 61.0035 86 62.8306C83.1736 61.719 80.1939 60.9123 77.1014 60.4509ZM73.8053 62.0993C72.8788 62.0335 71.9433 62 71 62C70.0567 62 69.1212 62.0335 68.1947 62.0993C69.0531 63.4312 69.9904 64.7075 71 65.9214C72.0096 64.7075 72.9469 63.4312 73.8053 62.0993ZM72.3338 67.4436C73.6909 65.8372 74.9268 64.1249 76.0271 62.321C78.5459 62.6451 80.9895 63.2096 83.3341 63.9906C80.1613 65.5078 77.2141 67.421 74.5564 69.6662C73.7862 68.9553 73.0447 68.2138 72.3338 67.4436ZM69.6662 67.4436C68.3091 65.8372 67.0732 64.1249 65.9729 62.321C63.454 62.6451 61.0105 63.2096 58.6659 63.9906C61.8387 65.5078 64.7859 67.421 67.4436 69.6662C68.2138 68.9553 68.9553 68.2138 69.6662 67.4436ZM68.9466 71C69.6549 70.3399 70.3399 69.6549 71 68.9466C71.6601 69.6549 72.3451 70.3399 73.0534 71C72.3451 71.6601 71.6601 72.3451 71 73.0534C70.3399 72.3451 69.6549 71.6601 68.9466 71ZM65.9214 71C62.9541 68.5322 59.6147 66.4964 56 64.989C52.3852 66.4964 49.0459 68.5322 46.0785 71C49.0459 73.4678 52.3852 75.5036 56 77.011C59.6148 75.5036 62.9541 73.4678 65.9214 71ZM58.6659 78.0094C61.8387 76.4922 64.7859 74.579 67.4436 72.3338C68.2138 73.0447 68.9553 73.7862 69.6662 74.5564C68.3091 76.1628 67.0732 77.8751 65.9729 79.679C63.454 79.3549 61.0105 78.7904 58.6659 78.0094ZM53.334 78.0094C50.1613 76.4922 47.2141 74.579 44.5564 72.3338C42.1309 74.5723 39.9902 77.1147 38.1947 79.9007C39.1212 79.9665 40.0567 80 41 80C45.3104 80 49.4575 79.3007 53.334 78.0094ZM37.0394 81.8112C38.3428 81.9361 39.6639 82 41 82C46.2943 82 51.3542 80.9965 56 79.1694C58.8264 80.281 61.8061 81.0877 64.8986 81.5491C61.7737 87.3367 60 93.9612 60 101C60 111.077 63.6354 120.305 69.6662 127.444C65.882 131.544 61.2292 134.83 56 137.011C41.9063 131.134 32 117.224 32 101C32 94.0245 33.8313 87.4767 37.0394 81.8112ZM35.9729 79.679C37.9308 76.4693 40.3175 73.5497 43.0534 71C40.3175 68.4503 37.9308 65.5307 35.9729 62.321C28.4628 63.2875 21.6217 66.3901 16.0786 71C21.6217 75.6099 28.4628 78.7125 35.9729 79.679ZM14.5564 72.3338C20.2264 77.1238 27.2142 80.4026 34.8986 81.5491C31.7737 87.3367 30 93.9612 30 101C30 117.318 39.5332 131.41 53.3341 138.009C49.4576 139.301 45.3104 140 41 140C19.4609 140 2 122.539 2 101C2 89.6651 6.83559 79.4596 14.5564 72.3338ZM38.1947 62.0993C39.9902 64.8852 42.1309 67.4277 44.5564 69.6662C47.2141 67.421 50.1613 65.5078 53.3341 63.9906C49.4575 62.6993 45.3104 62 41 62C40.0567 62 39.1212 62.0335 38.1947 62.0993ZM58.6659 138.009C62.5425 139.301 66.6896 140 71 140C75.3104 140 79.4575 139.301 83.334 138.009C78.6667 135.777 74.4875 132.689 71 128.947C67.5125 132.689 63.3333 135.777 58.6659 138.009ZM72.3338 127.444C76.118 131.544 80.7708 134.83 86 137.011C100.094 131.134 110 117.224 110 101C110 94.0245 108.169 87.4767 104.961 81.8112C103.657 81.9361 102.336 82 101 82C95.7057 82 90.6457 80.9965 86 79.1694C83.1736 80.281 80.1939 81.0877 77.1014 81.5491C80.2263 87.3367 82 93.9612 82 101C82 111.077 78.3646 120.305 72.3338 127.444ZM76.0271 79.679C78.546 79.3549 80.9895 78.7904 83.3341 78.0094C80.1613 76.4922 77.2141 74.579 74.5564 72.3338C73.7862 73.0447 73.0447 73.7862 72.3338 74.5564C73.6909 76.1628 74.9268 77.8751 76.0271 79.679ZM71 76.0786C72.0096 77.2925 72.9469 78.5688 73.8053 79.9007C72.8788 79.9665 71.9433 80 71 80C70.0567 80 69.1212 79.9665 68.1947 79.9007C69.0531 78.5688 69.9904 77.2925 71 76.0786ZM67.0394 81.8112C68.3428 81.9361 69.6639 82 71 82C72.3361 82 73.6572 81.9361 74.9606 81.8112C78.1687 87.4767 80 94.0245 80 101C80 110.476 76.6201 119.164 71 125.921C65.3799 119.164 62 110.476 62 101C62 94.0245 63.8313 87.4767 67.0394 81.8112ZM76.0786 71C79.0459 73.4678 82.3852 75.5036 86 77.011C89.6148 75.5036 92.9541 73.4678 95.9214 71C92.9541 68.5323 89.6148 66.4964 86 64.989C82.3852 66.4964 79.0459 68.5322 76.0786 71ZM88.6659 63.9906C91.8387 65.5078 94.7859 67.421 97.4436 69.6662C99.8691 67.4277 102.01 64.8853 103.805 62.0993C102.879 62.0335 101.943 62 101 62C96.6896 62 92.5425 62.6993 88.6659 63.9906ZM106.027 62.321C104.069 65.5307 101.682 68.4503 98.9466 71C101.682 73.5498 104.069 76.4693 106.027 79.679C113.537 78.7125 120.378 75.6099 125.921 71C120.378 66.3901 113.537 63.2875 106.027 62.321ZM127.444 69.6662C135.164 62.5405 140 52.3349 140 41C140 19.4609 122.539 2.00001 101 2.00001C96.6896 2 92.5424 2.69929 88.6659 3.9906C102.467 10.5901 112 24.6818 112 41C112 48.0388 110.226 54.6633 107.101 60.4509C114.786 61.5974 121.774 64.8762 127.444 69.6662ZM127.444 72.3338C121.774 77.1238 114.786 80.4026 107.101 81.5491C110.226 87.3367 112 93.9612 112 101C112 117.318 102.467 131.41 88.6659 138.009C92.5424 139.301 96.6896 140 101 140C122.539 140 140 122.539 140 101C140 89.6651 135.164 79.4596 127.444 72.3338ZM103.805 79.9007C102.01 77.1148 99.869 74.5723 97.4436 72.3338C94.7859 74.579 91.8387 76.4922 88.6659 78.0094C92.5425 79.3007 96.6896 80 101 80C101.943 80 102.879 79.9665 103.805 79.9007Z'
                fill='white'
              />
            </svg>

            <svg width='142' height='142' viewBox='0 0 142 142' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M41 2C19.4609 2 2.00002 19.4609 2.00002 41C2.00002 45.3104 2.6993 49.4575 3.9906 53.334C9.22163 42.395 19.1598 34.1371 31.1828 31.1828C34.1372 19.1597 42.395 9.22162 53.3341 3.9906C49.4576 2.69929 45.3105 2 41 2ZM56 2.83065C51.3543 1.00349 46.2943 4.76837e-07 41 0C18.3563 -2.02656e-06 1.81794e-05 18.3563 1.62125e-05 41C1.57356e-05 46.2943 1.0035 51.3542 2.83064 56C1.00349 60.6457 7.15256e-07 65.7057 0 71C-7.15255e-07 76.2943 1.00349 81.3543 2.83065 86C1.0035 90.6457 1.37687e-05 95.7057 1.37687e-05 101C1.37687e-05 123.644 18.3563 142 41 142C46.2943 142 51.3543 140.997 56 139.169C60.6458 140.997 65.7057 142 71 142C76.2943 142 81.3542 140.997 86 139.169C90.6457 140.997 95.7057 142 101 142C123.644 142 142 123.644 142 101C142 95.7057 140.997 90.6457 139.169 86C140.996 81.3542 142 76.2943 142 71C142 65.7057 140.996 60.6458 139.169 56C140.997 51.3543 142 46.2943 142 41C142 18.3563 123.644 7.21216e-06 101 5.24521e-06C95.7057 4.76837e-06 90.6457 1.00349 86 2.83065C81.3543 1.0035 76.2943 1.50204e-05 71 1.50204e-05C65.7057 1.50204e-05 60.6458 1.0035 56 2.83065ZM56 4.98899C45.001 9.57582 36.5523 19.055 33.3723 30.7082C35.8438 30.2432 38.3935 30 41 30C48.0388 30 54.6633 31.7737 60.4509 34.8986C61.5974 27.2142 64.8762 20.2264 69.6662 14.5564C65.882 10.4562 61.2293 7.16968 56 4.98899ZM71 13.0534C67.5126 9.31134 63.3333 6.22252 58.666 3.9906C62.5425 2.6993 66.6896 2.00002 71 2.00002C75.3104 2.00002 79.4575 2.6993 83.3341 3.99061C78.6667 6.22252 74.4875 9.31134 71 13.0534ZM71 16.0786C66.3901 21.6217 63.2875 28.4628 62.321 35.9729C65.5307 37.9308 68.4502 40.3175 71 43.0534C73.5497 40.3175 76.4693 37.9308 79.679 35.9728C78.7125 28.4628 75.6099 21.6217 71 16.0786ZM81.5491 34.8986C80.4026 27.2142 77.1238 20.2264 72.3338 14.5564C76.118 10.4562 80.7708 7.16968 86 4.98899C96.9991 9.57582 105.448 19.055 108.628 30.7082C106.156 30.2432 103.607 30 101 30C93.9612 30 87.3367 31.7737 81.5491 34.8986ZM79.9007 38.1947C77.1148 39.9902 74.5723 42.1309 72.3338 44.5564C74.579 47.2141 76.4922 50.1613 78.0094 53.3341C79.3007 49.4575 80 45.3104 80 41C80 40.0567 79.9665 39.1212 79.9007 38.1947ZM79.1694 56C80.9965 51.3543 82 46.2943 82 41C82 39.6639 81.9361 38.3427 81.8112 37.0394C87.4767 33.8313 94.0245 32 101 32C103.794 32 106.52 32.2939 109.148 32.8524C109.706 35.4801 110 38.2058 110 41C110 47.9755 108.169 54.5233 104.961 60.1888C103.657 60.0639 102.336 60 101 60C95.7057 60 90.6457 61.0035 86 62.8306C84.3235 62.1713 82.5931 61.6192 80.8172 61.1828C80.3808 59.4069 79.8287 57.6765 79.1694 56ZM77.011 56C75.5036 52.3852 73.4677 49.0459 71 46.0785C68.5322 49.0459 66.4964 52.3852 64.989 56C65.5904 57.4421 66.2759 58.8405 67.0394 60.1888C68.3428 60.0639 69.6639 60 71 60C72.3361 60 73.6572 60.0639 74.9606 60.1888C75.7241 58.8405 76.4096 57.4422 77.011 56ZM77.1014 60.4509C77.4181 59.8644 77.7209 59.2692 78.0094 58.6659C78.2335 59.3387 78.4398 60.0197 78.6277 60.7082C78.1222 60.6131 77.6133 60.5273 77.1014 60.4509ZM73.8053 62.0993C72.8788 62.0335 71.9433 62 71 62C70.0567 62 69.1212 62.0335 68.1947 62.0993C69.0531 63.4312 69.9904 64.7075 71 65.9214C72.0096 64.7075 72.9469 63.4312 73.8053 62.0993ZM72.3338 67.4436C73.6909 65.8372 74.9268 64.1249 76.0271 62.321C77.0811 62.4566 78.1218 62.6343 79.1476 62.8524C79.3657 63.8782 79.5434 64.9189 79.679 65.9729C77.8751 67.0732 76.1628 68.3091 74.5564 69.6662C73.7862 68.9553 73.0447 68.2138 72.3338 67.4436ZM69.6662 67.4436C68.3091 65.8372 67.0732 64.1249 65.9729 62.321C64.9189 62.4566 63.8782 62.6343 62.8523 62.8524C62.6343 63.8782 62.4566 64.9189 62.321 65.9728C64.1249 67.0732 65.8372 68.3091 67.4436 69.6662C68.2138 68.9553 68.9553 68.2138 69.6662 67.4436ZM68.9466 71C69.6549 70.3399 70.3399 69.6549 71 68.9466C71.6601 69.6549 72.3451 70.3399 73.0534 71C72.3451 71.6601 71.6601 72.3451 71 73.0534C70.3399 72.3451 69.6549 71.6601 68.9466 71ZM65.9214 71C64.7075 69.9904 63.4312 69.0531 62.0993 68.1947C62.0335 69.1212 62 70.0567 62 71C62 71.9433 62.0335 72.8788 62.0993 73.8053C63.4312 72.9469 64.7075 72.0096 65.9214 71ZM62.321 76.0272C64.1249 74.9268 65.8372 73.6909 67.4436 72.3338C68.2138 73.0447 68.9553 73.7862 69.6662 74.5564C68.3091 76.1628 67.0732 77.8751 65.9729 79.679C64.9189 79.5434 63.8782 79.3657 62.8523 79.1476C62.6343 78.1218 62.4566 77.0811 62.321 76.0272ZM60.1888 74.9606C60.0639 73.6572 60 72.3361 60 71C60 69.6639 60.0639 68.3427 60.1888 67.0394C58.8405 66.2759 57.4422 65.5904 56 64.989C52.3852 66.4964 49.0459 68.5322 46.0786 71C49.0459 73.4678 52.3852 75.5036 56 77.011C57.4422 76.4096 58.8405 75.7241 60.1888 74.9606ZM58.6659 78.0094C59.2692 77.7209 59.8643 77.4181 60.4509 77.1014C60.5273 77.6133 60.6131 78.1222 60.7082 78.6277C60.0197 78.4398 59.3387 78.2335 58.6659 78.0094ZM53.3341 78.0094C50.1613 76.4922 47.2141 74.579 44.5564 72.3338C42.1309 74.5723 39.9902 77.1147 38.1947 79.9007C39.1213 79.9665 40.0567 80 41 80C45.3104 80 49.4575 79.3007 53.3341 78.0094ZM37.0394 81.8112C38.3428 81.9361 39.6639 82 41 82C46.2943 82 51.3543 80.9965 56 79.1694C57.6765 79.8287 59.4069 80.3808 61.1828 80.8172C61.6192 82.5931 62.1713 84.3235 62.8306 86C61.0035 90.6458 60 95.7057 60 101C60 102.336 60.0639 103.657 60.1888 104.961C54.5233 108.169 47.9755 110 41 110C38.2057 110 35.4801 109.706 32.8524 109.148C32.2939 106.52 32 103.794 32 101C32 94.0245 33.8313 87.4767 37.0394 81.8112ZM35.9729 79.679C37.9308 76.4693 40.3175 73.5497 43.0534 71C40.3175 68.4503 37.9308 65.5307 35.9729 62.321C28.4628 63.2875 21.6217 66.3901 16.0786 71C21.6217 75.6099 28.4628 78.7125 35.9729 79.679ZM14.5564 72.3338C20.2264 77.1238 27.2142 80.4026 34.8986 81.5491C31.7737 87.3367 30 93.9612 30 101C30 103.607 30.2432 106.156 30.7082 108.628C19.055 105.448 9.57584 96.9991 4.98899 86C7.16969 80.7708 10.4562 76.118 14.5564 72.3338ZM14.5564 69.6662C20.2264 64.8762 27.2142 61.5974 34.8986 60.4509C31.7737 54.6633 30 48.0388 30 41C30 38.3935 30.2432 35.8437 30.7082 33.3723C19.055 36.5522 9.57583 45.0009 4.98899 56C7.16968 61.2292 10.4562 65.882 14.5564 69.6662ZM3.9906 58.6659C6.22251 63.3333 9.31134 67.5125 13.0534 71C9.31135 74.4875 6.22252 78.6667 3.99061 83.3341C2.69929 79.4576 2 75.3104 2 71C2 66.6895 2.69929 62.5424 3.9906 58.6659ZM32.8524 32.8524C32.2939 35.4801 32 38.2057 32 41C32 47.9755 33.8313 54.5233 37.0394 60.1888C38.3428 60.0639 39.6639 60 41 60C46.2943 60 51.3543 61.0035 56 62.8306C57.6765 62.1713 59.4069 61.6192 61.1828 61.1828C61.6192 59.4069 62.1713 57.6764 62.8306 56C61.0035 51.3542 60 46.2943 60 41C60 39.6639 60.0639 38.3428 60.1888 37.0394C54.5233 33.8313 47.9755 32 41 32C38.2058 32 35.4801 32.2938 32.8524 32.8524ZM62.0994 38.1947C62.0335 39.1212 62 40.0567 62 41C62 45.3104 62.6993 49.4575 63.9906 53.334C65.5078 50.1613 67.421 47.214 69.6662 44.5564C67.4277 42.1309 64.8852 39.9902 62.0994 38.1947ZM63.9906 58.6659C63.7665 59.3387 63.5602 60.0197 63.3723 60.7082C63.8778 60.6131 64.3867 60.5273 64.8986 60.4509C64.5819 59.8643 64.2791 59.2692 63.9906 58.6659ZM60.7082 63.3723C60.0197 63.5602 59.3387 63.7665 58.6659 63.9906C59.2692 64.2791 59.8643 64.5819 60.4509 64.8986C60.5273 64.3867 60.6131 63.8778 60.7082 63.3723ZM53.3341 63.9906C49.4575 62.6993 45.3104 62 41 62C40.0567 62 39.1213 62.0335 38.1947 62.0993C39.9902 64.8852 42.1309 67.4277 44.5564 69.6662C47.2141 67.421 50.1613 65.5078 53.3341 63.9906ZM3.99061 88.6659C2.6993 92.5425 2.00001 96.6896 2.00001 101C2.00001 122.539 19.4609 140 41 140C45.3104 140 49.4576 139.301 53.3341 138.009C42.395 132.778 34.1372 122.84 31.1828 110.817C19.1598 107.863 9.22164 99.605 3.99061 88.6659ZM33.3723 111.292C36.5522 122.945 45.0009 132.424 56 137.011C61.2292 134.83 65.882 131.544 69.6662 127.444C64.8762 121.774 61.5974 114.786 60.4509 107.101C54.6633 110.226 48.0388 112 41 112C38.3935 112 35.8438 111.757 33.3723 111.292ZM62.321 106.027C63.2875 113.537 66.3901 120.378 71 125.921C75.6099 120.378 78.7125 113.537 79.679 106.027C76.4693 104.069 73.5497 101.682 71 98.9466C68.4502 101.682 65.5307 104.069 62.321 106.027ZM72.3338 97.4436C74.5723 99.8691 77.1148 102.01 79.9007 103.805C79.9665 102.879 80 101.943 80 101C80 96.6896 79.3007 92.5424 78.0094 88.6659C76.4922 91.8387 74.579 94.7859 72.3338 97.4436ZM77.011 86C75.5036 89.6147 73.4677 92.9541 71 95.9214C68.5322 92.9541 66.4964 89.6148 64.989 86C65.5904 84.5579 66.2759 83.1595 67.0394 81.8112C68.3428 81.9361 69.6639 82 71 82C72.3361 82 73.6573 81.9361 74.9606 81.8112C75.7241 83.1595 76.4096 84.5578 77.011 86ZM79.1694 86C80.9965 90.6457 82 95.7057 82 101C82 102.336 81.9361 103.657 81.8112 104.961C87.4767 108.169 94.0245 110 101 110C103.794 110 106.52 109.706 109.148 109.148C109.706 106.52 110 103.794 110 101C110 94.0245 108.169 87.4767 104.961 81.8112C103.657 81.9361 102.336 82 101 82C95.7057 82 90.6457 80.9965 86 79.1694C84.3235 79.8287 82.5931 80.3808 80.8172 80.8172C80.3808 82.5931 79.8287 84.3235 79.1694 86ZM78.6277 81.2918C78.4398 81.9803 78.2335 82.6613 78.0094 83.334C77.7209 82.7308 77.4181 82.1356 77.1014 81.5491C77.6133 81.4727 78.1221 81.3869 78.6277 81.2918ZM81.2918 78.6277C81.9803 78.4398 82.6613 78.2335 83.3341 78.0094C82.7308 77.7209 82.1356 77.4181 81.5491 77.1014C81.4727 77.6133 81.3869 78.1222 81.2918 78.6277ZM79.679 76.0271C79.5434 77.0811 79.3657 78.1218 79.1476 79.1476C78.1218 79.3657 77.0811 79.5434 76.0272 79.679C74.9268 77.8751 73.6909 76.1628 72.3338 74.5564C73.0447 73.7862 73.7862 73.0447 74.5564 72.3338C76.1628 73.6909 77.8751 74.9267 79.679 76.0271ZM81.8112 74.9606C83.1595 75.7241 84.5578 76.4096 86 77.011C89.6148 75.5036 92.9541 73.4678 95.9214 71C92.9541 68.5322 89.6148 66.4964 86 64.989C84.5578 65.5904 83.1595 66.2759 81.8112 67.0394C81.9361 68.3428 82 69.6639 82 71C82 72.3361 81.9361 73.6572 81.8112 74.9606ZM79.9007 68.1947C79.9665 69.1212 80 70.0567 80 71C80 71.9433 79.9665 72.8787 79.9007 73.8053C78.5688 72.9469 77.2925 72.0096 76.0786 71C77.2925 69.9904 78.5688 69.0531 79.9007 68.1947ZM81.5491 64.8986C82.1356 64.5819 82.7308 64.2791 83.3341 63.9906C82.6613 63.7665 81.9803 63.5602 81.2918 63.3723C81.3869 63.8778 81.4727 64.3867 81.5491 64.8986ZM88.6659 63.9906C91.8387 65.5078 94.7859 67.421 97.4436 69.6662C99.8691 67.4277 102.01 64.8853 103.805 62.0993C102.879 62.0335 101.943 62 101 62C96.6896 62 92.5425 62.6993 88.6659 63.9906ZM106.027 62.321C104.069 65.5307 101.683 68.4503 98.9466 71C101.683 73.5498 104.069 76.4693 106.027 79.679C113.537 78.7125 120.378 75.6099 125.921 71C120.378 66.3901 113.537 63.2875 106.027 62.321ZM127.444 72.3338C121.774 77.1238 114.786 80.4026 107.101 81.5491C110.226 87.3367 112 93.9612 112 101C112 103.607 111.757 106.156 111.292 108.628C122.945 105.448 132.424 96.999 137.011 86C134.83 80.7708 131.544 76.118 127.444 72.3338ZM138.009 83.334C135.777 78.6667 132.689 74.4874 128.947 71C132.689 67.5126 135.777 63.3333 138.009 58.666C139.301 62.5425 140 66.6896 140 71C140 75.3104 139.301 79.4575 138.009 83.334ZM137.011 56C134.83 61.2292 131.544 65.882 127.444 69.6662C121.774 64.8762 114.786 61.5974 107.101 60.4509C110.226 54.6633 112 48.0388 112 41C112 38.3935 111.757 35.8438 111.292 33.3723C122.945 36.5522 132.424 45.0009 137.011 56ZM138.009 53.3341C139.301 49.4576 140 45.3105 140 41C140 19.4609 122.539 2.00001 101 2.00001C96.6896 2 92.5425 2.69929 88.6659 3.9906C99.605 9.22163 107.863 19.1598 110.817 31.1828C122.84 34.1372 132.778 42.395 138.009 53.3341ZM138.009 88.6659C132.778 99.605 122.84 107.863 110.817 110.817C107.863 122.84 99.605 132.778 88.6659 138.009C92.5424 139.301 96.6896 140 101 140C122.539 140 140 122.539 140 101C140 96.6896 139.301 92.5424 138.009 88.6659ZM86 137.011C96.9991 132.424 105.448 122.945 108.628 111.292C106.156 111.757 103.607 112 101 112C93.9612 112 87.3367 110.226 81.5491 107.101C80.4026 114.786 77.1238 121.774 72.3338 127.444C76.118 131.544 80.7708 134.83 86 137.011ZM71 128.947C67.5126 132.689 63.3333 135.777 58.666 138.009C62.5425 139.301 66.6896 140 71 140C75.3104 140 79.4575 139.301 83.3341 138.009C78.6667 135.777 74.4875 132.689 71 128.947ZM103.805 79.9007C102.01 77.1148 99.8691 74.5723 97.4436 72.3338C94.7859 74.579 91.8387 76.4922 88.6659 78.0094C92.5425 79.3007 96.6896 80 101 80C101.943 80 102.879 79.9665 103.805 79.9007ZM71 76.0786C69.9904 77.2925 69.0531 78.5688 68.1947 79.9007C69.1212 79.9665 70.0567 80 71 80C71.9433 80 72.8788 79.9665 73.8053 79.9007C72.9469 78.5688 72.0096 77.2925 71 76.0786ZM64.8986 81.5491C64.3867 81.4727 63.8778 81.3869 63.3723 81.2918C63.5602 81.9803 63.7665 82.6613 63.9906 83.3341C64.2791 82.7308 64.5819 82.1357 64.8986 81.5491ZM63.9906 88.666C65.5078 91.8387 67.421 94.7859 69.6662 97.4436C67.4277 99.869 64.8852 102.01 62.0993 103.805C62.0335 102.879 62 101.943 62 101C62 96.6896 62.6993 92.5425 63.9906 88.666Z'
                fill='white'
              />
            </svg>
          </div>

          <div className='footer-right__bottom' onClick={() => scrollToTop()}>
            <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200' fill='none' className='text'>
              <path
                d='M47.1489 38.0938L37.5991 48.3846L23.6167 35.4073L22.4769 36.6345L37.6866 50.7485L48.3762 39.2335L47.1489 38.0938Z'
                fill='white'
              />
              <path
                d='M49.323 33.8394C50.5473 34.4575 51.856 34.7681 53.2189 34.7681C53.3365 34.7681 53.4542 34.7681 53.5718 34.762C55.0644 34.7047 56.4665 34.2585 57.739 33.4414C59.0115 32.6213 60.0006 31.5328 60.67 30.2001C61.3394 28.8704 61.65 27.4412 61.5927 25.9517C61.5354 24.4592 61.0892 23.0571 60.272 21.7847L53.3788 11.0627L51.9706 11.9673L58.8638 22.6892C59.5212 23.7084 59.877 24.833 59.9222 26.024C59.9674 27.218 59.7202 28.3668 59.1804 29.4372C58.6437 30.5046 57.8536 31.376 56.8314 32.0333C55.8122 32.6906 54.6875 33.0464 53.4964 33.0916C52.2992 33.1368 51.1534 32.8896 50.0829 32.3499C49.0155 31.8132 48.144 31.0232 47.4867 30.0011L40.5904 19.2791L39.1822 20.1836L46.0754 30.9056C46.8956 32.181 47.9842 33.167 49.317 33.8364L49.323 33.8394Z'
                fill='white'
              />
              <path
                d='M83.8706 21.7937L77.4508 2.06238L75.8586 2.581L79.9596 15.1814L62.8833 6.80225L61.4058 7.28468L67.8286 27.013L69.4207 26.4974L63.7427 9.05459L80.6863 17.4127L82.2815 22.3123L83.8706 21.7937Z'
                fill='white'
              />
              <path
                d='M94.8225 0L93.2907 0.0934706L86.0326 21.3203L87.8087 21.2118L90.1517 14.4005L99.6593 13.8246L102.777 20.3042L104.583 20.1957L94.8225 0ZM98.8843 12.2235L90.7367 12.718L94.1953 2.52974L98.8843 12.2235Z'
                fill='white'
              />
              <path
                d='M143.368 30.776L130.706 24.7124L138.947 7.5078L137.436 6.78416L128.471 25.4964L142.644 32.2866L143.368 30.776Z'
                fill='white'
              />
              <path
                d='M150.897 39.5411C152.055 40.518 153.388 41.1422 154.859 41.3924C155.354 41.4768 155.845 41.519 156.334 41.519C157.302 41.519 158.258 41.3562 159.189 41.0276C160.598 40.5331 161.807 39.6979 162.784 38.5401L171.013 28.801L169.734 27.7216L161.505 37.4606C160.721 38.3863 159.753 39.0587 158.626 39.4506C157.498 39.8456 156.325 39.9451 155.146 39.7431C153.97 39.5411 152.902 39.0436 151.977 38.2596C151.048 37.4757 150.378 36.5078 149.986 35.3801C149.591 34.2494 149.492 33.0796 149.694 31.9006C149.896 30.7247 150.394 29.6573 151.178 28.7317L159.407 18.9926L158.128 17.9132L149.899 27.6522C148.922 28.8101 148.298 30.1428 148.048 31.6112C147.797 33.0796 147.918 34.5359 148.412 35.944C148.907 37.3521 149.742 38.5612 150.9 39.5381L150.897 39.5411Z'
                fill='white'
              />
              <path
                d='M161.008 48.6741L175.949 38.0335L173.051 56.7005L168.854 59.6885L169.825 61.0514L186.726 49.0148L185.755 47.6519L174.96 55.3376L177.84 36.538L176.938 35.2746L160.037 47.3112L161.008 48.6741Z'
                fill='white'
              />
              <path
                d='M171.568 64.6304L178.768 64.8415L182.146 73.7453L176.887 78.651L177.529 80.3425L193.906 65.0103L193.363 63.5781L170.937 62.966L171.568 64.6304ZM183.442 72.5242L180.548 64.8927L191.304 65.1641L183.442 72.5242Z'
                fill='white'
              />
              <path
                d='M179.758 104.787L179.459 104.741L177.222 120.294L178.877 120.532L180.879 106.638L199.759 109.355L200 107.699L179.758 104.787Z'
                fill='white'
              />
              <path
                d='M179.492 125.257C178.015 125.456 176.661 126.007 175.467 126.894C174.27 127.786 173.365 128.944 172.774 130.34C172.186 131.736 171.99 133.193 172.186 134.673C172.385 136.148 172.934 137.504 173.823 138.698C174.713 139.895 175.874 140.8 177.27 141.388L189.018 146.339L189.669 144.795L177.921 139.844C176.802 139.374 175.874 138.647 175.162 137.691C174.447 136.732 174.004 135.644 173.844 134.456C173.685 133.271 173.844 132.104 174.315 130.989C174.785 129.87 175.512 128.941 176.468 128.23C177.43 127.515 178.515 127.072 179.703 126.912C180.885 126.752 182.052 126.912 183.171 127.382L194.919 132.333L195.57 130.79L183.822 125.839C182.426 125.251 180.97 125.052 179.489 125.251L179.492 125.257Z'
                fill='white'
              />
              <path
                d='M167.051 142.672L181.603 153.841L162.904 156.536L158.819 153.4L157.799 154.727L174.26 167.361L175.28 166.031L164.768 157.965L183.587 155.209L184.531 153.976L168.07 141.343L167.051 142.672Z'
                fill='white'
              />
              <path
                d='M154.877 157.468L156.828 164.403L149.338 170.288L143.084 166.733L141.661 167.852L161.186 178.9L162.392 177.953L156.277 156.37L154.877 157.471V157.468ZM160.266 176.46L150.891 171.16L157.308 166.118L160.263 176.463L160.266 176.46Z'
                fill='white'
              />
              <path
                d='M103.456 179.37L103.715 181.025L117.586 178.864L120.52 197.714L122.175 197.455L118.982 176.955L103.456 179.37Z'
                fill='white'
              />
              <path
                d='M96.6077 179.648C95.3985 178.77 94.0235 178.251 92.5157 178.107C91.008 177.962 89.5576 178.209 88.2067 178.839C86.8588 179.47 85.7281 180.398 84.8536 181.604C83.9761 182.81 83.4575 184.188 83.3127 185.696L82.0915 198.387L83.759 198.547L84.9803 185.856C85.0948 184.65 85.511 183.546 86.2135 182.581C86.9161 181.613 87.8238 180.866 88.9093 180.359C89.9919 179.856 91.1528 179.657 92.3589 179.774C93.5681 179.892 94.6688 180.305 95.6337 181.007C96.6016 181.71 97.3494 182.617 97.856 183.703C98.3596 184.785 98.5586 185.946 98.441 187.152L97.2198 199.84L98.8873 200L100.109 187.312C100.253 185.805 100.006 184.354 99.3758 183.003C98.7456 181.653 97.8168 180.525 96.6107 179.651L96.6077 179.648Z'
                fill='white'
              />
              <path
                d='M72.7226 193.569L64.5569 176.533L66.3269 171.693L64.7559 171.118L57.6214 190.605L59.1955 191.178L63.7518 178.737L72.008 195.869L73.4674 196.403L80.5989 176.919L79.0278 176.343L72.7226 193.569Z'
                fill='white'
              />
              <path
                d='M61.3063 169.149L55.2483 173.047L47.4263 167.614L48.9913 160.595L47.5047 159.56L42.665 181.466L43.9255 182.34L62.7687 170.168L61.3063 169.152V169.149ZM53.7497 174.009L44.7245 179.868L47.0464 169.351L53.7497 174.009Z'
                fill='white'
              />
              <path
                d='M23.5745 127.241L29.7862 139.832L12.6798 148.272L13.4216 149.773L32.0297 140.592L25.0761 126.502L23.5745 127.241Z'
                fill='white'
              />
              <path
                d='M20.4083 123.692C21.5149 122.694 22.3201 121.473 22.8025 120.065C23.288 118.653 23.3785 117.185 23.0739 115.702C22.7694 114.218 22.109 112.903 21.1109 111.797C20.1128 110.69 18.8915 109.885 17.4833 109.403C16.0721 108.917 14.6036 108.827 13.12 109.131L0.63022 111.685L0.964931 113.326L13.4548 110.772C14.6428 110.528 15.8188 110.603 16.9466 110.989C18.0774 111.378 19.0604 112.023 19.8625 112.913C20.6616 113.799 21.1923 114.851 21.4335 116.039C21.6778 117.227 21.6024 118.403 21.2164 119.531C20.8274 120.662 20.1791 121.644 19.2926 122.447C18.4061 123.246 17.3537 123.776 16.1656 124.017L3.67578 126.571L4.01049 128.212L16.5003 125.655C17.9839 125.35 19.2986 124.69 20.4053 123.692H20.4083Z'
                fill='white'
              />
              <path
                d='M20.8093 102.272L2.48771 101.352L16.3405 88.5076L21.4878 88.7669L21.5692 87.0965L0.844314 86.0563L0.762898 87.7267L13.9975 88.39L0.0784006 101.355L0 102.905L20.7249 103.945L20.8093 102.272Z'
                fill='white'
              />
              <path
                d='M22.3954 83.1949L16.8622 78.5847L19.7057 69.4939L26.8733 68.8848L27.4131 67.1571L5.06287 69.1019L4.60453 70.5643L21.8647 84.8924L22.3954 83.1919V83.1949ZM17.9326 69.6537L15.4962 77.4419L7.20381 70.5884L17.9326 69.6537Z'
                fill='white'
              />
            </svg>

            <svg xmlns='http://www.w3.org/2000/svg' width='154' height='154' viewBox='0 0 154 154' fill='none' className='moon'>
              <path
                d='M77.19 153.195C56.7727 153.195 37.5766 145.244 23.1388 130.808C8.70102 116.371 0.74939 97.1763 0.74939 76.7605C0.74939 56.3447 8.70102 37.1501 23.1388 22.7134C37.5766 8.27672 56.7727 0.325684 77.19 0.325684C97.6073 0.325684 116.803 8.27672 131.241 22.7134C145.679 37.1501 153.631 56.3447 153.631 76.7605C153.631 97.1763 145.679 116.371 131.241 130.808C116.803 145.244 97.6073 153.195 77.19 153.195ZM77.19 2.43631C57.3366 2.43631 38.6712 10.1672 24.6314 24.2059C10.5917 38.2446 2.86018 56.9086 2.86018 76.7605C2.86018 96.6125 10.5917 115.276 24.6314 129.315C38.6712 143.354 57.3366 151.085 77.19 151.085C97.0435 151.085 115.709 143.354 129.749 129.315C143.788 115.276 151.52 96.6125 151.52 76.7605C151.52 56.9086 143.788 38.2446 129.749 24.2059C115.709 10.1672 97.0435 2.43631 77.19 2.43631Z'
                fill='white'
              />
              <path
                d='M35.7945 59.2333C29.7727 59.2333 24.8727 54.3336 24.8727 48.3123C24.8727 42.291 29.7727 37.3913 35.7945 37.3913C41.8162 37.3913 46.7163 42.291 46.7163 48.3123C46.7163 54.3336 41.8162 59.2333 35.7945 59.2333ZM35.7945 39.4989C30.9366 39.4989 26.9834 43.4518 26.9834 48.3093C26.9834 53.1667 30.9366 57.1196 35.7945 57.1196C40.6523 57.1196 44.6055 53.1667 44.6055 48.3093C44.6055 43.4518 40.6523 39.4989 35.7945 39.4989Z'
                fill='white'
              />
              <path
                d='M100.828 135.493C94.806 135.493 89.906 130.594 89.906 124.572C89.906 118.551 94.806 113.648 100.828 113.648C106.85 113.648 111.75 118.548 111.75 124.572C111.75 130.597 106.85 135.493 100.828 135.493ZM100.828 115.759C95.97 115.759 92.0168 119.712 92.0168 124.572C92.0168 129.433 95.97 133.383 100.828 133.383C105.686 133.383 109.639 129.43 109.639 124.572C109.639 119.715 105.686 115.759 100.828 115.759Z'
                fill='white'
              />
              <path
                d='M79.7923 98.8648C75.4833 98.8648 71.9764 95.3582 71.9764 91.0495C71.9764 86.7408 75.4833 83.2341 79.7923 83.2341C84.1013 83.2341 87.6082 86.7408 87.6082 91.0495C87.6082 95.3582 84.1013 98.8648 79.7923 98.8648ZM79.7923 85.3447C76.6472 85.3447 74.0871 87.9046 74.0871 91.0495C74.0871 94.1943 76.6472 96.7542 79.7923 96.7542C82.9374 96.7542 85.4974 94.1943 85.4974 91.0495C85.4974 87.9046 82.9374 85.3447 79.7923 85.3447Z'
                fill='white'
              />
              <path
                d='M90.9614 71.0558C76.4361 71.0558 64.6188 59.2393 64.6188 44.7152C64.6188 30.1911 76.4361 18.3746 90.9614 18.3746C105.487 18.3746 117.304 30.1911 117.304 44.7152C117.304 59.2393 105.487 71.0558 90.9614 71.0558ZM90.9614 20.4852C77.6001 20.4852 66.7295 31.3549 66.7295 44.7152C66.7295 58.0755 77.6001 68.9452 90.9614 68.9452C104.323 68.9452 115.193 58.0755 115.193 44.7152C115.193 31.3549 104.323 20.4852 90.9614 20.4852Z'
                fill='white'
              />
              <path
                d='M43.0495 130.88C34.13 130.88 26.8719 123.622 26.8719 114.704C26.8719 105.785 34.13 98.5271 43.0495 98.5271C51.9691 98.5271 59.2272 105.785 59.2272 114.704C59.2272 123.622 51.9691 130.88 43.0495 130.88ZM43.0495 100.638C35.2939 100.638 28.9827 106.949 28.9827 114.704C28.9827 122.459 35.2939 128.769 43.0495 128.769C50.8052 128.769 57.1164 122.459 57.1164 114.704C57.1164 106.949 50.8052 100.638 43.0495 100.638Z'
                fill='white'
              />
              <path
                d='M123.603 100.638C115.905 100.638 109.642 94.3752 109.642 86.6775C109.642 78.9797 115.905 72.7172 123.603 72.7172C131.302 72.7172 137.564 78.9797 137.564 86.6775C137.564 94.3752 131.302 100.638 123.603 100.638ZM123.603 74.8248C117.069 74.8248 111.753 80.1406 111.753 86.6745C111.753 93.2084 117.069 98.5241 123.603 98.5241C130.138 98.5241 135.454 93.2084 135.454 86.6745C135.454 80.1406 130.138 74.8248 123.603 74.8248Z'
                fill='white'
              />
            </svg>
          </div>
        </div>
      </footer>
    </>
  )
}
