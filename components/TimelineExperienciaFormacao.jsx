import React, { useContext } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

//Contexto
import { SettingsContext } from "@/context/SettingsContext";

//ícones
import { School } from "@styled-icons/ionicons-outline/School";
import { LearningApp } from "@styled-icons/fluentui-system-filled/LearningApp";
import { Work } from "@styled-icons/material-rounded/Work";

const LearningAppIcon = styled(LearningApp)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const SchoolIcon = styled(School)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const WorkIcon = styled(Work)`
	color: ${(props) => props.theme.colors.backgroundSecondary};
	width: 40px;
	height: 40px;
`;

const TimelineContent = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const TitleContentTimeline = styled.h3`
	.vertical-timeline-element-title {
		color: ${(props) => props.theme.colors.branding};
	}
	@media (max-width: 1600px) {
		font-size: ${(props) => props.theme.fontSizes.xl};
	}

	@media (max-width: 1400px) {
		font-size: ${(props) => props.theme.fontSizes.lg};
	}

	@media (max-width: 1200px) {
		font-size: ${(props) => props.theme.fontSizes.md};
	}

	@media (max-width: 900px) {
		font-size: ${(props) => props.theme.fontSizes.sm};
	}
`;

const BoldText = styled.h4`
	color: ${(props) => props.theme.colors.title};
	font-weight: 800;
	margin-top: 2px;
	margin-bottom: 2px;
	span {
		font-weight: 400;
	}
`;

export default function TimelinePortifolio(props) {
	const { language } = useContext(SettingsContext);
	const theme = useTheme();

	return (
		<VerticalTimeline lineColor={theme.colors.branding}>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{
					borderBottom: `4px solid ${theme.colors.branding}`,
					boxShadow: "0px 0px 0px 0px #ccc",
					backgroundColor: theme.colors.backgroundSecondary,
				}}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<LearningAppIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2021</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Poornima College Of Engineering</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelProfessionalCourse}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}:{" "}
						<span>
							{" "}
							{language.id == "hi"
								? "बी.टेक कंप्यूटर साइंस में समस्या समाधान, एल्गोरिदम, डेटा संरचनाएं, सॉफ्टवेयर विकास और सिस्टम डिज़ाइन सिखाता है, जो प्रौद्योगिकी में नवाचार की नींव रखता है।"
								: "B.Tech in Computer Science teaches problem-solving, algorithms, data structures, software development, and system design, laying the foundation for innovation in technology."}
						</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2022</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Learn n Build</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Software Trainee</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2023</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Techinest</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Frontend Developer</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<WorkIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2024</h3>
					<BoldText>
						{language.experiencePage.timeline.labelCompany}: <span>Xplainerr</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelPosition}: <span>Full Stack Developer</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>

			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ borderBottom: `4px solid ${theme.colors.branding}`, boxShadow: "0px 0px 0px 0px #ccc", backgroundColor: theme.colors.backgroundSecondary }}
				iconStyle={{ background: theme.colors.branding, color: "#fff", boxShadow: `0 0 0 0px ${theme.colors.branding}` }}
				icon={<SchoolIcon />}
				contentArrowStyle={{
					borderRight: `7px solid ${theme.colors.backgroundSecondary}`,
				}}>
				<TimelineContent>
					<h3 style={{ color: theme.colors.branding, padding: "2px 8px", borderRadius: "4px", border: `2px solid ${theme.colors.branding}`, marginBottom: "10px" }}>2025</h3>
					<BoldText>
						{language.experiencePage.timeline.labelInstitution}: <span>Poornima College Of Engineering</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelCategory}: <span>{language.experiencePage.timeline.labelBachelorDegree}</span>
					</BoldText>
					<BoldText>
						{language.experiencePage.timeline.labelTitle}: <span>Computer Science and Engineering</span>
					</BoldText>
				</TimelineContent>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
}
