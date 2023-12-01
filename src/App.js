import React from 'react'


const CartConent = (prop)=>{
  return (
    <div className='absolute top-20 z-10 left-0 right-0 m-auto w-11/12 rounded-xl bg-white sm:left-auto sm:right-0 sm:w-auto shadow-2xl'>
      <div className='text-2xl kumbhS p-5 border-b'>Cart</div>
      {prop.count === 0 ? 
        <div className='sm:min-w-[394px] sm:min-h-[168px] grid place-content-center kumbhS text-GB text-xl'>No items in the cart</div> 
        :
        <div className='flex flex-col gap-3 p-5 sm:min-w-[394px] sm:min-h-[168px]'>
          <div className='flex items-center text-DGB kumbhS gap-3'>
            <span className=''><img src='/images/image-product-1-thumbnail.jpg' className='aspect-square w-16'/></span> 
            <div className='flex items-center gap-8'>
              <p className='flex flex-col'>Fall Limited Edition Sneakers
                <span>$125.00 x {prop.count} <span className='kumbhB text-black'> ${' ' + 125*prop.count}</span></span>
              </p>
              <span onClick={prop.clearCart}><img src='/images/icon-delete.svg' alt='delete icon'/></span>
            </div>
          </div>
          <button className='p-3 bg-O text-lg text-white rounded-xl kumbhS'>Checkout</button>
        </div>
      }

      
    </div>
  )
}

const Lightbox = (prop)=>{

  const [focusedIndex, setFocusedIndex] = React.useState(1);
  const focusedStyling = 'border-4 border-O opacity-75';

  const changeFocus = (operation)=>{
    if(operation === '+') {
      setFocusedIndex(prev => {
        if(prev < 4) {
          return prev+1;
        } else {
          return 1
        }
      });
    } else if (operation === '-') {
      setFocusedIndex(prev => {
        if(prev < 2) {
          return 4;
        } else {
          return prev - 1;
        };
      })
    };
  }

  return (
    <div className='w-screen h-screen overlayD absolute top-0 flex justify-center items-center z-10 flex-col gap-4'>
      <div className='relative'>
        <span className='flex justify-end mb-3' onClick={prop.closeLightbox}><img src='images/icon-close.svg' alt='close menu' className='grayscale invert brightness-0 icon cursor-pointer'/></span>
        <div className={`w-[400px] ${focusedIndex === 1 ? 'block' : 'hidden'} `}  ><img src='/images/image-product-1.jpg' /></div>
        <div className={`w-[400px] ${focusedIndex === 2 ? 'block' : 'hidden'} `}  ><img src='/images/image-product-2.jpg' /></div>
        <div className={`w-[400px] ${focusedIndex === 3 ? 'block' : 'hidden'} `}  ><img src='/images/image-product-3.jpg' /></div>
        <div className={`w-[400px] ${focusedIndex === 4 ? 'block' : 'hidden'} `}  ><img src='/images/image-product-4.jpg' /></div>
        <span className='absolute w-10 h-10 flex justify-center items-center bg-white rounded-full top-1/2 -left-5 pr-1 cursor-pointer' onClick={()=>{changeFocus('-')}}><img src='/images/icon-previous.svg' className='icon cursor-pointer'/></span>
        <span className='absolute w-10 h-10 flex justify-center items-center bg-white rounded-full top-1/2 -right-5 pl-1 cursor-pointer' onClick={()=>{changeFocus('+')}}><img src='/images/icon-next.svg' className='icon cursor-pointer'/></span>

      </div>
      <div className='flex gap-4'>
        <div className={`w-[80px] bg-white rounded-xl cursor-pointer`} onClick={()=>{setFocusedIndex(1)}}><img src='/images/image-product-1-thumbnail.jpg' className={` rounded-xl ${focusedIndex === 1 ? focusedStyling : ''}`}/></div>
        <div className={`w-[80px] bg-white rounded-xl cursor-pointer`} onClick={()=>{setFocusedIndex(2)}}><img src='/images/image-product-2-thumbnail.jpg' className={` rounded-xl ${focusedIndex === 2 ? focusedStyling : ''}`}/></div>
        <div className={`w-[80px] bg-white rounded-xl cursor-pointer`} onClick={()=>{setFocusedIndex(3)}}><img src='/images/image-product-3-thumbnail.jpg' className={` rounded-xl ${focusedIndex === 3 ? focusedStyling : ''}`}/></div>
        <div className={`w-[80px] bg-white rounded-xl cursor-pointer`} onClick={()=>{setFocusedIndex(4)}}><img src='/images/image-product-4-thumbnail.jpg' className={` rounded-xl ${focusedIndex === 4 ? focusedStyling : ''}`}/></div>
      </div>
    </div>
  )
}

