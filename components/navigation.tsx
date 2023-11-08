'use client';

import { ChatBubbleBottomCenterTextIcon, HomeIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import cx from 'clsx';
import Link from 'next/link';

export const Navigation = ({}) => {
    return (
        <div className='flex items-center space-x-7 text-base font-semibold leading-none text-white/90'>
            <Link href='/' className={cx('group')}>
                <div className='sm:flex sm:items-center sm:space-x-2'>
                    <div className='mb-1.5 flex justify-center sm:mb-0 sm:block'>
                        <div
                            className={cx(
                                'rounded-lg bg-gradient-to-tl from-gray-500/80 to-blue-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-blue-500/40 group-active:translate-y-1'
                            )}
                        >
                            <HomeIcon className='w-[18px] transform text-white transition delay-100 duration-500 ease-out group-hover:scale-110' />
                        </div>
                    </div>
                    <div>Home</div>
                </div>
            </Link>
            <Link href='/about' className={cx('group')}>
                <div className='sm:flex sm:items-center sm:space-x-2'>
                    <div className='mb-1.5 flex justify-center sm:mb-0 sm:block'>
                        <div
                            className={cx(
                                'rounded-lg bg-gradient-to-tl from-gray-900/80 to-blue-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-blue-500/40 group-active:translate-y-1'
                            )}
                        >
                            <VideoCameraIcon className='w-[18px] transform text-white transition delay-100 duration-500 ease-out group-hover:scale-110' />
                        </div>
                    </div>
                    <div>About</div>
                </div>
            </Link>
            <Link href='/posts' className={cx('group')}>
                <div className='sm:flex sm:items-center sm:space-x-2'>
                    <div className='mb-1.5 flex justify-center sm:mb-0 sm:block'>
                        <div
                            className={cx(
                                'rounded-lg bg-gradient-to-tl from-gray-500/80 to-blue-400/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-blue-500/40 group-active:translate-y-1'
                            )}
                        >
                            <ChatBubbleBottomCenterTextIcon className='w-[18px] transform text-white transition delay-100 duration-500 ease-out group-hover:scale-110' />
                        </div>
                    </div>
                    <div>Posts</div>
                </div>
            </Link>
        </div>
    );
};
