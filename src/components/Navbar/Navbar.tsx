'use client'

import React, { useState } from 'react'

// import component from heroui
import {
    Navbar as CustomNavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    Input
} from "@heroui/react";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <CustomNavbar onMenuOpenChange={setIsMenuOpen} className='bg-black text-white'>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="text-lg font-bold text-inherit">MovieMunch</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-10 text-white" justify="center">
                <NavbarItem>
                    <Link className='text-sm text-white' href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='text-sm text-white' aria-current="page" href="#">
                        Tv Shows
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='text-sm text-white' href="#">
                        Movies
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className='text-sm text-white' href="#">
                        Upcoming
                    </Link>
                </NavbarItem>
            </NavbarContent>
            {/* <NavbarContent justify="end">
                <NavbarItem className="">
                    <Input placeholder="Search..." />
                </NavbarItem>
            </NavbarContent> */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </CustomNavbar>

    )
}
