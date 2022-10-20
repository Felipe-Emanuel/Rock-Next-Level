export function AnimateScroll() {
    
    const animeScroll = () => {
        const item = document.querySelectorAll('[data-animate]');
        const windowTop = window.pageYOffset + window.innerHeight * .85;

        item.forEach(el => {
                if (el instanceof HTMLElement && windowTop > el.offsetTop ) {
                    el.classList.add('animate');
                } else {
                    el.classList.remove('animate');
                    
                }
            }
        )
    }

    const windowScroll = window.addEventListener('scroll', () => {
                animeScroll();
            })

    return (
        <>{windowScroll}</>
    )

}