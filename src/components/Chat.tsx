import { TooltipChat } from './FnTooltip'
import { Text } from './Text'


export function Chat() {
    return (
        <div data-animate='right'
            className='
            z-50 hidden cursor-pointer text-purple-400 font-light items-center ml-[95%] fixed mt-28
            lg:inline-flex'
        >
            <Text data-animate='right'>
                <span className='ml-2'>
                    <span className="animate-ping absolute inline-flex h-9 w-9 rounded-full bg-purple-400 opacity-25"></span>
                    <button>
                        <TooltipChat />
                    </button>
                </span>
            </Text>
        </div>
    )
}