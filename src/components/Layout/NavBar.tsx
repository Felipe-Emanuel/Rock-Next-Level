import { List } from "phosphor-react";

function OpenNavBar(){
    const overlay = document.getElementById('btnNav')!;
    const openOverlay = document.getElementById('OpenOverlay')!;

        overlay.style.width = '25%'
        openOverlay!!.style.display = 'none';
}

function CloseNavBar() {
    const overlay = document.getElementById('btnNav')!;
    const openOverlay = document.getElementById('OpenOverlay')!;

        overlay.style.width = '0%'
        openOverlay.style.display = 'block';
}


export function NavBar() {

    return (
      
        <>
            <button onClick={OpenNavBar} id='OpenOverlay' className='h-0 text-[28px] text-lightPink hover:text-white-Total'>
                <List />
            </button>   

            <nav id="btnNav"
                className='h-[80vh] bg-white-500 m-0 bg-opacity-75 relative w-0 overflow-hidden duration-200
                sm:h-[75vh]'
            >
            
                <button id='OpenOverlay' onClick={CloseNavBar} className='mb-20 text-[28px] text-2xl'>
                        <List />
                </button>

                <div className='
                    flex flex-col text-center text-[12px]
                    sm:text-[16px]'>
                    <a href='#' id="home" className='py-8 hover:bg-black hover:bg-opacity-75 hover:text-white-Total transition'>HOME</a>
                    <a href='#' id="brands" className='py-8 hover:bg-black hover:bg-opacity-75 hover:text-white-Total transition'>BRANDS</a>
                    <a href='#' id="utilitys" className='py-8 hover:bg-black hover:bg-opacity-75 hover:text-white-Total transition'>UTILITYS</a>
                    <a href='#' id="about" className='py-8 hover:bg-black hover:bg-opacity-75 hover:text-white-Total transition'>ABOUT</a>
                    <a href='#' id="contact" className='py-8 hover:bg-black hover:bg-opacity-75 hover:text-white-Total transition'>CONTACT</a>
                    <a href='#' id="chat" className='py-8 hover:bg-black hover:bg-opacity-75 hover:text-white-Total transition'>CHAT</a>
                </div>

            </nav>

        </>
    )
}