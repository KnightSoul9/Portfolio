import React from "react";

//Pages
import SobreMimPage from "./sobre-mim";
import PortfolioPage from "./portfolio";
import ExperienciaPage from "./experiencia";
import HomePage from "./homepage";
import Faq from "./faq";
import Testimonials from "./Testimonials";

//Components
import ServicesOffer from "@/components/ServicesOffer";
import FooterPage from "@/components/FooterPage";
import CarrouselTechsDivContainer from "@/components/CarrouselTechsDivContainer";
import SatisfactionIndicators from "@/components/SatisfactionIndicators";

let flagMessage = false;
export default function Index() {
	function ConsoleMessage() {
		

		console.log(
			"Love the Projects And My Work Give a star on my github ans Follow me if you like " + "%chttps://github.com/KnightSoul9\n\n" + "%cDon't Forget! 🌟",
			
		);
	}

	if (flagMessage == false) {
		ConsoleMessage();
		flagMessage = true;
	}

	return (
		<>
			<HomePage />
			<ServicesOffer />
			<CarrouselTechsDivContainer />
			<SobreMimPage />
			<SatisfactionIndicators />
			<CarrouselTechsDivContainer direction="left" />
			<PortfolioPage />
			<ExperienciaPage />
			<Testimonials />
			<Faq />
			<FooterPage />
		</>
	);
}
