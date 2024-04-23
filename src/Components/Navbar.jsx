import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-[#9654F4] flex justify-between px-4 py-2 w-full">
  <div className="mr-[10rem]">
    <h1 className=" text-xl whitespace-normal break-words ">
        <span className='text-purple-50'>BL</span><br />
        <span className='text-purple-700'>Utensils</span></h1>
  </div>
    <div className="form-control flex-grow items-center justify-center  hidden lg:flex ]">
    <div className="join ">
  <input className="input input-bordered join-item w-[500px] h-17 text-xl" placeholder="Search for products and categories"/>
  <button className="btn join-item  rounded-lg w-[100px] h-17 bg-purple-800 border-none "></button>
</div>
    </div>
    <div className="navbar-end gap-6 ">
    <a className="btn bg-white border-none w-[100px] h-17 text-purple-800 ">Login</a>
    <a className="btn bg-purple-800 border-none w-[100px] text-white ">Sign up</a>
  </div>
  </div>

  <div className="navbar justify-center bg-[#9654F4]">
  <div className=" mr-[6rem]">
    <div className=" text-white">
    <details>
          <summary>All categories</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal justify-center items-center text-white px-1">
      <li><a>Home</a></li>
      <li><a>Shop</a></li>
      <li><a>Blog</a></li>
      <li><a>Track order</a></li>
      <li><a>About us</a></li>
      <li><a>Contact us</a></li>
      <li>
        <details>
          <summary>Help</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Cart</a></li>
    </ul>
  </div>
</div>

      
    </>
  )
}

export default Navbar


