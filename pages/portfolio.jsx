/* eslint-disable react/jsx-key */
import React, { useState, useContext, useMemo, useEffect } from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//Ícones
import { Robot } from "@styled-icons/fa-solid/Robot";
import { Java } from "@styled-icons/fa-brands/Java";
// import { Amazonaws } from "@styled-icons/simple-icons/Amazonaws";
import { GoogleCloud } from "@styled-icons/boxicons-logos/GoogleCloud";
import { Firebase } from "@styled-icons/boxicons-logos/Firebase";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { Sqlite } from "@styled-icons/simple-icons/Sqlite";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Nextdotjs } from "@styled-icons/simple-icons/Nextdotjs";
// import { Python } from "@styled-icons/boxicons-logos/Python";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import { LogoVercel } from "@styled-icons/ionicons-solid/LogoVercel";
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import { Css3 } from "@styled-icons/boxicons-logos/Css3";
import { Html5 } from "@styled-icons/boxicons-logos/Html5";
import { Typescript } from "@styled-icons/simple-icons/Typescript";
import { Sass } from "@styled-icons/fa-brands/Sass";
import { Expo } from "@styled-icons/simple-icons/Expo";
import { Jest } from "@styled-icons/simple-icons/Jest";
// import { Leaflet } from "@styled-icons/simple-icons/Leaflet";
// import { Express } from "@styled-icons/simple-icons/Express";
// import { Flutter } from "@styled-icons/boxicons-logos/Flutter";
import { Filter } from "@styled-icons/fa-solid/Filter";
import { Svelte } from "@styled-icons/simple-icons/Svelte";

//Custom components
import Tooltip from "@/components/Tooltip";
import TitleSection from "@/components/TitleSection";
import CardProject from "@/components/CardProject";

const ContainerGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 60%;
	gap: 20px;
	transition: all 0.3s ease;
	grid-auto-rows: 1fr; /* Todas as linhas terão a mesma altura */
	align-items: stretch;

	@media (max-width: 1600px) {
		width: 85%;
	}

	@media (max-width: 1400px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

const ChipTechOptions = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-top: 20px;
	margin-bottom: 20px;
	//background-color: #ccc;
	width: 60%;

	svg {
		min-width: 28px;
		min-height: 28px;
		width: 28px;
		height: 28px;
		color: ${(props) => props.theme.colors.branding};
		margin-right: 10px;

		@media (max-width: 601px) {
			min-width: 18px;
			min-height: 18px;
			width: 18px;
			height: 18px;
		}
	}

	@media (max-width: 1600px) {
		width: 85%;
	}

	/* @media (max-width: 601px) {
		display: none;
	} */
`;

const Chip = styled.span`
	color: ${(props) => (props.active == true ? props.theme.colors.backgroundSecondary : props.theme.colors.inactiveTitle)};
	background-color: ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.backgroundSecondary)};
	border: 1px solid ${(props) => (props.active == true ? props.theme.colors.branding : props.theme.colors.inactiveTitle)};
	padding: 2px 7px 3px 7px;
	margin: 3px;
	border-radius: 224px;
	font-weight: 700;
	//transition: all 0.3s ease;

	&:hover {
		cursor: pointer;
		color: ${(props) => props.active == false && props.theme.colors.branding};
		border: 1px solid ${(props) => props.theme.colors.branding};
	}

	@media (max-width: 601px) {
		font-weight: 700;
		font-size: 10px;
	}
`;

export const TitleSpan = styled.h3`
	z-index: 2;
	position: absolute;
	top: 0;
	left: 0;
	padding: 5px 15px 5px 10px;
	color: ${(props) => props.theme.colors.backgroundPage};
	background-color: ${(props) => props.theme.colors.branding};
	font-size: ${(props) => props.theme.fontSizes.md};
	border-radius: 2px 0 18px 0;

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}

	@media (max-width: 600px) {
		font-size: ${(props) => props.theme.fontSizes.xs};
	}
`;

const SectionPortifolio = styled.section`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	min-height: 100vh;
	padding-top: 60px;
`;

const Modal = styled.div`
	display: ${(props) => (props.show ? "flex" : "none")};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const ModalContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	background: ${(props) => props.theme.colors.backgroundSecondary};
	padding: 30px;
	border-radius: 8px;
	width: 100%;
	max-height: 90%;
	overflow-y: auto;
	max-width: 900px;

	h2 {
		color: ${(props) => props.theme.colors.title};
	}

	p {
		margin: 20px 0;
		text-align: left;
		color: ${(props) => props.theme.colors.body};
	}

	@media (max-width: 600px) {
		width: 90%;
	}
`;

const CloseButton = styled.button`
	background: ${(props) => props.theme.colors.branding};
	color: ${(props) => props.theme.colors.backgroundPage};
	border: none;
	padding: 10px 15px;
	border-radius: 4px;
	cursor: pointer;
	font-size: ${(props) => props.theme.fontSizes.md};
	margin-top: 30px;

	&:hover {
		background: ${(props) => props.theme.colors.brandingHover};
	}
