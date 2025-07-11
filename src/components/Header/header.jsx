import React from 'react';

import coronaLogo from '../../assets/images/coronaTwitch.png'
import userIcon from '../../assets/images/userIcon.png'
import logoTwitch from '../../assets/images/LogoTwitch.png'
import options from '../../assets/images/options.png'
import search from '../../assets/images/search.svg'
import './header.css'

const Header = () => {
   return(
	<header className='headerTwitch'>

		{/* SECCION DEL LOGO */ }
		<section className='flex items-center gap-2 '>
			<img src={logoTwitch.src}/>
			<h1 className='logoName'>MIDUTCH</h1>
			<img src={options.src} />
		</section>

		{/* SECCION DEL BUSCADO */ }
		<search className='w-[390px] h-[40px]  '>
			<form className='flex items-center '>
				<input className='w-[356px] h-[40px] rounded-l-[6px] border border-[#53535F61] bg-[#18181B]' type='text' placeholder=' Search' name='search'/>
				<button className='w-[34px] h-[40px] rounded-r-[6px] bg-[#53535F61] flex justify-center' type='submit'>
					<img src={search.src} alt="search button " className='w-[24px]' />
				</button>
			</form>
			
		</search>

		{/* SECCION DEL LOGIN */ }
		<nav className='flex w-[288px] gap-[10px] justify-end'>
			<section className='flex flex-col-reverse w-[40px] h-[30px]'>
				<img className='w-[16px] h-[11px]' src={coronaLogo.src}/>
				<div className='rounded-[9000px] bg-[#EB0400] w-[27.55px] h-[19.2px]  items-center mx-auto my-0'>
					<p className='text-[12px] mx-auto my-0 text-center'>65</p>
				</div>
				
			</section>
			<section className='w-[174.99px] flex gap-[16px] items-center'>
				<button className='bg-[#53535F61] buttonHeader '>Log in</button>
				<button className='bg-[#199AFC] buttonHeader'>Sign Up</button>
				<img src={userIcon.src} className='w-[14px] h-[16px]'/>
			</section>
		</nav>
   	</header>
   ) 

};

export default Header;