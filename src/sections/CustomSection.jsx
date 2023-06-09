import React, { useRef } from 'react';
import Image from 'next/image';
import 'swiper/css/effect-fade';
import Button from 'components/Button';
import { handleScrollToSection } from 'utils';



const CustomSection = ({ sectionId, typeTwo, d }) => {



	const sectionRef = useRef(null);



	return (
		<>
			{/* DESTIP VIEW */}
			<div
				id={sectionId}
				ref={sectionRef}
				className="custom_section md:cnetered hidden  bg-red-400 md:flex"
			>
				{/* BLACK CARD */}
				<div
					className={`${
						typeTwo ? 'black_card-two' : 'black_card'
					} linear_bg  stroke w-[577px] h-[354px] bg-white hidden md:block`}
				></div>

				{/* FADED TEXT CARD */}
				<div className={`${typeTwo ? 'text_card-two' : 'text_card'}   w-[165px] h-auto`}>
					<p className="font-personal text-[12px] font-normal text-[#25160534] leading-[28.68px]">
						{d.fadeText}
					</p>
				</div>

				{/* MAIN CARD */}
				<div
					id="main_card"
					className={`${
						typeTwo ? 'main_card-two' : 'main_card'
					} border-2  main_card  p-[34px] stroke"`}
				>
					{/*  */}
					<div
						className={`main_card-content  flex relative ${
							typeTwo ? ' flex-row-reverse' : 'flex-row'
						} items-center justify-between w-full h-full  `}
					>
						{/* TEXT */}
						<div className="col_one  text-left   ">
							<h1 className=" font-personal text-[29.3px] w-[482px] text-[#110200] leading-[70.06px]">
								{d.mainText}
							</h1>

							<h3 className="font-normal mt-[8px] font-eb text-[18.75px] w-[362px] leading-[24.47px] text-[#110200B2]">
								{d.subText}
							</h3>

							<Button
								text={'Get started'}
								type={'ghost2'}
								style={{ color: '#F1890E', fontSize: "14px", marginTop: '20px' }}
								click={() => handleScrollToSection('contact')}
							/>
						</div>

						<div className="space_x w-[50px]"></div>

						{/* IMAGE */}
						<div className="col_two relative h-full w-[70%]">
							<Image src={d.img} alt={'hero'} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
						</div>
					</div>
				</div>
			</div>

			{/* FOR MOBIL VIEW */}
			<section id={sectionId} ref={sectionRef} className="custom_section py-[58pxb]   md:hidden ">
				<div
					className={`main_card-content flex relative ${
						typeTwo ? ' flex-row-reverse' : 'flex-row'
					} items-center justify-between w-full h-full `}
				>
					{/* TEXT */}
					<div className="col_one  space-y-3 text-left w-[300px] 	 md:w-[490px] ">
						<h1 className="text-bigger font-personal text-xs  md:text-[25.8px] text-txt-hover leading-[200%]">
							{d.mainText}
						</h1>

						<h3 className="text-medium text-sm md:text-lg text-[#251605b4]">{d.subText}</h3>

						<Button
							text={'Get early access'}
							variant={'secondary'}
							style={{ color: '#F1890E', display: 'none' }}
							click={() => handleScrollToSection('contact')}
						/>

						<div
							role={'button'}
							onClick={() => handleScrollToSection('contact')}
							className="text-sec text-sm font-eb capitalize"
						>
							get started
						</div>
					</div>

					<div className="space_x w-[30px] md:w-[70px]"></div>

					{/* IMAGE ---destop*/}
					<div className="col_two relative h-full w-[70%] hidden md:flex">
						<Image src={d.img} alt={'hero'} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
					</div>

					{/* IMAGE ---mobile*/}
					<div className="col_two relative ">
						<Image src={d.img} alt={'hero'} width={300} height={200} />
					</div>
				</div>
				{/* </div> */}
			</section>
		</>
	);
};

export default CustomSection;
