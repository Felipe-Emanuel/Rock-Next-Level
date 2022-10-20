import { List } from "phosphor-react";
import { Link } from "react-router-dom";
import { HoverCardUser } from "./HoverCard";


function OpenNavBar(){
    const overlay = document.getElementById('btnNav')!;
    const openOverlay = document.getElementById('OpenOverlay')!;
    const UserLog = document.getElementById('UserLog')!;

        overlay.style.width = '100%'
        openOverlay.style.display = 'none';
        setTimeout(() => {
            UserLog.classList.remove('hidden')
        }, 200)
        
}

function CloseNavBar() {
    const overlay = document.getElementById('btnNav')!;
    const openOverlay = document.getElementById('OpenOverlay')!;
    const UserLog = document.getElementById('UserLog')!;


        overlay.style.width = '0%'
        UserLog.classList.add('hidden')
        setTimeout(()=> {
            openOverlay.style.display = 'block';
        }, 200)
}


export function NavBar() {

    return (
      
        <>
            <button onClick={OpenNavBar} id='OpenOverlay' className='text-[28px] text-lightPink hover:text-white-500'>
                <List />
            </button>   

            <nav id="btnNav"
                className='h-[15vh] bg-white-500 m-0 relative w-0 overflow-hidden duration-200'
            >
                <div className='h-8 items-center flex text-[28px] w-[100vw] bg-purple-900 bg-opacity-75 text-white-Total'>
                    <button id='OpenOverlay' onClick={CloseNavBar} >
                        <List />
                    </button>
                    <div id='UserLog' className=' absolute right-1'>
                        <HoverCardUser />
                    </div>
                </div>

                <div className='container'>
                    <ul className='flex flex-row p-0 justify-center gap-2 mt-10'>
                        <li >
                            <Link className='no-underline text-black text-[10px] sm:text-[16px]' to='/'>HOME</Link>
                        </li>
                        <li>
                            <Link className='no-underline text-black text-[10px] sm:text-[16px]' to='/'>BRANDS</Link>
                        </li>
                        <li>
                            <Link className='no-underline text-black text-[10px] sm:text-[16px]' to='/utilitys'>UTILITYS</Link>
                        </li>
                        <li>
                            <Link className='no-underline text-black text-[10px] sm:text-[16px]' to='/about'>ABOUT</Link>
                        </li>
                        <li>
                            <Link className='no-underline text-black text-[10px] sm:text-[16px]' to='/contact'>CONTACT</Link>
                        </li>
                        <li>
                            <Link className='no-underline text-black text-[10px] sm:text-[16px]' to='/'>CHAT</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}