`;

export default function Portifolio() {
	const { language } = useContext(SettingsContext);
	const [stack, setStack] = useState("TODOS");
	const [view, setView] = useState("grid");
	const [showModal, setShowModal] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

		if (showModal) {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
			document.body.style.paddingRight = `${scrollbarWidth}px`;
		} else {
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
			document.body.style.paddingRight = "0px";
		}

		return () => {
			document.body.style.overflow = "auto";
			document.documentElement.style.overflow = "auto";
			document.body.style.paddingRight = "0px";
		};
	}, [showModal]);

	const handleCardClick = (project) => {
		setSelectedProject(project);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedProject(null);
	};

	const projects = useMemo(
		() => [
			{
				id: 1,
				title: language.portifolioPage.projects.id_1.title,
				description: language.portifolioPage.projects.id_1.description,
				liveDemoUrl: "https://rummy-game-lovat.vercel.app/",
				imageSourcePath: "/img/portfolio-projects/rummy.png",
				techs: [
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
					<Tooltip toolTipText="NextJS">
						<Nextdotjs />
					</Tooltip>,
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="NodeJS">
						<Nodejs />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
				],
				sourceCodeLink: null,
				typeProject: ["FRONTEND", "WEB"],
				created_at: "01/01/2025",
			},
			{
				id: 2,
				title: language.portifolioPage.projects.id_2.title,
				description: language.portifolioPage.projects.id_2.description,
				liveDemoUrl: "https://xplainerr.com/",
				imageSourcePath: "/img/portfolio-projects/xplainerr.png",
				techs: [
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
					<Tooltip toolTipText="NextJS">
						<Nextdotjs />
					</Tooltip>,
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="NodeJS">
						<Nodejs />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
				],
				sourceCodeLink: null,
				typeProject: ["BACKEND", "WEB"],
				created_at: "15/08/2024",
			},
			{
				id: 3,
				title: language.portifolioPage.projects.id_3.title,
				description: language.portifolioPage.projects.id_3.description,
				liveDemoUrl: null,
				imageSourcePath: "/img/portfolio-projects/Netflixgpt.jpeg",
				techs: [
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="NodeJS">
						<Nodejs />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
					<Tooltip toolTipText="Firebase">
						<Firebase />
					</Tooltip>,
					// <Tooltip toolTipText="MongoDB">
					// 	<Mongodb />
					// </Tooltip>,
					// <Tooltip toolTipText="Jest">
					// 	<Jest />
					// </Tooltip>,
					// <Tooltip toolTipText="SqLite">
					// 	<Sqlite />
					// </Tooltip>,
					<Tooltip toolTipText="Vercel">
						<LogoVercel />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/KnightSoul9/Netflix-GPT",
				typeProject: ["BACKEND", "WEB"],
				created_at: "26/04/2020",
			},
			{
				id: 4,
				title: language.portifolioPage.projects.id_4.title,
				description: language.portifolioPage.projects.id_4.description,
				liveDemoUrl: "https://travel-tour-website.onrender.com/",
				imageSourcePath: "/img/portfolio-projects/travel&tour.png",
				techs: [
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
					<Tooltip toolTipText="ReactJs">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="Vercel">
						<LogoVercel />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/KnightSoul9/Travel_Tour",
				typeProject: ["WEB", "FRONTEND"],
				created_at: "24/06/2021",
			},
			{
				id: 5,
				title: language.portifolioPage.projects.id_5.title,
				description: language.portifolioPage.projects.id_5.description,
				liveDemoUrl: "https://satyam-two.vercel.app/",
				imageSourcePath: "/img/portfolio-projects/portfolio.png",
				techs: [
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="NextJS">
						<Nextdotjs />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="NodeJS">
						<Nodejs />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
					<Tooltip toolTipText="Vercel">
						<LogoVercel />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/KnightSoul9/Portfolio",
				typeProject: ["WEB", "FRONTEND"],
				created_at: "02/02/2025",
			},

			{
				id: 6,
				title: language.portifolioPage.projects.id_6.title,
				description: language.portifolioPage.projects.id_6.description,
				liveDemoUrl: "https://music-player-1-9hah.onrender.com/",
				imageSourcePath: "/img/portfolio-projects/musicplayer.png",
				techs: [
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="MongoDB">
						<Mongodb />
					</Tooltip>,
					<Tooltip toolTipText="Vercel">
						<LogoVercel />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/KnightSoul9/Music_Player",
				typeProject: ["WEB", "FRONTEND", "BACKEND"],
				created_at: "05/05/2024",
			},
			{
				id: 7,
				title: language.portifolioPage.projects.id_7.title,
				description: language.portifolioPage.projects.id_7.description,
				liveDemoUrl: "https://blogging-website-rust.vercel.app/",
				imageSourcePath: "/img/portfolio-projects/blogging.png",
				techs: [
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="MongoDB">
						<Mongodb />
					</Tooltip>,
					<Tooltip toolTipText="Styled Components">
						<Styledcomponents />
					</Tooltip>,
					<Tooltip toolTipText="Vercel">
						<LogoVercel />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/KnightSoul9/Blog_Website",
				typeProject: ["WEB", "FRONTEND", "BACKEND"],
				created_at: "10/06/2023",
			},
			{
				id: 11,
				title: language.portifolioPage.projects.id_7.title,
				description: language.portifolioPage.projects.id_7.description,
				liveDemoUrl: "https://game-listing-website-roan.vercel.app/",
				imageSourcePath: "/img/portfolio-projects/gamelisting.png",
				techs: [
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Styled Components">
						<Styledcomponents />
					</Tooltip>,
					<Tooltip toolTipText="Vercel">
						<LogoVercel />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/KnightSoul9/Game_Listing_Website",
				typeProject: ["WEB"],
				created_at: "10/08/2023",
			},

			{
				id: 8,
				title: language.portifolioPage.projects.id_8.title,
				description: language.portifolioPage.projects.id_8.description,
				liveDemoUrl: "https://to-do-list-by-rtk.vercel.app/",
				imageSourcePath: "/img/portfolio-projects/todortk.png",
				techs: [
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="ReactJS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Vercel">
						<LogoVercel />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/KnightSoul9/To_Do_List_By_RTK",
				typeProject: ["WEB", "FRONTEND"],
				created_at: "28/04/2023",
			},
			{
				id: 9,
				title: language.portifolioPage.projects.id_9.title,
				description: language.portifolioPage.projects.id_9.description,
				liveDemoUrl: "https://currency-converter-liart-beta.vercel.app/",
				imageSourcePath: "/img/portfolio-projects/currencyconverter.png",
				techs: [
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="React.JS">
						<ReactLogo />
					</Tooltip>,
					<Tooltip toolTipText="Vercel">
						<LogoVercel />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/KnightSoul9/Currency_Converter",
				typeProject: ["WEB", "FRONTEND"],
				created_at: "28/01/2023",
			},
			{
				id: 10,
				title: language.portifolioPage.projects.id_10.title,
				description: language.portifolioPage.projects.id_10.description,
				liveDemoUrl: "https://knightsoul9.github.io/Fitnessfreak-WEBSITE-/",
				imageSourcePath: "/img/portfolio-projects/gymwebsite.png",
				techs: [
					<Tooltip toolTipText="Html">
						<Html5 />
					</Tooltip>,
					<Tooltip toolTipText="CSS">
						<Css3 />
					</Tooltip>,
					<Tooltip toolTipText="Javascript">
						<Javascript />
					</Tooltip>,
					<Tooltip toolTipText="Vercel">
						<LogoVercel />
					</Tooltip>,
				],
				sourceCodeLink: "https://github.com/KnightSoul9/Fitnessfreak-WEBSITE-",
				typeProject: ["WEB", "FRONTEND"],
				created_at: "27/03/2022",
			},
		],
		[]
	);

	function handleFilter(id) {
		setStack(id);
	}

	const array_projects = useMemo(() => {
		if (stack === "TODOS") {
			return projects;
		} else {
			return projects.filter((item) => item.typeProject.includes(stack));
		}
	}, [stack, projects]);

	return (
		<SectionPortifolio id="section-portifolio">
			<TitleSection title={language.portifolioPage.title} subtitle={language.portifolioPage.subtitle} hasMarginBottom />

			<ChipTechOptions>
				<Filter className="svg" />
				<Chip
					id="TODOS"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("TODOS") ? true : false}>
					{language.portifolioPage.labelFilter}
				</Chip>

				<Chip
					id="BACKEND"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("BACKEND") ? true : false}>
					BACKEND
				</Chip>
				<Chip
					id="WEB"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("WEB") ? true : false}>
					WEB
				</Chip>
				{/* <Chip
					id="MOBILE"
					onClick={(event) => {
						handleFilter(event.target.id);
					}}
					active={stack.includes("MOBILE") ? true : false}>
					MOBILE
				</Chip> */}
			</ChipTechOptions>

			<ContainerGrid view={view}>
				{array_projects?.map((project, index) => (
					<ScrollAnimation animateIn="fadeIn" animateOnce key={index}>
						<CardProject
							title={project.title}
							description={project.description}
							typeProject={project.typeProject}
							techs={project.techs}
							createdAt={project.created_at}
							liveDemoUrl={project.liveDemoUrl}
							imageSourcePath={project.imageSourcePath}
							sourceCodeLink={project.sourceCodeLink}
							handleModal={() => handleCardClick(project)}
						/>
					</ScrollAnimation>
				))}
			</ContainerGrid>

			<Modal show={showModal}>
				<ModalContent>
					<h2>{selectedProject?.title}</h2>
					<p>{selectedProject?.description}</p>
					<CloseButton onClick={handleCloseModal}>Close</CloseButton>
				</ModalContent>
			</Modal>
		</SectionPortifolio>
	);
}
