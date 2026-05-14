"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe, LogIn, UserPlus, ChevronDown } from 'lucide-react';

const guideItems = [
	{ id: 1, label: 'Our Team', hl: '/src/our-team' },
	{ id: 2, label: 'Our Faculty', hl: '/src/faculty' },
	{ id: 3, label: 'About Us', hl: '/src/about-us' },
	{ id: 4, label: 'D. Drama & Poetry Guide', hl: '/src/our-team' },
	{ id: 5, label: 'E. Essay Structure Guide', hl: '/src/our-team' },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [guidesOpen, setGuidesOpen] = useState(false);
	const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (e) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setGuidesOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const navItems = [
		{ name: 'AI Tools', href: '#ai-tools', hasDropdown: false },
		{ name: 'Our Guides', href: '#guides', hasDropdown: true },
		{ name: 'Discussions', href: '#discussions' },
		{ name: 'Journals', href: '#journals' },
		{ name: 'Books/PDFs', href: '#books' },
	];

	return (
		<nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">

					{/* Logo */}
					<div className="flex-shrink-0 flex items-center">
						<Link href="/" className="flex items-center">
							<Image
								src="/Logo Icons/Literary Palace SVG-01.svg"
								alt="Literary Palace Logo"
								width={160}
								height={50}
								className="object-contain h-[50px] w-[160px]"
								priority
							/>
						</Link>
					</div>

					{/* Desktop Nav */}
					<div className="hidden lg:block">
						<div className="flex items-center space-x-8">
							{navItems.map((item) => (
								<div
									key={item.name}
									className="relative"
									ref={item.hasDropdown ? dropdownRef : null}
								>
									{item.hasDropdown ? (
										<>
											{/* Trigger button */}
											<button
												onClick={() => setGuidesOpen((prev) => !prev)}
												onMouseEnter={() => setGuidesOpen(true)}
												className="text-[#001327] hover:text-[#b5d56a] px-3 py-2 text-sm font-medium transition-colors duration-150 flex items-center focus:outline-none"
												style={{ fontFamily: 'Raleway, sans-serif' }}
											>
												<span>{item.name}</span>
												<ChevronDown
													className={`w-4 h-4 ml-1 transition-transform duration-200 ${guidesOpen ? 'rotate-180' : ''}`}
												/>
											</button>

											{/* Dropdown Panel */}
											{guidesOpen && (
												<div
													onMouseLeave={() => setGuidesOpen(false)}
													className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden animate-fade-in"
												>
													{/* Dropdown header accent */}
													<div className="h-1 bg-gradient-to-r from-[#001327] to-[#b5d56a]" />

													<ul className="py-2">
														{guideItems.map((guide, idx) => (
															<li key={guide.id}>
																<Link
																	href={guide.hl}
																	className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#001327] hover:bg-[#b5d56a]/10 hover:text-[#001327] transition-colors duration-150 group"
																	style={{ fontFamily: 'Raleway, sans-serif' }}
																>
																	{/* Number badge */}
																	<span className="w-6 h-6 rounded-full bg-[#001327] group-hover:bg-[#b5d56a] text-white text-xs font-bold flex items-center justify-center transition-colors duration-150 flex-shrink-0">
																		{guide.id}
																	</span>
																	<span className="font-medium">{guide.label}</span>
																</Link>
																{idx < guideItems.length - 1 && (
																	<div className="mx-4 border-t border-gray-50" />
																)}
															</li>
														))}
													</ul>
												</div>
											)}
										</>
									) : (
										<a
											href={item.href}
											className="text-[#001327] hover:text-[#b5d56a] px-3 py-2 text-sm font-medium transition-colors duration-150 flex items-center focus:outline-none"
											style={{ fontFamily: 'Raleway, sans-serif' }}
										>
											{item.name}
										</a>
									)}
								</div>
							))}
						</div>
					</div>

					{/* Desktop Right Buttons */}
					<div className="hidden lg:flex items-center space-x-4">
						<button className="p-2 text-[#001327] hover:text-[#b5d56a] rounded-lg focus:outline-none" title="Change Language">
							<Globe className="w-5 h-5" />
						</button>
						<button className="text-[#001327] hover:text-[#b5d56a] hover:border-[#b5d56a] px-4 py-2 text-sm font-medium border border-[#07294e] rounded-md flex items-center space-x-2 focus:outline-none">
							<LogIn className="w-4 h-4 stroke-current" />
							<span>Login</span>
						</button>
						<button className="bg-[#b5d56a] text-[#001327] px-4 py-2 text-sm font-medium rounded-md flex items-center space-x-2 focus:outline-none">
							<UserPlus className="w-4 h-4" />
							<span>Sign Up for A+</span>
						</button>
					</div>

					{/* Mobile Toggle */}
					<div className="lg:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-[#001327] hover:text-[#b5d56a] p-2 rounded-lg focus:outline-none"
							aria-label="Toggle menu"
						>
							{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Sidebar */}
			<div
				className={`
          lg:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-lg mt-16
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          z-40 overflow-y-auto
        `}
			>
				<div className="px-2 pt-2 pb-3 space-y-1">
					{navItems.map((item) => (
						<div key={item.name}>
							{item.hasDropdown ? (
								<>
									{/* Mobile Guides toggle */}
									<button
										onClick={() => setMobileGuidesOpen((prev) => !prev)}
										className="w-full text-left text-[#001327] hover:text-[#b5d56a] hover:bg-[#b5d56a]/5
                      px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
										style={{ fontFamily: 'Raleway, sans-serif' }}
									>
										<span>{item.name}</span>
										<ChevronDown
											className={`w-4 h-4 transition-transform duration-200 ${mobileGuidesOpen ? 'rotate-180' : ''}`}
										/>
									</button>

									{/* Mobile Guides Dropdown */}
									<div
										className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileGuidesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
											}`}
									>
										<div className="ml-3 mt-1 border-l-2 border-[#b5d56a] pl-3 space-y-1">
											{guideItems.map((guide) => (
												<a
													key={guide.id}
													href="#"
													onClick={() => setIsOpen(false)}
													className="flex items-center gap-2.5 px-2 py-2 rounded-md text-sm text-[#001327] hover:text-[#b5d56a] hover:bg-[#b5d56a]/5 transition-colors"
													style={{ fontFamily: 'Raleway, sans-serif' }}
												>
													<span className="w-5 h-5 rounded-full bg-[#001327] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
														{guide.id}
													</span>
													<span className="font-medium">{guide.label}</span>
												</a>
											))}
										</div>
									</div>
								</>
							) : (
								<a
									href={item.href}
									className="text-[#001327] hover:text-[#b5d56a] hover:bg-[#b5d56a]/5
                    block px-3 py-2 rounded-md text-base font-medium"
									style={{ fontFamily: 'Raleway, sans-serif' }}
									onClick={() => setIsOpen(false)}
								>
									{item.name}
								</a>
							)}
						</div>
					))}

					{/* Mobile Action Buttons */}
					<div className="pt-4 border-t border-gray-200 space-y-2">
						<button className="w-full text-left text-[#001327] hover:text-[#b5d56a] hover:bg-[#b5d56a]/5 px-3 py-2 text-base font-medium border border-gray-300 rounded-md flex items-center space-x-2">
							<LogIn className="w-4 h-4 stroke-current" />
							<span>Login</span>
						</button>
						<button className="w-full bg-[#b5d56a] text-[#001327] px-3 py-2 text-base font-medium rounded-md flex items-center space-x-2">
							<UserPlus className="w-4 h-4" />
							<span>Sign Up for A+</span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