export default function App() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [focusedIndex, setFocusedIndex] = React.useState(0);
  const [itemsInCart, setItmesInCart] = React.useState(0);
  const parentRef = React.useRef(null);
  const focusedStyling = 'border-4 border-O opacity-50'

  const toggle = (param)=>{
    switch(param) {
      case 'menu':
        setIsMenuOpen(prev => !prev);
        break;
      case 'cart': 
        setIsCartOpen(prev => !prev);
        break;
      case 'Lightbox': 
        if(window.innerWidth > 780) {
          setIsLightboxOpen(prev => !prev);
        } else {
          console.log('window width needs to be greater than 780px to view lightbox');
        }
        break;
    }
  }

  const cartEdit = (operation) => {
    if(operation === '-') {
      setItmesInCart(prev => {
        if(prev > 0) {
          return prev - 1;
        } else {
          return 0;
        }
      })
    } else if(operation === '+') {
      setItmesInCart(prev => prev+1)
    }
  }

  const scrollRight = ()=>{
    if(parentRef.current) {
      parentRef.current.scrollLeft -= parentRef.current.clientWidth;
    }
  }

  const scrollLeft = ()=>{
    if(parentRef.current) {
      parentRef.current.scrollLeft += parentRef.current.clientWidth;
    }
  }

  const shiftFocus =(index) => {
    setFocusedIndex(index);
  }

  return (
    <div>
      <header>
        <nav className='flex justify-between p-5 sm:p-5 sm:border-b max-w-6xl sm:m-auto'>
          <div className='flex items-center gap-4 md:gap-8'>
            <img src="/images/icon-menu.svg" alt='logo' className='pt-1 sm:hidden' onClick={()=>{toggle('menu')}}/>
            <img src='/images/logo.svg' alt="logo" />
            <ul className='hidden sm:flex gap-2 md:gap-5 text-DGB kumbhS sm:relative'>
              <li className='cursor-pointer hover:text-VDB'>Collections</li>
              <li className='cursor-pointer hover:text-VDB'>Men</li>
              <li className='cursor-pointer hover:text-VDB'>Women</li>
              <li className='cursor-pointer hover:text-VDB'>About</li>
              <li className='cursor-pointer hover:text-VDB'>Contact</li>
            </ul>
          </div>
          <div className='flex items-center gap-2 sm:gap-4 sm:relative'>
            <img src='/images/icon-cart.svg' alt='cart icon' onClick={()=>{toggle('cart')}} className='cursor-pointer'/>
            <img src='/images/image-avatar.png' alt='user avatar' className='w-8 hover:border rounded-full border-O sm:w-12 cursor-pointer hover:broder-4 hover:border-O'/>
            {isCartOpen && <CartConent count={itemsInCart} clearCart={()=>{setItmesInCart(0)}}/>}
          </div>
        </nav>
        {isMenuOpen && <div className='absolute top-0 h-screen w-screen z-10 overlay'>
          <div className='w-2/3 bg-white h-full p-6'> 
            <div className='mb-12'><img src='/images/icon-close.svg' onClick={()=>{toggle('menu')}}/></div>
            <ul className='flex flex-col gap-4 text-lg kumbhB'>
             <li>Collections</li>
             <li>Men</li>
             <li>Women</li>
             <li>About</li>
             <li>Contact</li>
            </ul>
          </div>
        </div>} {/* Toggles menu*/}
      </header>
      
      {isLightboxOpen && 
        <Lightbox closeLightbox={()=>{toggle('Lightbox')}}/>
      }

      <main className='md:flex md:mt-20 max-w-4xl m-auto lg:gap-20 md:gap-14'>
        
        <section className='relative md:w-1/2 md:flex md:flex-col gap-6'>
          <div className='aspect-[6/5] whitespace-nowrap snap-x snap-mandatory overflow-y-hidden sm:rounded-3xl' ref={parentRef}>
            <div  className={`inline-block snap-center ${focusedIndex === 0 ? 'inline-block' : 'hidden'}`} onClick={()=>{toggle('Lightbox')}}><img src='/images/image-product-1.jpg' alt='shoe'/></div>
            <div  className={`inline-block snap-center ${focusedIndex === 1 ? 'inline-block' : 'hidden'}`} onClick={()=>{toggle('Lightbox')}}><img src='/images/image-product-2.jpg' alt='shoe'/></div>
            <div  className={`inline-block snap-center ${focusedIndex === 2 ? 'inline-block' : 'hidden'}`} onClick={()=>{toggle('Lightbox')}}><img src='/images/image-product-3.jpg' alt='shoe'/></div>
            <div  className={`inline-block snap-center ${focusedIndex === 3 ? 'inline-block' : 'hidden'}`} onClick={()=>{toggle('Lightbox')}}><img src='/images/image-product-4.jpg' alt='shoe'/></div>
          </div>
          
          <div className='hidden md:flex justify-between max-w-full'>
            <img src='/images/image-product-1-thumbnail.jpg' 
                 className={`md:aspect-square lg:w-20 md:w-20 rounded-3xl ${focusedIndex === 0? focusedStyling: ''} cursor-pointer hover:opacity-60 `}
                 alt='shoe'
                 tabIndex={0}
                 onFocus={()=>{shiftFocus(0)}} 
            />
            <img src='/images/image-product-2-thumbnail.jpg' 
                 className={`md:aspect-square lg:w-20 md:w-20 rounded-3xl ${focusedIndex === 1? focusedStyling: ''} cursor-pointer hover:opacity-60`}
                 alt='shoe thumbnail'
                 tabIndex={1}
                 onFocus={()=>{shiftFocus(1)}}
            />
            <img src='/images/image-product-3-thumbnail.jpg' 
                 className={`md:aspect-square lg:w-20 md:w-20 rounded-3xl ${focusedIndex === 2? focusedStyling: ''} cursor-pointer hover:opacity-60`}
                 alt='shoe thumbnail'
                 tabIndex={2}
                 onFocus={()=>{shiftFocus(2)}}
            />
            <img src='/images/image-product-4-thumbnail.jpg' 
                 className={`md:aspect-square lg:w-20 md:w-20 rounded-3xl ${focusedIndex === 3? focusedStyling: ''} cursor-pointer hover:opacity-60`}
                 alt='shoe thumbnail'
                 tabIndex={3}
                 onFocus={()=>{shiftFocus(3)}}
            />
          </div>
          
          <div className='absolute top-1/2 flex justify-between w-full  px-5 md:hidden'>
            <span className='aspect-square w-8 flex items-center justify-center bg-white rounded-full' onClick={scrollRight}><img src='/images/icon-previous.svg' alt='next button' className='w-2'/></span>
            <span className='aspect-square w-8 flex items-center justify-center bg-white rounded-full' onClick={scrollLeft}><img src='/images/icon-next.svg' alt='previous button' className='w-2'/></span>
          </div>
        </section>

        <section className='flex flex-col gap-4 p-5 md:w-1/2 lg:gap-4 lg:justify-center'>
         
         <div className='flex flex-col gap-2 lg:gap-4'>
            <span className='text-sm tracking-widest text-O kumbhB'>SNEAKER COMPANY</span>  
            <span className='text-3xl text-VDB kumbhB lg:text-4xl'>Fall Limited Edition Sneakers</span>
            <p className='text-base text-DGB kumbhS'>This low-profile sneakers ace your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          </div>

          <div className='flex flex-col gap-3 kumbhB lg:gap-6'>
            <div className='flex justify-between items-center gap-3 lg:flex-col lg:items-start'>
              <span className='flex items-center gap-3 text-2xl'>$125.00 <p className='text-sm flex items-center justify-center bg-Op text-O p-1 rounded-xl'>50%</p></span>
              <span className='text-GB line-through'>$250</span>
            </div>
            <div className='flex flex-col gap-3 lg:flex-row '>
              <button className='flex justify-between bg-LGB p-4 items-center rounded-xl lg:gap-6 cursor-default'>
                <img src='/images/icon-plus.svg'alt='add shoes button'className='cursor-pointer hover:opacity-50' onClick={()=>{cartEdit('+')}}/> 
                {itemsInCart} 
                <img src='/images/icon-minus.svg' alt='reduce shoes button' className='cursor-pointer hover:opacity-50' onClick={()=>{cartEdit('-')}}/>
              </button>
              <button className='flex justify-center gap-2 text-white bg-O hover:bg-orange-400 p-4 items-center rounded-2xl shadow-2xl shadow-O lg:w-64 lg:shadow-Op'><img src='/images/icon-cart.svg' alt='cart icon' className='grayscale invert brightness-0'/>Add to cart</button>
            </div>
          </div>

        </section>
      </main>
    </div>
  )
}